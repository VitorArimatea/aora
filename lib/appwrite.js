import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.va.aora',
  projectId: '667d5b49002d011ae5f8',
  databaseId: '667d5e4000290438cfc2',
  userCollectionId: '667d5e890025a516c220',
  videoColletionId: '667d62f50012ae30a7c7',
  storageId: '667d675d001ff90b207b'
}

const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username 
    );

    if (!newAccount) throw new Error('Failed to create account');

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(), 
        {
            accountId: newAccount.$id,
            username: username,
            email: email,
            avatar: avatarUrl,
        },
    );   
        
        return newUser;
    } catch (error) {
    throw new Error(error.message); 
  }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);

        return session;        
    } catch (error) {
        throw new Error(error.message);
    }
}   
