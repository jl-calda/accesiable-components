import Image from "next/image";
import Link from "next/link";

const components = [
  {
    label: "Combo Box",
    href: "/combobox",
  },
  {
    label: "Input",
    href: "/input",
  },
  {
    label: "Select Pill",
    href: "/selectpill",
  },
];

export default function Home() {
  return (
    <main>
      Main
      <ul>
        {components.map((component) => (
          <li key={crypto.randomUUID()}>
            <Link href={component.href}>{component.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
