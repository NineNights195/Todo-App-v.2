"use client";
import React, { useState, useEffect } from "react";
import { Box, Center, Group, Stack, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Group style={{ backgroundColor: "#9c36b5", height: "100vh" }}>
      <Center
        h={100}
        bg={"var(--mantine-color-white)"}
        style={{ borderRadius: "10px", padding: "35vh", margin: "auto" }}
      >
        <Title order={1}>Todo List</Title>
      </Center>
    </Group>
  );
}
