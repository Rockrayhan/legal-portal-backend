import { LegalDoc } from "../interfaces/legalDoc.interface";

export const legalDocs: LegalDoc[] = [
  {
    id: 1,
    title: "Contract Law",
    content:
      "A contract is a legally binding agreement between two or more parties. Breach of contract occurs when one party fails to meet the agreed obligations.",
    summary:
      "Explains contracts and what happens when one party breaks an agreement.",
  },
  {
    id: 2,
    title: "Criminal Law",
    content:
      "Criminal law defines acts considered offenses against the state, such as theft, fraud, or assault, and prescribes penalties for them.",
    summary:
      "Describes offenses like theft or fraud and their punishments.",
  },
  {
    id: 3,
    title: "Employment Law",
    content:
      "Employment law governs the relationship between employers and employees, including contracts, wages, termination, and workplace rights.",
    summary:
      "Regulates employer-employee relationships and workers’ rights.",
  },
];
