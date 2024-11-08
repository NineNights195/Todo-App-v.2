"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Group,
  Stack,
  Text,
  Title,
  TextInput,
  Checkbox,
} from "@mantine/core";
import { text } from "stream/consumers";

export default function Home() {
  // Define Task interface
  interface Task {
    id: number;
    text: string;
    completed: boolean;
  }

  // State
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: false },
    { id: 3, text: "Task 3", completed: false },
    { id: 4, text: "Task 4", completed: false },
    { id: 5, text: "Task 5", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  // ID Counter
  let idCounter = tasks.length;

  // Add Task
  const addTask = (text: string) => {
    idCounter++;
    setTasks([...tasks, { id: idCounter, text, completed: false }]);
  };

  return (
    <Group style={{ backgroundColor: "#9c36b5", height: "100vh" }}>
      <Center
        h={100}
        bg={"var(--mantine-color-white)"}
        style={{ borderRadius: "10px", padding: "35vh", margin: "auto" }}
      >
        <Stack>
          {/* Title */}
          <Title order={1}>Todo List</Title>

          {/* Add Task */}
          <Group>
            <Button disabled={newTask === ""} onClick={() => addTask(newTask)}>
              Add Task
            </Button>
            <TextInput
              placeholder="Add a new task"
              onChange={(e) => setNewTask(e.target.value)}
            />
          </Group>

          {/* Task List */}
          {tasks.map((task) => (
            <Checkbox size="lg" label={task.text} />
          ))}
        </Stack>
      </Center>
    </Group>
  );
}
