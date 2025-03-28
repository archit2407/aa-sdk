import { SidebarItem } from "vocs";

export const reactNativeSidebar: SidebarItem[] = [
  { text: "Overview", link: "/react-native/overview" },
  {
    text: "Getting started with Expo",
    link: "/react-native/getting-started/getting-started-expo",
  },
  {
    text: "Getting started with Bare React Native",
    link: "/react-native/getting-started/getting-started-rn-bare",
  },
  {
    text: "Signer setup",
    link: "/react-native/signer/setup-guide",
  },
  {
    text: "Setting up the Accounts Provider",
    link: "/react-native/signer/authenticating-users/setting-up-the-accounts-provider",
  },
  {
    text: "Authentication methods",
    items: [
      {
        text: "Email OTP",
        link: "/react-native/signer/authenticating-users/authenticating-with-otp",
      },
      {
        text: "Social Login",
        link: "/react-native/signer/authenticating-users/authenticating-with-social-auth",
      },
      {
        text: "Email Magic Link",
        link: "/react-native/signer/authenticating-users/authenticating-with-magic-link",
      },
    ],
  },
  {
    // NOTE: it's possible to reference other MDX files / create shared snippets
    // it probably makes sense to just share the same guides as the Infra guides here
    text: "Using smart accounts",
    items: [
      {
        text: "Setup a smart account client",
        link: "/react-native/using-smart-accounts/setup-smart-account-client",
      },
      {
        text: "Send user operations",
        link: "/react-native/using-smart-accounts/send-user-operations",
      },
      {
        text: "Sponsor gas",
        link: "/react-native/using-smart-accounts/sponsor-gas",
      },
      {
        text: "Retry user operations",
        link: "/react-native/using-smart-accounts/retry-user-operations",
      },
    ],
  },
];
