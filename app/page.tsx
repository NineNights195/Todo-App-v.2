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
  ScrollArea,
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
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  // Remove tasks
  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

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
          <ScrollArea h={300}>
            {tasks.map((task) => (
              <Group key={task.id} justify="space-between" w="100%">
                <Checkbox size="lg" label={task.text} />
                {/* Remove Button */}
                <Button
                  variant="outline"
                  color="red"
                  onClick={() => removeTask(task.id)}
                >
                  Remove
                </Button>
              </Group>
            ))}
          </ScrollArea>
        </Stack>
      </Center>
    </Group>
  );
}
