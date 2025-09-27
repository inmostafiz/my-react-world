import React from "react";

const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg shadow-md h-fit">
      <h2 className="text-lg font-semibold mb-4">Task Status</h2>

      {tasks.length === 0 ? (
        <p className="text-sm text-gray-500">No active tasks yet.</p>
      ) : (
        <ul className="space-y-5">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
            >
              <span className="text-sm">{task.title}</span>
              <button
                className="px-3 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-green-700"
                onClick={() => onComplete(task)}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskStatus;