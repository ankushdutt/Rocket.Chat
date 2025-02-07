import { IMediaStreamRenderer } from '@rocket.chat/core-typings';

import { VoIPUser } from './VoIPUser';

export class SimpleVoipUser {
	static async create(
		userName: string,
		password: string,
		registrar: string,
		webSocketPath: string,
		iceServers: Array<object>,
		voipRetryCount: number,
		callType?: 'audio' | 'video',
		mediaStreamRendered?: IMediaStreamRenderer,
	): Promise<VoIPUser> {
		const config = {
			authUserName: userName,
			authPassword: password,
			sipRegistrarHostnameOrIP: registrar,
			webSocketURI: webSocketPath,
			enableVideo: callType === 'video',
			iceServers,
			connectionRetryCount: voipRetryCount,
		};

		return VoIPUser.create(config, mediaStreamRendered);
	}
}
