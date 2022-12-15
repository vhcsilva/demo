import getConfig from "next/config";
import { create } from 'ipfs-http-client'

const { 
  publicRuntimeConfig: {
    ipfsProjectId,
    ipfsKeySecret
  } 
} = getConfig();

const auth = 'Basic ' + Buffer.from(ipfsProjectId + ':' + ipfsKeySecret).toString('base64');

const ipfsClient = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

const addToIpfs = async (data: string) => {
  return ipfsClient.add(data, {
    pin: true
  });
}

export {
  ipfsClient,
  addToIpfs
};