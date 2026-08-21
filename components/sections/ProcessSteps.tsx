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
      <div className="max-w-3xl">
        <p className="eyebrow-pill">
          Simple Process
        </p>
        <h2 className="font-display mt-5 text-4xl font-medium leading-tight tracking-[-0.035em] text-brand-navy sm:text-6xl">
          Three steps. No drawn-out first meeting.
        </h2>
      </div>

      <div className="mt-12 grid border-t border-brand-navy/20 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            data-reveal
            className="relative border-b border-brand-navy/20 px-1 py-7 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0"
            style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
          >
            <p className="font-display text-4xl text-brand-limeDark/70">
              0{index + 1}
            </p>
            <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-brand-navy">
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
