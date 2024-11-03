import React, { PropsWithChildren } from "react";

export default class EncryptPage extends React.Component {
    constructor(props: PropsWithChildren) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <section className="px-8 py-8 w-full h-full flex-wrap flex">
                <h1 className="tracking-wider font-light uppercase text-gray-600">Encryption</h1>

                <section className="mt-8 gap-5 grid grid-cols-2 w-full h-full">
                    <div className="w-full p-5 border gap-2 rounded-[12px] min-h-[250px] bg-gray-50 flex flex-col">
                        <div className="w-full">
                            <div className="grid gap-1">
                                <label htmlFor="key_size" className="text-xs">Select Account (Public Key)</label>
                                <select
                                    name="key_size"
                                    className="open-sans focus:outline-none focus:ring-2 focus:ring-green-800 px-3 py-3 bg-gray-100 rounded-lg border border-gray-300 transition-shadow"
                                >
                                    <option value="id_goes_here">Master Key</option>
                                    <option value="id2_goes_here">Personal Key</option>
                                    <option value="custom">Custom</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full grid gap-1">
                            <label htmlFor="public_key" className="text-xs">Message To Encrypt</label>
                            <textarea
                                rows={10}
                                name="public_key"
                                id="publicKey"
                                className="focus:outline-none focus:ring-2 focus:ring-green-800p-4 bg-gray-100 rounded-[7px] border border-gray-300">
                            </textarea>
                        </div>
                    </div>

                    <div className="w-full p-5 border gap-1 rounded-[12px] min-h-[250px] bg-gray-50 flex flex-col">
                        <label htmlFor="encrypted_message" className="text-xs">Encrypted Output</label>
                        <textarea
                            name="encrypted_message"
                            id="encryptedMessage"
                            className="h-full focus:outline-none focus:ring-2 focus:ring-green-800p-4 bg-gray-100 rounded-[7px] border border-gray-300">
                        </textarea>
                    </div>
                </section>
            </section>
        );
    }
}
