import React from "react";
import { Stack, Text, YStack } from "tamagui";

export function Test() {
    const values = new Array(10).fill(0).map((_, i) => i);

    return <YStack>
        {values.map((v, idx) => (
            <Stack marginBottom={idx !== values.length - 1 ? 12 : 0} key={idx}>
                <Text>{v}</Text>
            </Stack>
        ))}
        
    </YStack>
}