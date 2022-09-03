import { Center, Title, Stack, Button, Text } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons';

export default function HomePage() {
  return (
    <>
      <Center style={{ height: '100vh' }}>
        <Stack align="center" spacing={10}>
          <Title order={1} size={50} variant="gradient">
            AtomMDB
          </Title>
          <Text>Movie reviews for the cool kids</Text>
          <Button
            leftIcon={<IconBrandGoogle size="18" />}
            variant="light"
            color="indigo"
            radius="lg"
            mt={10}
          >
            Sign in with Google
          </Button>
        </Stack>
      </Center>
    </>
  );
}
