import React from "react";
import useLocalStorage from "use-local-storage";
import { v4 as uuid } from "uuid";

type TodosData = {
  [id: string]: { title: string; lastChecked: Date | null };
};

export const useTodos = () => {
  const [data, setData] = useLocalStorage<TodosData>("ok-daily-data", {
    [uuid()]: { title: "Hello World", lastChecked: null },
  });

  const validateData = () => {
    const newData = Object.entries(data!).reduce((acc, [id, value]) => {
      if (value.title === "") {
        return acc;
      }
      return {
        ...acc,
        [id]: value,
      };
    }, {});
    setData(newData);
  };

  React.useEffect(() => {
    validateData();
  }, []);

  const [isEditing, setIsEditing] = React.useState(false);
  const handleStartEditing = () => setIsEditing(true);
  const handleStopEditing = () => {
    validateData();
    setIsEditing(false);
  };

  const handleAdd = () => {
    const id = uuid();
    setData((prev) => ({
      ...prev,
      [id]: { title: "", lastChecked: null },
    }));
    setTimeout(() => document.getElementById(id)?.focus(), 0);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [event.target.id]: {
        ...prev![event.target.id],
        title: event.target.value,
      },
    }));
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.id;
    const { [id]: _, ...rest } = data;
    setData(rest);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [event.target.id]: {
        ...prev![event.target.id],
        lastChecked: event.target.checked ? new Date() : null,
      },
    }));
  };

  const checkedToday = (id: string) => {
    const lastChecked = new Date(data[id]?.lastChecked || 0);
    if (!lastChecked || lastChecked.toString() === "Invalid Date") {
      return false;
    }
    const today = new Date();
    return (
      lastChecked.getDate() === today.getDate() &&
      lastChecked.getMonth() === today.getMonth() &&
      lastChecked.getFullYear() === today.getFullYear()
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAdd();
    } else if (event.key === "Escape") {
      handleStopEditing();
    } else if (event.key === "Backspace" && event.currentTarget.value === "") {
      handleDelete(event as any);
    } else if (event.key === "ArrowUp") {
      const id = event.currentTarget.id;
      const ids = Object.keys(data);
      const index = ids.indexOf(id);
      if (index > 0) {
        setTimeout(() => document.getElementById(ids[index - 1])?.focus(), 0);
      }
    } else if (event.key === "ArrowDown") {
      const id = event.currentTarget.id;
      const ids = Object.keys(data);
      const index = ids.indexOf(id);
      if (index < ids.length - 1) {
        setTimeout(() => document.getElementById(ids[index + 1])?.focus(), 0);
      } else if (index === ids.length - 1) {
        handleAdd();
      }
    }
  };

  return {
    data,
    handleAdd,
    handleChange,
    handleDelete,
    handleCheck,
    isEditing,
    handleStartEditing,
    handleStopEditing,
    checkedToday,
    handleKeyDown,
  };
};
