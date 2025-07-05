import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const tasks = [
  {
    title: "DSA by Abdul Bari",
    total: 163,
    unit: "videos",
    dailyTarget: 5.5,
  },
  {
    title: "Statistics & Probability",
    total: 55,
    unit: "videos",
    dailyTarget: 2,
  },
  {
    title: "Java (99 topics)",
    total: 99,
    unit: "topics",
    dailyTarget: 3.3,
  },
  {
    title: "TanAI Project",
    total: 30,
    unit: "hours",
    dailyTarget: 1,
  },
  {
    title: "Python for Everybody",
    total: 9 * 60,
    unit: "minutes",
    dailyTarget: 15,
  },
  {
    title: "AI for Everyone",
    total: 9 * 60,
    unit: "minutes",
    dailyTarget: 15,
  },
  {
    title: "Fundamentals of Graphic Design",
    total: 9 * 60,
    unit: "minutes",
    dailyTarget: 15,
  },
  {
    title: "HTML, CSS, JavaScript for Web Devs",
    total: 9 * 60,
    unit: "minutes",
    dailyTarget: 15,
  },
  {
    title: "Java Programming and SW Fundamentals",
    total: 9 * 60,
    unit: "minutes",
    dailyTarget: 15,
  },
  {
    title: "Introductory C Programming",
    total: 9 * 60,
    unit: "minutes",
    dailyTarget: 15,
  },
  {
    title: "C# for Unity Game Dev",
    total: 9 * 60,
    unit: "minutes",
    dailyTarget: 15,
  },
  {
    title: "Machine Learning",
    total: 9 * 60,
    unit: "minutes",
    dailyTarget: 15,
  },
];

const dailySchedule = [
  {
    day: "Monday",
    start: "2:30 PM",
    blocks: [
      "2:30–3:55 PM → DSA",
      "3:55–4:20 PM → Statistics",
      "4:20–6:20 PM → Java",
      "6:20–7:20 PM → TanAI",
      "7:20–9:20 PM → Coursera Courses (30 mins/course)"
    ]
  },
  {
    day: "Tuesday/Wednesday",
    start: "5:30 PM",
    blocks: [
      "5:30–6:55 PM → DSA",
      "6:55–7:20 PM → Statistics",
      "7:20–9:20 PM → Java",
      "9:20–10:20 PM → Coursera (30 mins/course)"
    ]
  },
  {
    day: "Thursday/Friday",
    start: "1:00 PM",
    blocks: [
      "1:00–2:05 PM → DSA",
      "2:05–2:30 PM → Statistics",
      "2:30–4:30 PM → Java",
      "4:30–6:00 PM → Coursera (45 mins/course)",
      "6:00–7:00 PM → TanAI"
    ]
  },
  {
    day: "Saturday/Sunday",
    start: "8:30 AM",
    blocks: [
      "8:30–9:55 AM → DSA",
      "9:55–10:20 AM → Statistics",
      "10:20–12:20 PM → Java",
      "2:00–4:00 PM → Coursera (1 hr/course)",
      "4:00–5:00 PM → TanAI"
    ]
  }
];

export default function Tracker() {
  const [progress, setProgress] = useState(
    tasks.map(() => ({ done: 0 }))
  );

  const handleComplete = (index) => {
    const updated = [...progress];
    updated[index].done = Math.min(
      tasks[index].total,
      updated[index].done + tasks[index].dailyTarget
    );
    setProgress(updated);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">📅 Vinay's Daily Progress Tracker</h1>

      {dailySchedule.map((day, index) => (
        <Card key={index} className="bg-slate-50">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">🕓 {day.day} (Start: {day.start})</h2>
            <ul className="list-disc ml-6 mt-2 text-sm">
              {day.blocks.map((block, i) => (
                <li key={i}>{block}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}

      {tasks.map((task, index) => (
        <Card key={index} className="bg-white shadow-md">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{task.title}</h2>
                <p className="text-sm text-gray-600">
                  {progress[index].done} / {task.total} {task.unit} completed
                </p>
              </div>
              <Button onClick={() => handleComplete(index)}>+{task.dailyTarget}</Button>
            </div>
            <Progress value={(progress[index].done / task.total) * 100} className="mt-2" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
