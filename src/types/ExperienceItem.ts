export type ExperienceItem = {
  title: string;                
  org: string;                  
  date: string;                 
  location?: string;            
  logo: string;                 
  type: 'Internship' | 'Hackathon' | 'Research' | 'Volunteering'; 
  skills: string[];             
  description: string;          
  link?: string;                
  highlights?: string[];        
};
