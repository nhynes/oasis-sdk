import * as misc from './misc';
import * as signature from './signature';
import * as types from './types';

export const ROLE_COMPUTE_WORKER = 1 << 0;
export const ROLE_STORAGE_WORKER = 1 << 1;
export const ROLE_KEY_MANAGER = 1 << 2;
export const ROLE_VALIDATOR = 1 << 3;
export const ROLE_CONSENSUS_RPC = 1 << 4;

export const TEE_HARDWARE_INVALID = 0;
export const TEE_HARDWARE_INTEL_SGX = 1;
export const TEE_HARDWARE_RESERVED = TEE_HARDWARE_INTEL_SGX + 1;

export const INVALID_VERSION = 65536;

export const LATEST_ENTITY_DESCRIPTOR_VERSION = 1;
export const LATEST_NODE_DESCRIPTOR_VERSION = 1;

export const CODE_NO_ERROR = 0;

export const UNKNOWN_MODULE = 'unknown';
export const CODE_UNKNOWN_ERROR = 1;

export const IDENTITY_MODULE_NAME = 'identity';
export const CODE_CERTIFICATE_ROTATION_FORBIDDEN = 1;

export async function openSignedEntity(context: string, signed: types.SignatureSigned) {
    return misc.fromCBOR(await signature.openSigned(context, signed)) as types.CommonEntity;
}

export async function signSignedEntity(signer: signature.ContextSigner, context: string, entity: types.CommonEntity) {
    return await signature.signSigned(signer, context, misc.toCBOR(entity));
}

export async function openMultiSignedNode(context: string, multiSigned: types.SignatureMultiSigned) {
    return misc.fromCBOR(await signature.openMultiSigned(context, multiSigned)) as types.CommonNode;
}

export async function signMultiSignedNode(signers: signature.ContextSigner[], context: string, node: types.CommonNode) {
    return await signature.signMultiSigned(signers, context, misc.toCBOR(node));
}
