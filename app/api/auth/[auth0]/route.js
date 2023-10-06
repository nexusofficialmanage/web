import { handleAuth } from '@auth0/nextjs-auth0';

import { connectToDB } from '@/utils/database';

export const GET = handleAuth();