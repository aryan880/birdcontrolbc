import { Container } from "@/components/layout/Container";

type TrustBarProps = {
  items: Array<{
    title: string;
    description: string;
  }>;
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="-mt-px border-y border-brand-line/80 bg-white/80 py-4 backdrop-blur">
      <Container className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.title}
            data-reveal
            className="surface-card rounded-[1.4rem] bg-gradient-to-b from-white to-brand-soft px-4 py-4"
            style={{ ["--reveal-delay" as string]: `${index * 45}ms` }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-limeDark">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-brand-navy">{item.description}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
