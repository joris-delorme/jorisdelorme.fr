import { Button, Container, Heading, Html, Img, Section, Tailwind, Text } from "@react-email/components";
import * as React from "react";

export default function Email({ name }: { name: string }) {
    return (
        <Html lang="fr">
            <body className="w-full" style={{ backgroundColor: "#000", color: "#fff", minHeight: "804px" }}>
                <Tailwind
                    config={{
                        theme: {
                            extend: {
                                colors: {
                                    brand: "#007291",
                                },
                            },
                        },
                    }}
                >
                    <Container className="relative bg-cover flex justify-center bg-center font-sans min-h-[804px] pt-64 max-w-[856px] mx-auto w-full" style={{ backgroundImage: "url(/charlie.png)" }}>
                            <Section className="px-4 py-10 max-w-xl">
                                <Heading className="text-white">Bienvenu dans mon système {name} 👋.</Heading>
                                <Text className="max-w-lg pb-4 text-white leading-relaxed">J’espère que mon mail te trouvera en plaine forme ! Si c’est pas le cas, et oui on est pas toujours à 100%... Va boire un vers d’eau, marche dehors 10 minutes et envoie un message a la personne à qui tu à le plus envie !</Text>
                                <Button
                                    href="https://example.com"
                                    className="bg-white text-black px-16 py-3 text-sm font-medium rounded-md"
                                >
                                    Rejoindre
                                </Button>
                            </Section>
                    </Container>
                </Tailwind>
            </body>
        </Html>
    );
}
