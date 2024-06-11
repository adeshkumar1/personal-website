import { Container, Group, ActionIcon, rem } from "@mantine/core";
import {
   IconBrandLinkedin,
   IconBrandGithub,
   IconBrandLeetcode,
} from "@tabler/icons-react";

import classes from "./FooterSocial.module.css";
import Link from "next/link";

export default function FooterSocial() {
   return (
      <div className={classes.footer}>
         <Container className={classes.inner}>
            Adesh Kumar
            <Group
               gap={0}
               className={classes.links}
               justify="flex-end"
               wrap="nowrap"
            >
               <ActionIcon size="lg" color="gray" variant="subtle">
               <Link href="http://github.com/adeshkumar1" target="_blank">
                     <IconBrandGithub
                        style={{ width: rem(18), height: rem(18) }}
                        stroke={1.5}
                     />
                  </Link>
               </ActionIcon>
               <ActionIcon size="lg" color="gray" variant="subtle">
               <Link href="http://linkedin.com/in/adesh-kumar2" target="_blank">
                     <IconBrandLinkedin
                        style={{ width: rem(18), height: rem(18) }}
                        stroke={1.5}
                     />
                  </Link>
               </ActionIcon>
               <ActionIcon size="lg" color="gray" variant="subtle">
                  <Link href="http://leetcode.com/u/adeshkumar1" target="_blank">
                     <IconBrandLeetcode
                        style={{ width: rem(18), height: rem(18) }}
                        stroke={1.5}
                     />
                  </Link>
               </ActionIcon>
            </Group>
         </Container>
      </div>
   );
}
