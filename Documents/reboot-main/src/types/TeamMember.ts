export interface TeamMember {
  name: string;
  image: string;
  description: string;
  linkedin: string;
  github: string;
  email: string;
  phone: string;
  tidligere_prosjekter: { name: string; href: string }[];
  praksisplasser: string[];
  teknologier: string[];
}