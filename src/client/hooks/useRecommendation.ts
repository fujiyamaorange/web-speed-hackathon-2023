import { useSuspenseQuery_experimental as useSuspenseQuery } from '@apollo/client';

import type { GetRecommendationsQueryResponse } from '../graphql/queries';
import { GetRecommendationsQuery } from '../graphql/queries';

export const useRecommendation = () => {
  const recommendationsResult = useSuspenseQuery<GetRecommendationsQueryResponse>(GetRecommendationsQuery);

  const recommendations = recommendationsResult?.data?.recommendations;
  
  if (recommendations == null) {
    return { recommendation: undefined };
  }
  
  // 常に一定
  const recommendation = recommendations[0];
  return { recommendation };
};
