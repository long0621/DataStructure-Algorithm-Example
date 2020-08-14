using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DJ_First
{
    public class QueueModel
    {
        public string Node { get; set; }
        public int Priority { get; set; }
    }
    public class PriorityQueue
    {
        public List<QueueModel> Values { get; set; }
        public PriorityQueue()
        {
            Values = new List<QueueModel>();
        }
        public void Sort()
        {
            Values = Values.OrderBy(valueItem => valueItem.Priority).ToList();//排序後轉型並寫入
        }
        public void Enqueue(string node,int priority)
        {
            var queueModel = new QueueModel() { Node=node, Priority  = priority };
            Values.Add(queueModel);
            this.Sort();
        }
        public QueueModel Dequeue()
        {
            var element = Values.FirstOrDefault();
            Values.RemoveAt(0);
            return element;
        }
    }
}
