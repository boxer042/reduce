export default function getGoogleProfile(accessToken: string): Promise<{
    socialId: string;
    email: string;
    photo: string | null;
    name: string;
    displayName: string;
}>;
