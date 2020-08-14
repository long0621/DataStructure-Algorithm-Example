using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;

namespace DJ_First
{
    public class Element
    {
        public string Vertex { get; set; }
        public int Weight { get; set; }
    }
    public class WeightedGraph
    {
        //宣告一個字典說明可用key/value做存取
        public IDictionary<string, object> adjacencyList { get; set; } 
        public WeightedGraph()
        {
            //ExpandoObject繼承了IDictionary,代表可動態新增物件屬性
            adjacencyList = new ExpandoObject();
        }

        public bool addVertex(string vertex)
        {
            //未找到屬性則新增list,找到則直接推入
            if (!adjacencyList.ContainsKey(vertex))
            {
                var neighbors = new List<Element>();
                adjacencyList[vertex] = neighbors;
                return true;
            }
            else
            {
                return false;
            }
        }
        public bool addEdge(string vertex1,string vertex2,int weight)
        {
            //vertex1插入元素
            var temp = (List <Element>)adjacencyList[vertex1];
            var element = new Element() { Vertex = vertex2, Weight = weight };
            temp.Add(element);

            //vertex2插入元素
            temp = (List<Element>)adjacencyList[vertex2];
            element = new Element() { Vertex = vertex1, Weight = weight };
            temp.Add(element);

            return true;
        }
        public object Dijkstra(string startVertex,string endVertex)
        {
            var nodes = new PriorityQueue(); //建立優先佇列,讓當下權限最前面的會先被取出
            IDictionary<string, object> distances = new ExpandoObject(); 
            IDictionary<string, object> previous = new ExpandoObject();
            var path = new List<string>();
            var smallest = "";


            //初始化,起始點設為0,其餘設為無限大
            var props = adjacencyList.Keys;
            foreach (var vertex in props) {
                var vertexStr = vertex.ToString();//需從屬性轉成字串
                if (vertexStr == startVertex)
                {
                    distances[vertexStr] = 0;
                    nodes.Enqueue(vertexStr, 0);
                }
                else
                {
                    distances[vertexStr] = int.MaxValue;
                    nodes.Enqueue(vertexStr, int.MaxValue);
                }
                previous[vertexStr] = null;
            }

            //主要邏輯
            while (nodes.Values.Count != 0)
            {
                smallest = nodes.Dequeue().Node; //取出下一個要做的頂點(優先權最前面)
                
                if (smallest == endVertex)//smallest等於endVertex說明已完成查找,開始組成path陣列
                {
                    while (previous[smallest] != null) 
                    {
                        path.Add(smallest);
                        smallest = (string)previous[smallest];
                    }
                    break;//結束外圍while迴圈
                }

                //代表距離的list中,value不為無限大就執行
                if ((int)distances[smallest] != int.MaxValue)
                {
                    var list = (System.Collections.IList)adjacencyList[smallest];//宣告IEnumerable則可對字典的value進行遍歷
                    foreach (var neighbor in list)
                    {
                        var nextNode = (Element)neighbor;//使其能存取屬性
                        var candidate = (int)distances[smallest] + nextNode.Weight;
                        var nextNeighbor = nextNode.Vertex;

                        if (candidate < (int)distances[nextNeighbor])
                        {
                            distances[nextNeighbor] = candidate;
                            previous[nextNeighbor] = smallest;
                            nodes.Enqueue(nextNeighbor, candidate);
                        }
                    }
                }
            }
            path.Add(smallest);
            path.Reverse();
            return path;
        }

    }
}
