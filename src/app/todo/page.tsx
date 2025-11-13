"use client";

import { useEffect, useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "done" | "undone">("all");

  // Ambil data dari localStorage saat pertama kali
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  // Simpan setiap kali todos berubah
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Tambah tugas baru
  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // toogle status selesai
  const toggleTodo = (id: number) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  // Hapus Tugas
  const deletedTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter daftar berdasarkan status
  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.completed;
    if (filter === "undone") return !todo.completed;
    return true; // semua
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 p-4">
      <h1 className="text-3xl font-bold mb-4"> To-Do List</h1>

      {/* Input dan tombol tambah */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis tugas..."
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Tambah
        </button>
      </div>

      {/* filter */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded-md ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          Semua
        </button>
        <button
          onClick={() => setFilter("done")}
          className={`px-3 py-1 rounded-md ${
            filter === "undone" ? "bg-yellow-500 text-white" : "bg-white"
          }`}
        >
          Belum Selesai
        </button>
      </div>

      {/* Daftar Tugas */}
      <ul className="w-full max-w-md bg-white rounded-xl shadow-md p-4 space-y-2">
        {filteredTodos.length === 0 ? (
          <p className="text-gray-500 text-center"> Tidak ada tugas.</p>
        ) : (
          filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => toggleTodo(todo.id)}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                  className="cursor-pointer"
                />
                <span
                  className={`${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deletedTodo(todo.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                Hapus
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
