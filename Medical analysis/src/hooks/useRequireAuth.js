import { useUser } from '@clerk/clerk-react';

export function useRequireAuth(navigateTo) {
  const { isSignedIn } = useUser();
  return (navigate) => {
    if (isSignedIn) {
      navigate(navigateTo);
    } else {
      // Show Clerk modal or redirect to sign in
      window.Clerk.openSignIn();
    }
  };
}
