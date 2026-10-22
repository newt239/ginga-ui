"use client";

import { Button, FormControl, Input } from "@ginga-ui/core";
import { Send } from "lucide-react";

import styles from "../form-control.module.css";

export function BasicExample() {
  return (
    <FormControl className={styles.basicField} title="Username">
      <Input placeholder="Enter your username" />
    </FormControl>
  );
}

export function WithIdExample() {
  return (
    <FormControl
      className={styles.idField}
      title="Email address"
      htmlFor="email-input"
    >
      <Input id="email-input" type="email" placeholder="example@email.com" />
    </FormControl>
  );
}

export function MultipleFieldsExample() {
  return (
    <div className={styles.fieldList}>
      <FormControl title="Name">
        <Input placeholder="John Smith" />
      </FormControl>
      <FormControl title="Email address">
        <Input type="email" placeholder="example@email.com" />
      </FormControl>
      <FormControl title="Password">
        <Input type="password" placeholder="At least 8 characters" />
      </FormControl>
    </div>
  );
}

export function FormExample() {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form submitted!");
      }}
    >
      <FormControl title="Full name" htmlFor="name">
        <Input id="name" required />
      </FormControl>
      <FormControl title="Email address" htmlFor="email">
        <Input id="email" type="email" required />
      </FormControl>
      <Button type="submit" variant="filled" startIcon={<Send />}>
        Submit
      </Button>
    </form>
  );
}
