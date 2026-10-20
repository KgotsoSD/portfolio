import { useId, useState } from "react";

/**
 * A fictional re-creation of the kinds of screens I built on the Task Center project.
 * Every name, number and task below is made-up sample data. Nothing here comes from the client's system.
 */

type TabId = "digest" | "monitor";
type Frequency = "Daily" | "Weekly";
type RunStatus = "Completed" | "Completed with exceptions" | "Failed";
type Trigger = "Scheduled" | "Manual";

interface SampleTask {
  id: number;
  title: string;
  due: string;
  source: string;
}

interface SampleRun {
  id: string;
  trigger: Trigger;
  started: string;
  sourceCount: number;
  accepted: number;
  rejected: number;
  status: RunStatus;
  note: string;
}

const sampleTasks: SampleTask[] = [
  { id: 1, title: "Approve purchase request PR-2041", due: "Due today", source: "Procurement" },
  { id: 2, title: "Review site access request", due: "Due today", source: "Facilities" },
  { id: 3, title: "Sign off monthly report", due: "Due tomorrow", source: "Finance" },
  { id: 4, title: "Confirm leave request for next week", due: "Due Friday", source: "HR" },
  { id: 5, title: "Update supplier contact details", due: "Due next Monday", source: "Procurement" },
];

const sampleRuns: SampleRun[] = [
  {
    id: "R-0105",
    trigger: "Scheduled",
    started: "Today 06:00",
    sourceCount: 412,
    accepted: 412,
    rejected: 0,
    status: "Completed",
    note: "All records received, validated and archived.",
  },
  {
    id: "R-0104",
    trigger: "Manual",
    started: "Yesterday 14:32",
    sourceCount: 38,
    accepted: 36,
    rejected: 2,
    status: "Completed with exceptions",
    note: "2 records failed validation because no assignee was set. They are listed under exceptions.",
  },
  {
    id: "R-0103",
    trigger: "Scheduled",
    started: "Yesterday 06:00",
    sourceCount: 398,
    accepted: 398,
    rejected: 0,
    status: "Completed",
    note: "All records received, validated and archived.",
  },
  {
    id: "R-0102",
    trigger: "Scheduled",
    started: "2 days ago 06:00",
    sourceCount: 405,
    accepted: 0,
    rejected: 0,
    status: "Failed",
    note: "The source connector timed out before any records were received. A retry is needed.",
  },
];

const times = ["07:00", "08:00", "12:00", "16:00"];

function DigestDemo() {
  const [frequency, setFrequency] = useState<Frequency>("Daily");
  const [time, setTime] = useState("08:00");
  const [skipEmpty, setSkipEmpty] = useState(true);
  const timeId = useId();

  const tasks = frequency === "Daily" ? sampleTasks.slice(0, 3) : sampleTasks;
  const subject = `Your ${frequency.toLowerCase()} task digest: ${tasks.length} open tasks`;

  return (
    <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
      <form className="space-y-5 text-sm" onSubmit={(event) => event.preventDefault()}>
        <fieldset>
          <legend className="font-mono text-xs uppercase tracking-wider text-muted">Frequency</legend>
          <div className="mt-2 flex gap-4">
            {(["Daily", "Weekly"] as const).map((option) => (
              <label key={option} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="frequency"
                  value={option}
                  checked={frequency === option}
                  onChange={() => setFrequency(option)}
                  className="accent-[var(--color-accent)]"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor={timeId} className="font-mono text-xs uppercase tracking-wider text-muted">
            Delivery time
          </label>
          <select
            id={timeId}
            value={time}
            onChange={(event) => setTime(event.target.value)}
            className="mt-2 block w-full rounded-md border border-line bg-paper px-3 py-2"
          >
            {times.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={skipEmpty}
            onChange={(event) => setSkipEmpty(event.target.checked)}
            className="mt-0.5 accent-[var(--color-accent)]"
          />
          Don't send a digest when there are no open tasks
        </label>
      </form>

      <div
        className="rounded-lg border border-line bg-paper text-sm"
        role="group"
        aria-label="Email preview, sample data"
      >
        <div className="border-b border-line px-4 py-3">
          <p className="font-mono text-xs text-muted">Preview · sample data</p>
          <p className="mt-1 font-medium">{subject}</p>
        </div>
        <ul className="divide-y divide-line">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-start justify-between gap-4 px-4 py-3">
              <span>
                {task.title}
                <span className="block text-xs text-muted">{task.source}</span>
              </span>
              <span className="shrink-0 text-xs text-muted">{task.due}</span>
            </li>
          ))}
        </ul>
        <p className="border-t border-line px-4 py-3 text-xs text-muted">
          Delivered {frequency === "Daily" ? "every day" : "every week"} at {time}.{" "}
          {skipEmpty ? "Skipped when there is nothing to report." : "Sent even when there is nothing to report."}
        </p>
      </div>
    </div>
  );
}

function MonitorDemo() {
  const [selectedId, setSelectedId] = useState(sampleRuns[0]?.id ?? "");
  const selected = sampleRuns.find((run) => run.id === selectedId);
  const unreconciled = selected ? selected.sourceCount - selected.accepted - selected.rejected : 0;

  return (
    <div className="space-y-5 text-sm">
      <div className="overflow-x-auto rounded-lg border border-line">
        <table className="w-full min-w-[34rem] text-left">
          <caption className="sr-only">Sample ingest runs</caption>
          <thead className="bg-panel font-mono text-xs uppercase tracking-wider text-muted">
            <tr>
              <th scope="col" className="px-4 py-2 font-normal">Run</th>
              <th scope="col" className="px-4 py-2 font-normal">Trigger</th>
              <th scope="col" className="px-4 py-2 font-normal">Started</th>
              <th scope="col" className="px-4 py-2 font-normal">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {sampleRuns.map((run) => (
              <tr key={run.id} className={run.id === selectedId ? "bg-accent-soft" : undefined}>
                <td className="px-4 py-2">
                  <button
                    type="button"
                    aria-pressed={run.id === selectedId}
                    onClick={() => setSelectedId(run.id)}
                    className="font-mono underline decoration-line underline-offset-4 hover:decoration-accent"
                  >
                    {run.id}
                  </button>
                </td>
                <td className="px-4 py-2">{run.trigger}</td>
                <td className="px-4 py-2">{run.started}</td>
                <td className="px-4 py-2">{run.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="rounded-lg border border-line p-4" aria-live="polite">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Run details · {selected.id} · sample data
          </p>
          <dl className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div>
              <dt className="text-xs text-muted">Reported by source</dt>
              <dd className="text-lg font-medium">{selected.sourceCount}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Accepted</dt>
              <dd className="text-lg font-medium">{selected.accepted}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Rejected</dt>
              <dd className="text-lg font-medium">{selected.rejected}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Unreconciled</dt>
              <dd className="text-lg font-medium">{unreconciled}</dd>
            </div>
          </dl>
          <p className="mt-3 text-muted">{selected.note}</p>
        </div>
      )}
    </div>
  );
}

export default function TaskCenterDemo() {
  const [tab, setTab] = useState<TabId>("digest");

  const tabs: { id: TabId; label: string }[] = [
    { id: "digest", label: "Digest configuration" },
    { id: "monitor", label: "System monitor" },
  ];

  return (
    <div className="rounded-lg border border-line bg-panel p-4 sm:p-6">
      <div role="group" aria-label="Demo screens" className="flex flex-wrap gap-2">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={tab === item.id}
            onClick={() => setTab(item.id)}
            className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${
              tab === item.id
                ? "border-ink bg-ink text-paper"
                : "border-line bg-paper text-ink hover:border-ink"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-5">{tab === "digest" ? <DigestDemo /> : <MonitorDemo />}</div>
      <p className="mt-5 text-xs text-muted">
        Fictional demonstration with made-up sample data. It is not the client's system or interface.
      </p>
    </div>
  );
}
