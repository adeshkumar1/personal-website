import { Container, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandLeetcode,
  type Icon as TablerIcon,
} from "@tabler/icons-react";

import classes from "./FooterSocial.module.css";

type Social = {
  label: string;
  href: string;
  Icon: TablerIcon;
};

const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/adeshkumar1",
    Icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/adesh-kumar2",
    Icon: IconBrandLinkedin,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/adeshkumar1",
    Icon: IconBrandLeetcode,
  },
];

export default function FooterSocial() {
  return (
    <footer className="border-t-[2px] border-black dark:border-white">
      <Container className={classes.inner}>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          {socials.map(({ label, href, Icon }) => (
            // `component="a"` so this renders a single anchor. It previously
            // nested a <Link> inside ActionIcon's <button>, which is invalid.
            <ActionIcon
              key={href}
              component="a"
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              size="lg"
              color="gray"
              variant="subtle"
            >
              <Icon
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
                className="dark:text-white text-black"
              />
            </ActionIcon>
          ))}
        </Group>
      </Container>
    </footer>
  );
}
