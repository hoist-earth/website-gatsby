const useFeatureFlags = () => {
  return {
    featureAuth: process.env.GATSBY_FEATURE_AUTH === "1",
    featurePrograms: process.env.GATSBY_FEATURE_PROGRAMS === "1",
  }
}

export default useFeatureFlags
