/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

declare namespace Deno {
  namespace core {
    /** Call an op in Rust, and synchronously receive the result. */
    function opSync(opName: string, args?: any, buffer?: any): any;

    /** Call an op in Rust, and asynchronously receive the result. */
    function opAsync(opName: string, args?: any, buffer?: any): Promise<any>;

    /**
     * Retrieve a list of all registered ops, in the form of a map that maps op
     * name to internal numerical op id.
     */
    function ops(): Record<string, number>;

    /**
     * Retrieve a list of all open resources, in the form of a map that maps
     * resource id to the resource name.
     */
    function resources(): Record<string, string>;

    /** Close the resource with the specified op id. */
    function close(rid: number): void;

    /** Get heap stats for current isolate/worker */
    function heapStats(): Record<string, number>;

    /** Encode a string to its Uint8Array representation. */
    function encode(input: string): Uint8Array;
  }
}
