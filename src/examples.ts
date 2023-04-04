import { convert, Input, TrueInput } from "./types";

export const FRAUDULENT_EXAMPLES: Partial<Input>[] = [
  {
    title: "title fraud",
    location: "Mars",
    department: "Aviation",
    company_profile: "Boring",
    description: "babababbabababab abbababababa.",
    requirements: "errrr",
    benefits: "free food",
    salary_lower: 90,
    salary_upper: undefined,
    telecommuting: true,
    has_company_logo: true,
    has_questions: true,
    employment_type: "Other",
    required_experience: "Internship",
    required_education: "Bachelor's Degree",
    industry: "Marketing and Advertising",
    function: "Marketing",
  },
];
export const LEGIT_EXAMPLES: Partial<Input>[] = [
  {
    title: "title legti",
    location: "Mars",
    department: "Aviation",
    company_profile: "Boring",
    description: "babababbabababab abbababababa.",
    requirements: "errrr",
    benefits: "free food",
    salary_lower: 90,
    salary_upper: undefined,
    telecommuting: true,
    has_company_logo: true,
    has_questions: true,
    employment_type: "Other",
    required_experience: "Internship",
    required_education: "Bachelor's Degree",
    industry: "Marketing and Advertising",
    function: "Marketing",
  },
  {
    title: "title legit 2",
    location: "Mars",
    department: "Aviation",
    company_profile: "Boring",
    description: "babababbabababab abbababababa.",
    requirements: "errrr",
    benefits: "free food",
    salary_lower: 90,
    salary_upper: undefined,
    telecommuting: true,
    has_company_logo: true,
    has_questions: true,
    employment_type: "Other",
    required_experience: "Internship",
    required_education: "Bachelor's Degree",
    industry: "Marketing and Advertising",
    function: "Marketing",
  },
];