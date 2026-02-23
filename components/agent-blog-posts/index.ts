import { BlogPost } from './types';
import { foundationsPosts } from './foundations';
import { agentGuidesPosts } from './agent-guides';
import { jurisdictionsPosts } from './jurisdictions';
import { servicesPosts } from './services';
import { technicalPosts } from './technical';
import { postFormationPosts } from './post-formation';
import { faqsPosts } from './faqs';
import { useCasesPosts } from './use-cases';

export const POSTS: BlogPost[] = [
  ...foundationsPosts,
  ...agentGuidesPosts,
  ...jurisdictionsPosts,
  ...servicesPosts,
  ...technicalPosts,
  ...postFormationPosts,
  ...faqsPosts,
  ...useCasesPosts,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export type { BlogPost, Category, Audience } from './types';
export { CATEGORY_LABELS, AUDIENCE_LABELS } from './types';
