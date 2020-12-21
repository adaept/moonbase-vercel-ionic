import Image from "next/image";

export default function Home() {
  return (
    <ion-row>
      {new Array(8).fill("").map((k, i) => (
        <ion-col key={i} size="auto">
          <ion-card>
            <Image
              src="/ae-octocat-red.png"
              alt="Cool Katze"
              width={400}
              height={400}
            />
            <ion-card-header>
              <ion-card-subtitle>Location</ion-card-subtitle>
              <ion-card-title>Mountain View, CA</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-icon name="glasses" slot="start"></ion-icon>
              Cool cat tapping on the toe with a new hat, Ooh just cruising
              (Cool Cat lyrics by Queen)
            </ion-card-content>
          </ion-card>
        </ion-col>
      ))}
    </ion-row>
  );
}
