type ProcessStep = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow-pill">
          Simple Process
        </p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-navy sm:text-5xl">
          From first photos to a protected space.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step.title}
            data-reveal
            className="surface-card relative overflow-hidden rounded-[1.75rem] p-6"
            style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-lime via-brand-limeSoft to-transparent" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-limeDark">
              Step {index + 1}
            </p>
            <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-brand-navy">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-brand-slate">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
