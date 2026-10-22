"use client";

import { Alert, AlertDescription, AlertTitle } from "@ginga-ui/core";
import styles from "../alert.module.css";
import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react";

export function BasicExample() {
  return (
    <Alert icon={<Info />}>
      <AlertTitle>Notice</AlertTitle>
      <AlertDescription>
        The service will be unavailable tomorrow from 2:00 AM to 4:00 AM for
        scheduled maintenance.
      </AlertDescription>
    </Alert>
  );
}

export function VariantsExample() {
  return (
    <div className={styles.alertStack}>
      <Alert variant="info" icon={<Info />}>
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>A new version is available.</AlertDescription>
      </Alert>
      <Alert variant="success" icon={<CircleCheck />}>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes have been saved.</AlertDescription>
      </Alert>
      <Alert variant="warning" icon={<TriangleAlert />}>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          You are running low on storage space.
        </AlertDescription>
      </Alert>
      <Alert variant="danger" icon={<CircleAlert />}>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load data.</AlertDescription>
      </Alert>
    </div>
  );
}

export function DescriptionOnlyExample() {
  return (
    <Alert variant="success" icon={<CircleCheck />}>
      <AlertDescription>Your profile has been updated.</AlertDescription>
    </Alert>
  );
}
