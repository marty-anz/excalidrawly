import { Excalidraw } from '@excalidraw/excalidraw';
import { AppShell, Text, Group, Burger, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

export function Welcome() {
  const [opened, { toggle }] = useDisclosure(true);
  const { colorScheme } = useMantineColorScheme();

  return (
    <AppShell
      header={{ height: 40 }}
      navbar={{ width: 0, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group justify="space-between">
          <Group h="100%" px="md">
            <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: 'red', to: 'yellow' }}
            >
              Excalidraw locally
            </Text>

            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
          <Group h="100%" px="md">
            <ColorSchemeToggle />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main pb="0" pl="0" pr="0" pt="40px">
        <div style={{ height: 'calc(100vh - 40px)' }}>
          <Excalidraw theme={colorScheme === 'dark' ? 'dark' : 'light'} />
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
