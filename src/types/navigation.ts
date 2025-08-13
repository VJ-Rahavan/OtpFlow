export const NavigationConstants = {
  ONBOARDING_ONE: 'OnboardingOne',
  ONBOARDING_TWO: 'OnboardingTwo',
  ONBOARDING_THREE: 'OnboardingThree',
  ONBOARDING_FOUR: 'OnboardingFour',
  HOME: 'Home',
  LOGIN: 'Login',
  SIGNUP: 'SignUp',
  DUMMY: 'Dummy',
  SETTINGS: 'Settings',
  CHAT: 'Chat',
} as const;

export type RootStackParamList = {
  [NavigationConstants.ONBOARDING_ONE]: undefined;
  [NavigationConstants.ONBOARDING_TWO]: undefined;
  [NavigationConstants.ONBOARDING_THREE]: undefined;
  [NavigationConstants.ONBOARDING_FOUR]: undefined;
  [NavigationConstants.HOME]: undefined;
  [NavigationConstants.LOGIN]: undefined;
  [NavigationConstants.SIGNUP]: undefined;
  [NavigationConstants.DUMMY]: undefined;
  [NavigationConstants.DUMMY]: undefined;
  [NavigationConstants.CHAT]: undefined;
  [NavigationConstants.SETTINGS]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
