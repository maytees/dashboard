import * as appwrite from "appwrite";

const CLIENT: appwrite.Client = new appwrite.Client();

const PROJECTID: any = Deno.env.get("APPWRITE_PROJID")?.toString();
const ENDPOINT: any = Deno.env.get("APPWRITE_ENDPOINT")?.toString();

CLIENT.setEndpoint(ENDPOINT).setProject(PROJECTID);

export const ACCOUNT: appwrite.Account = new appwrite.Account(CLIENT);

export async function sessionActive(): Promise<boolean> {
  let ret = false;

  await ACCOUNT.get().then(() => {
    ret = true;
  });

  return ret;
}
