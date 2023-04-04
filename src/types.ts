export interface Input {
  title: string;
  location: string;
  department: string;
  company_profile: string;
  description: string;
  requirements: string;
  benefits: string;
  salary_lower: number;
  salary_upper: number;
  telecommuting: boolean;
  has_company_logo: boolean;
  has_questions: boolean;
  employment_type: string;
  required_experience: string;
  required_education: string;
  industry: string;
  function: string;
}

export const cat_column_options = {
  employment_type: [
    "Other",
    "Full-time",
    "-",
    "Part-time",
    "Contract",
    "Temporary",
  ],
  required_experience: [
    "Internship",
    "Not Applicable",
    "-",
    "Mid-Senior level",
    "Associate",
    "Entry level",
    "Executive",
    "Director",
  ],
  required_education: [
    "-",
    "Bachelor's Degree",
    "Master's Degree",
    "High School or equivalent",
    "Unspecified",
    "Some College Coursework Completed",
    "Vocational",
    "Certification",
    "Associate Degree",
    "Professional",
    "Doctorate",
    "Some High School Coursework",
    "Vocational - Degree",
    "Vocational - HS Diploma",
  ],
  industry: [
    "-",
    "Marketing and Advertising",
    "Computer Software",
    "Hospital & Health Care",
    "Online Media",
    "Information Technology and Services",
    "Financial Services",
    "Management Consulting",
    "Events Services",
    "Internet",
    "Facilities Services",
    "Consumer Electronics",
    "Telecommunications",
    "Consumer Services",
    "Construction",
    "Oil & Energy",
    "Education Management",
    "Building Materials",
    "Banking",
    "Food & Beverages",
    "Food Production",
    "Health, Wellness and Fitness",
    "Insurance",
    "E-Learning",
    "Cosmetics",
    "Staffing and Recruiting",
    "Venture Capital & Private Equity",
    "Leisure, Travel & Tourism",
    "Human Resources",
    "Pharmaceuticals",
    "Farming",
    "Legal Services",
    "Luxury Goods & Jewelry",
    "Machinery",
    "Real Estate",
    "Mechanical or Industrial Engineering",
    "Public Relations and Communications",
    "Consumer Goods",
    "Medical Practice",
    "Electrical/Electronic Manufacturing",
    "Hospitality",
    "Music",
    "Market Research",
    "Automotive",
    "Philanthropy",
    "Utilities",
    "Primary/Secondary Education",
    "Logistics and Supply Chain",
    "Design",
    "Gambling & Casinos",
    "Accounting",
    "Environmental Services",
    "Mental Health Care",
    "Investment Management",
    "Apparel & Fashion",
    "Media Production",
    "Publishing",
    "Medical Devices",
    "Information Services",
    "Retail",
    "Sports",
    "Computer Games",
    "Chemicals",
    "Aviation & Aerospace",
    "Business Supplies and Equipment",
    "Program Development",
    "Computer Networking",
    "Biotechnology",
    "Civic & Social Organization",
    "Religious Institutions",
    "Warehousing",
    "Airlines/Aviation",
    "Writing and Editing",
    "Restaurants",
    "Outsourcing/Offshoring",
    "Transportation/Trucking/Railroad",
    "Wireless",
    "Investment Banking",
    "Nonprofit Organization Management",
    "Libraries",
    "Computer Hardware",
    "Broadcast Media",
    "Printing",
    "Graphic Design",
    "Entertainment",
    "Wholesale",
    "Research",
    "Animation",
    "Government Administration",
    "Capital Markets",
    "Computer & Network Security",
    "Semiconductors",
    "Security and Investigations",
    "Architecture & Planning",
    "Maritime",
    "Fund-Raising",
    "Higher Education",
    "Renewables & Environment",
    "Motion Pictures and Film",
    "Law Practice",
    "Government Relations",
    "Packaging and Containers",
    "Sporting Goods",
    "Mining & Metals",
    "Import and Export",
    "International Trade and Development",
    "Professional Training & Coaching",
    "Textiles",
    "Commercial Real Estate",
    "Law Enforcement",
    "Package/Freight Delivery",
    "Translation and Localization",
    "Photography",
    "Industrial Automation",
    "Wine and Spirits",
    "Public Safety",
    "Civil Engineering",
    "Military",
    "Defense & Space",
    "Veterinary",
    "Executive Office",
    "Performing Arts",
    "Individual & Family Services",
    "Public Policy",
    "Nanotechnology",
    "Museums and Institutions",
    "Fishery",
    "Plastics",
    "Furniture",
    "Shipbuilding",
    "Alternative Dispute Resolution",
    "Ranching",
  ],
  function: [
    "Marketing",
    "Customer Service",
    "-",
    "Sales",
    "Health Care Provider",
    "Management",
    "Information Technology",
    "Other",
    "Engineering",
    "Administrative",
    "Design",
    "Production",
    "Education",
    "Supply Chain",
    "Business Development",
    "Product Management",
    "Financial Analyst",
    "Consulting",
    "Human Resources",
    "Project Management",
    "Manufacturing",
    "Public Relations",
    "Strategy/Planning",
    "Advertising",
    "Finance",
    "General Business",
    "Research",
    "Accounting/Auditing",
    "Art/Creative",
    "Quality Assurance",
    "Data Analyst",
    "Business Analyst",
    "Writing/Editing",
    "Distribution",
    "Science",
    "Training",
    "Purchasing",
    "Legal",
  ],
};

export interface TrueInput {
  title: string;
  location: string;
  department: string;
  company_profile: string;
  description: string;
  requirements: string;
  benefits: string;
  salary_lower: number | "-";
  salary_upper: number | "-";
  telecommuting: 0 | 1;
  has_company_logo: 1 | 0;
  has_questions: 0 | 1;
  employment_type:
    | "Other"
    | "Full-time"
    | "-"
    | "Part-time"
    | "Contract"
    | "Temporary";
  required_experience:
    | "Internship"
    | "Not Applicable"
    | "-"
    | "Mid-Senior level"
    | "Associate"
    | "Entry level"
    | "Executive"
    | "Director";
  required_education:
    | "-"
    | "Bachelor's Degree"
    | "Master's Degree"
    | "High School or equivalent"
    | "Unspecified"
    | "Some College Coursework Completed"
    | "Vocational"
    | "Certification"
    | "Associate Degree"
    | "Professional"
    | "Doctorate"
    | "Some High School Coursework"
    | "Vocational - Degree"
    | "Vocational - HS Diploma";
  industry:
    | "-"
    | "Marketing and Advertising"
    | "Computer Software"
    | "Hospital & Health Care"
    | "Online Media"
    | "Information Technology and Services"
    | "Financial Services"
    | "Management Consulting"
    | "Events Services"
    | "Internet"
    | "Facilities Services"
    | "Consumer Electronics"
    | "Telecommunications"
    | "Consumer Services"
    | "Construction"
    | "Oil & Energy"
    | "Education Management"
    | "Building Materials"
    | "Banking"
    | "Food & Beverages"
    | "Food Production"
    | "Health, Wellness and Fitness"
    | "Insurance"
    | "E-Learning"
    | "Cosmetics"
    | "Staffing and Recruiting"
    | "Venture Capital & Private Equity"
    | "Leisure, Travel & Tourism"
    | "Human Resources"
    | "Pharmaceuticals"
    | "Farming"
    | "Legal Services"
    | "Luxury Goods & Jewelry"
    | "Machinery"
    | "Real Estate"
    | "Mechanical or Industrial Engineering"
    | "Public Relations and Communications"
    | "Consumer Goods"
    | "Medical Practice"
    | "Electrical/Electronic Manufacturing"
    | "Hospitality"
    | "Music"
    | "Market Research"
    | "Automotive"
    | "Philanthropy"
    | "Utilities"
    | "Primary/Secondary Education"
    | "Logistics and Supply Chain"
    | "Design"
    | "Gambling & Casinos"
    | "Accounting"
    | "Environmental Services"
    | "Mental Health Care"
    | "Investment Management"
    | "Apparel & Fashion"
    | "Media Production"
    | "Publishing"
    | "Medical Devices"
    | "Information Services"
    | "Retail"
    | "Sports"
    | "Computer Games"
    | "Chemicals"
    | "Aviation & Aerospace"
    | "Business Supplies and Equipment"
    | "Program Development"
    | "Computer Networking"
    | "Biotechnology"
    | "Civic & Social Organization"
    | "Religious Institutions"
    | "Warehousing"
    | "Airlines/Aviation"
    | "Writing and Editing"
    | "Restaurants"
    | "Outsourcing/Offshoring"
    | "Transportation/Trucking/Railroad"
    | "Wireless"
    | "Investment Banking"
    | "Nonprofit Organization Management"
    | "Libraries"
    | "Computer Hardware"
    | "Broadcast Media"
    | "Printing"
    | "Graphic Design"
    | "Entertainment"
    | "Wholesale"
    | "Research"
    | "Animation"
    | "Government Administration"
    | "Capital Markets"
    | "Computer & Network Security"
    | "Semiconductors"
    | "Security and Investigations"
    | "Architecture & Planning"
    | "Maritime"
    | "Fund-Raising"
    | "Higher Education"
    | "Renewables & Environment"
    | "Motion Pictures and Film"
    | "Law Practice"
    | "Government Relations"
    | "Packaging and Containers"
    | "Sporting Goods"
    | "Mining & Metals"
    | "Import and Export"
    | "International Trade and Development"
    | "Professional Training & Coaching"
    | "Textiles"
    | "Commercial Real Estate"
    | "Law Enforcement"
    | "Package/Freight Delivery"
    | "Translation and Localization"
    | "Photography"
    | "Industrial Automation"
    | "Wine and Spirits"
    | "Public Safety"
    | "Civil Engineering"
    | "Military"
    | "Defense & Space"
    | "Veterinary"
    | "Executive Office"
    | "Performing Arts"
    | "Individual & Family Services"
    | "Public Policy"
    | "Nanotechnology"
    | "Museums and Institutions"
    | "Fishery"
    | "Plastics"
    | "Furniture"
    | "Shipbuilding"
    | "Alternative Dispute Resolution"
    | "Ranching";
  function:
    | "Marketing"
    | "Customer Service"
    | "-"
    | "Sales"
    | "Health Care Provider"
    | "Management"
    | "Information Technology"
    | "Other"
    | "Engineering"
    | "Administrative"
    | "Design"
    | "Production"
    | "Education"
    | "Supply Chain"
    | "Business Development"
    | "Product Management"
    | "Financial Analyst"
    | "Consulting"
    | "Human Resources"
    | "Project Management"
    | "Manufacturing"
    | "Public Relations"
    | "Strategy/Planning"
    | "Advertising"
    | "Finance"
    | "General Business"
    | "Research"
    | "Accounting/Auditing"
    | "Art/Creative"
    | "Quality Assurance"
    | "Data Analyst"
    | "Business Analyst"
    | "Writing/Editing"
    | "Distribution"
    | "Science"
    | "Training"
    | "Purchasing"
    | "Legal";
}

export function convert(partialInput: Partial<Input>): TrueInput {
  return {
    title: partialInput.title || "-",
    location: partialInput.location || "-",
    department: partialInput.department || "-",
    company_profile: partialInput.company_profile || "-",
    description: partialInput.description || "-",
    requirements: partialInput.requirements || "-",
    benefits: partialInput.benefits || "-",
    salary_lower:
      partialInput.salary_lower !== undefined ? partialInput.salary_lower : "-",
    salary_upper:
      partialInput.salary_upper !== undefined ? partialInput.salary_upper : "-",
    telecommuting: partialInput.telecommuting ? 1 : 0,
    has_company_logo: partialInput.has_company_logo ? 1 : 0,
    has_questions: partialInput.has_questions ? 1 : 0,
    employment_type: partialInput.employment_type || "-",
    required_experience: partialInput.required_experience || "-",
    required_education: partialInput.required_education || "-",
    industry: partialInput.industry || "-",
    function: partialInput.function || "-",
  } as TrueInput;
}
