"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@ginga-ui/core";
import styles from "../card.module.css";

export function BasicExample() {
  return (
    <Card className={styles.basicCard}>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>The card description appears here.</CardDescription>
      </CardHeader>
      <CardContent>
        The main content of the card. Use it to group related information.
      </CardContent>
    </Card>
  );
}

export function WithFooterExample() {
  return (
    <Card className={styles.withFooterCard}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy a new project in one click</CardDescription>
      </CardHeader>
      <CardContent>
        Enter a project name and choose your deployment settings. You can
        publish to production right away.
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button variant="filled">Deploy</Button>
      </CardFooter>
    </Card>
  );
}

export function MultipleCardsExample() {
  return (
    <div className={styles.plans}>
      <Card className={styles.plan}>
        <CardHeader>
          <CardTitle>Free</CardTitle>
          <CardDescription>Great for personal use</CardDescription>
        </CardHeader>
        <CardContent>
          <div className={styles.planPrice}>$0</div>
          <ul className={styles.planFeatures}>
            <li>Up to 5 projects</li>
            <li>Community support</li>
            <li>Core features</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Get started</Button>
        </CardFooter>
      </Card>

      <Card className={styles.plan}>
        <CardHeader>
          <CardTitle>Pro</CardTitle>
          <CardDescription>For teams</CardDescription>
        </CardHeader>
        <CardContent>
          <div className={styles.planPrice}>$20/month</div>
          <ul className={styles.planFeatures}>
            <li>Unlimited projects</li>
            <li>Priority support</li>
            <li>Advanced features</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="filled">Upgrade</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function SimpleExample() {
  return (
    <Card className={styles.simpleCard}>
      <CardContent>
        A simple card. It can be used without a header or footer.
      </CardContent>
    </Card>
  );
}
