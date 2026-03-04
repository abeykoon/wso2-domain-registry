
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Domain
 * 
 */
export type Domain = $Result.DefaultSelection<Prisma.$DomainPayload>
/**
 * Model Subdomain
 * 
 */
export type Subdomain = $Result.DefaultSelection<Prisma.$SubdomainPayload>
/**
 * Model DomainRequest
 * 
 */
export type DomainRequest = $Result.DefaultSelection<Prisma.$DomainRequestPayload>
/**
 * Model Approval
 * 
 */
export type Approval = $Result.DefaultSelection<Prisma.$ApprovalPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Domains
 * const domains = await prisma.domain.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Domains
   * const domains = await prisma.domain.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.domain`: Exposes CRUD operations for the **Domain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Domains
    * const domains = await prisma.domain.findMany()
    * ```
    */
  get domain(): Prisma.DomainDelegate<ExtArgs>;

  /**
   * `prisma.subdomain`: Exposes CRUD operations for the **Subdomain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subdomains
    * const subdomains = await prisma.subdomain.findMany()
    * ```
    */
  get subdomain(): Prisma.SubdomainDelegate<ExtArgs>;

  /**
   * `prisma.domainRequest`: Exposes CRUD operations for the **DomainRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DomainRequests
    * const domainRequests = await prisma.domainRequest.findMany()
    * ```
    */
  get domainRequest(): Prisma.DomainRequestDelegate<ExtArgs>;

  /**
   * `prisma.approval`: Exposes CRUD operations for the **Approval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Approvals
    * const approvals = await prisma.approval.findMany()
    * ```
    */
  get approval(): Prisma.ApprovalDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Domain: 'Domain',
    Subdomain: 'Subdomain',
    DomainRequest: 'DomainRequest',
    Approval: 'Approval',
    Comment: 'Comment',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "domain" | "subdomain" | "domainRequest" | "approval" | "comment" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Domain: {
        payload: Prisma.$DomainPayload<ExtArgs>
        fields: Prisma.DomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findFirst: {
            args: Prisma.DomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findMany: {
            args: Prisma.DomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          create: {
            args: Prisma.DomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          createMany: {
            args: Prisma.DomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          delete: {
            args: Prisma.DomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          update: {
            args: Prisma.DomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          deleteMany: {
            args: Prisma.DomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          aggregate: {
            args: Prisma.DomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDomain>
          }
          groupBy: {
            args: Prisma.DomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<DomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainCountArgs<ExtArgs>
            result: $Utils.Optional<DomainCountAggregateOutputType> | number
          }
        }
      }
      Subdomain: {
        payload: Prisma.$SubdomainPayload<ExtArgs>
        fields: Prisma.SubdomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubdomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubdomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          findFirst: {
            args: Prisma.SubdomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubdomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          findMany: {
            args: Prisma.SubdomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>[]
          }
          create: {
            args: Prisma.SubdomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          createMany: {
            args: Prisma.SubdomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubdomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>[]
          }
          delete: {
            args: Prisma.SubdomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          update: {
            args: Prisma.SubdomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          deleteMany: {
            args: Prisma.SubdomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubdomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubdomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubdomainPayload>
          }
          aggregate: {
            args: Prisma.SubdomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubdomain>
          }
          groupBy: {
            args: Prisma.SubdomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubdomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubdomainCountArgs<ExtArgs>
            result: $Utils.Optional<SubdomainCountAggregateOutputType> | number
          }
        }
      }
      DomainRequest: {
        payload: Prisma.$DomainRequestPayload<ExtArgs>
        fields: Prisma.DomainRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainRequestPayload>
          }
          findFirst: {
            args: Prisma.DomainRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainRequestPayload>
          }
          findMany: {
            args: Prisma.DomainRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainRequestPayload>[]
          }
          create: {
            args: Prisma.DomainRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainRequestPayload>
          }
          createMany: {
            args: Prisma.DomainRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DomainRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainRequestPayload>[]
          }
          delete: {
            args: Prisma.DomainRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainRequestPayload>
          }
          update: {
            args: Prisma.DomainRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainRequestPayload>
          }
          deleteMany: {
            args: Prisma.DomainRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DomainRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DomainRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainRequestPayload>
          }
          aggregate: {
            args: Prisma.DomainRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDomainRequest>
          }
          groupBy: {
            args: Prisma.DomainRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<DomainRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainRequestCountArgs<ExtArgs>
            result: $Utils.Optional<DomainRequestCountAggregateOutputType> | number
          }
        }
      }
      Approval: {
        payload: Prisma.$ApprovalPayload<ExtArgs>
        fields: Prisma.ApprovalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findFirst: {
            args: Prisma.ApprovalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          findMany: {
            args: Prisma.ApprovalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          create: {
            args: Prisma.ApprovalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          createMany: {
            args: Prisma.ApprovalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>[]
          }
          delete: {
            args: Prisma.ApprovalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          update: {
            args: Prisma.ApprovalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApprovalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalPayload>
          }
          aggregate: {
            args: Prisma.ApprovalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApproval>
          }
          groupBy: {
            args: Prisma.ApprovalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DomainCountOutputType
   */

  export type DomainCountOutputType = {
    subdomains: number
    requests: number
    auditLogs: number
  }

  export type DomainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subdomains?: boolean | DomainCountOutputTypeCountSubdomainsArgs
    requests?: boolean | DomainCountOutputTypeCountRequestsArgs
    auditLogs?: boolean | DomainCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCountOutputType
     */
    select?: DomainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountSubdomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubdomainWhereInput
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainRequestWhereInput
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type SubdomainCountOutputType
   */

  export type SubdomainCountOutputType = {
    requests: number
    auditLogs: number
  }

  export type SubdomainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | SubdomainCountOutputTypeCountRequestsArgs
    auditLogs?: boolean | SubdomainCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * SubdomainCountOutputType without action
   */
  export type SubdomainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubdomainCountOutputType
     */
    select?: SubdomainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubdomainCountOutputType without action
   */
  export type SubdomainCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainRequestWhereInput
  }

  /**
   * SubdomainCountOutputType without action
   */
  export type SubdomainCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type DomainRequestCountOutputType
   */

  export type DomainRequestCountOutputType = {
    approvals: number
    comments: number
    auditLogs: number
  }

  export type DomainRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvals?: boolean | DomainRequestCountOutputTypeCountApprovalsArgs
    comments?: boolean | DomainRequestCountOutputTypeCountCommentsArgs
    auditLogs?: boolean | DomainRequestCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * DomainRequestCountOutputType without action
   */
  export type DomainRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequestCountOutputType
     */
    select?: DomainRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DomainRequestCountOutputType without action
   */
  export type DomainRequestCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
  }

  /**
   * DomainRequestCountOutputType without action
   */
  export type DomainRequestCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * DomainRequestCountOutputType without action
   */
  export type DomainRequestCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Domain
   */

  export type AggregateDomain = {
    _count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  export type DomainMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: string | null
    environment: string | null
    owner: string | null
    team: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DomainMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: string | null
    environment: string | null
    owner: string | null
    team: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DomainCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    environment: number
    owner: number
    team: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DomainMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    environment?: true
    owner?: true
    team?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DomainMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    environment?: true
    owner?: true
    team?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DomainCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    environment?: true
    owner?: true
    team?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domain to aggregate.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Domains
    **/
    _count?: true | DomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainMaxAggregateInputType
  }

  export type GetDomainAggregateType<T extends DomainAggregateArgs> = {
        [P in keyof T & keyof AggregateDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomain[P]>
      : GetScalarType<T[P], AggregateDomain[P]>
  }




  export type DomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithAggregationInput | DomainOrderByWithAggregationInput[]
    by: DomainScalarFieldEnum[] | DomainScalarFieldEnum
    having?: DomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainCountAggregateInputType | true
    _min?: DomainMinAggregateInputType
    _max?: DomainMaxAggregateInputType
  }

  export type DomainGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: string
    environment: string
    owner: string
    team: string | null
    createdAt: Date
    updatedAt: Date
    _count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  type GetDomainGroupByPayload<T extends DomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainGroupByOutputType[P]>
            : GetScalarType<T[P], DomainGroupByOutputType[P]>
        }
      >
    >


  export type DomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    environment?: boolean
    owner?: boolean
    team?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subdomains?: boolean | Domain$subdomainsArgs<ExtArgs>
    requests?: boolean | Domain$requestsArgs<ExtArgs>
    auditLogs?: boolean | Domain$auditLogsArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    environment?: boolean
    owner?: boolean
    team?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    environment?: boolean
    owner?: boolean
    team?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subdomains?: boolean | Domain$subdomainsArgs<ExtArgs>
    requests?: boolean | Domain$requestsArgs<ExtArgs>
    auditLogs?: boolean | Domain$auditLogsArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Domain"
    objects: {
      subdomains: Prisma.$SubdomainPayload<ExtArgs>[]
      requests: Prisma.$DomainRequestPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: string
      environment: string
      owner: string
      team: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["domain"]>
    composites: {}
  }

  type DomainGetPayload<S extends boolean | null | undefined | DomainDefaultArgs> = $Result.GetResult<Prisma.$DomainPayload, S>

  type DomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DomainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DomainCountAggregateInputType | true
    }

  export interface DomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Domain'], meta: { name: 'Domain' } }
    /**
     * Find zero or one Domain that matches the filter.
     * @param {DomainFindUniqueArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DomainFindUniqueArgs>(args: SelectSubset<T, DomainFindUniqueArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Domain that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DomainFindUniqueOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DomainFindUniqueOrThrowArgs>(args: SelectSubset<T, DomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Domain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DomainFindFirstArgs>(args?: SelectSubset<T, DomainFindFirstArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Domain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DomainFindFirstOrThrowArgs>(args?: SelectSubset<T, DomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Domains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Domains
     * const domains = await prisma.domain.findMany()
     * 
     * // Get first 10 Domains
     * const domains = await prisma.domain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainWithIdOnly = await prisma.domain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DomainFindManyArgs>(args?: SelectSubset<T, DomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Domain.
     * @param {DomainCreateArgs} args - Arguments to create a Domain.
     * @example
     * // Create one Domain
     * const Domain = await prisma.domain.create({
     *   data: {
     *     // ... data to create a Domain
     *   }
     * })
     * 
     */
    create<T extends DomainCreateArgs>(args: SelectSubset<T, DomainCreateArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Domains.
     * @param {DomainCreateManyArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DomainCreateManyArgs>(args?: SelectSubset<T, DomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Domains and returns the data saved in the database.
     * @param {DomainCreateManyAndReturnArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Domains and only return the `id`
     * const domainWithIdOnly = await prisma.domain.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DomainCreateManyAndReturnArgs>(args?: SelectSubset<T, DomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Domain.
     * @param {DomainDeleteArgs} args - Arguments to delete one Domain.
     * @example
     * // Delete one Domain
     * const Domain = await prisma.domain.delete({
     *   where: {
     *     // ... filter to delete one Domain
     *   }
     * })
     * 
     */
    delete<T extends DomainDeleteArgs>(args: SelectSubset<T, DomainDeleteArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Domain.
     * @param {DomainUpdateArgs} args - Arguments to update one Domain.
     * @example
     * // Update one Domain
     * const domain = await prisma.domain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DomainUpdateArgs>(args: SelectSubset<T, DomainUpdateArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Domains.
     * @param {DomainDeleteManyArgs} args - Arguments to filter Domains to delete.
     * @example
     * // Delete a few Domains
     * const { count } = await prisma.domain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DomainDeleteManyArgs>(args?: SelectSubset<T, DomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DomainUpdateManyArgs>(args: SelectSubset<T, DomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Domain.
     * @param {DomainUpsertArgs} args - Arguments to update or create a Domain.
     * @example
     * // Update or create a Domain
     * const domain = await prisma.domain.upsert({
     *   create: {
     *     // ... data to create a Domain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Domain we want to update
     *   }
     * })
     */
    upsert<T extends DomainUpsertArgs>(args: SelectSubset<T, DomainUpsertArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCountArgs} args - Arguments to filter Domains to count.
     * @example
     * // Count the number of Domains
     * const count = await prisma.domain.count({
     *   where: {
     *     // ... the filter for the Domains we want to count
     *   }
     * })
    **/
    count<T extends DomainCountArgs>(
      args?: Subset<T, DomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DomainAggregateArgs>(args: Subset<T, DomainAggregateArgs>): Prisma.PrismaPromise<GetDomainAggregateType<T>>

    /**
     * Group by Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainGroupByArgs['orderBy'] }
        : { orderBy?: DomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Domain model
   */
  readonly fields: DomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Domain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subdomains<T extends Domain$subdomainsArgs<ExtArgs> = {}>(args?: Subset<T, Domain$subdomainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findMany"> | Null>
    requests<T extends Domain$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Domain$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends Domain$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Domain$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Domain model
   */ 
  interface DomainFieldRefs {
    readonly id: FieldRef<"Domain", 'String'>
    readonly name: FieldRef<"Domain", 'String'>
    readonly description: FieldRef<"Domain", 'String'>
    readonly status: FieldRef<"Domain", 'String'>
    readonly environment: FieldRef<"Domain", 'String'>
    readonly owner: FieldRef<"Domain", 'String'>
    readonly team: FieldRef<"Domain", 'String'>
    readonly createdAt: FieldRef<"Domain", 'DateTime'>
    readonly updatedAt: FieldRef<"Domain", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Domain findUnique
   */
  export type DomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findUniqueOrThrow
   */
  export type DomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findFirst
   */
  export type DomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findFirstOrThrow
   */
  export type DomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findMany
   */
  export type DomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domains to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain create
   */
  export type DomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to create a Domain.
     */
    data: XOR<DomainCreateInput, DomainUncheckedCreateInput>
  }

  /**
   * Domain createMany
   */
  export type DomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Domain createManyAndReturn
   */
  export type DomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Domain update
   */
  export type DomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to update a Domain.
     */
    data: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
    /**
     * Choose, which Domain to update.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain updateMany
   */
  export type DomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
  }

  /**
   * Domain upsert
   */
  export type DomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The filter to search for the Domain to update in case it exists.
     */
    where: DomainWhereUniqueInput
    /**
     * In case the Domain found by the `where` argument doesn't exist, create a new Domain with this data.
     */
    create: XOR<DomainCreateInput, DomainUncheckedCreateInput>
    /**
     * In case the Domain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
  }

  /**
   * Domain delete
   */
  export type DomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter which Domain to delete.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain deleteMany
   */
  export type DomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domains to delete
     */
    where?: DomainWhereInput
  }

  /**
   * Domain.subdomains
   */
  export type Domain$subdomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    where?: SubdomainWhereInput
    orderBy?: SubdomainOrderByWithRelationInput | SubdomainOrderByWithRelationInput[]
    cursor?: SubdomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubdomainScalarFieldEnum | SubdomainScalarFieldEnum[]
  }

  /**
   * Domain.requests
   */
  export type Domain$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    where?: DomainRequestWhereInput
    orderBy?: DomainRequestOrderByWithRelationInput | DomainRequestOrderByWithRelationInput[]
    cursor?: DomainRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DomainRequestScalarFieldEnum | DomainRequestScalarFieldEnum[]
  }

  /**
   * Domain.auditLogs
   */
  export type Domain$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Domain without action
   */
  export type DomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
  }


  /**
   * Model Subdomain
   */

  export type AggregateSubdomain = {
    _count: SubdomainCountAggregateOutputType | null
    _min: SubdomainMinAggregateOutputType | null
    _max: SubdomainMaxAggregateOutputType | null
  }

  export type SubdomainMinAggregateOutputType = {
    id: string | null
    name: string | null
    fullDomain: string | null
    description: string | null
    purpose: string | null
    status: string | null
    environment: string | null
    targetIP: string | null
    sslEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    domainId: string | null
  }

  export type SubdomainMaxAggregateOutputType = {
    id: string | null
    name: string | null
    fullDomain: string | null
    description: string | null
    purpose: string | null
    status: string | null
    environment: string | null
    targetIP: string | null
    sslEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    domainId: string | null
  }

  export type SubdomainCountAggregateOutputType = {
    id: number
    name: number
    fullDomain: number
    description: number
    purpose: number
    status: number
    environment: number
    targetIP: number
    sslEnabled: number
    createdAt: number
    updatedAt: number
    domainId: number
    _all: number
  }


  export type SubdomainMinAggregateInputType = {
    id?: true
    name?: true
    fullDomain?: true
    description?: true
    purpose?: true
    status?: true
    environment?: true
    targetIP?: true
    sslEnabled?: true
    createdAt?: true
    updatedAt?: true
    domainId?: true
  }

  export type SubdomainMaxAggregateInputType = {
    id?: true
    name?: true
    fullDomain?: true
    description?: true
    purpose?: true
    status?: true
    environment?: true
    targetIP?: true
    sslEnabled?: true
    createdAt?: true
    updatedAt?: true
    domainId?: true
  }

  export type SubdomainCountAggregateInputType = {
    id?: true
    name?: true
    fullDomain?: true
    description?: true
    purpose?: true
    status?: true
    environment?: true
    targetIP?: true
    sslEnabled?: true
    createdAt?: true
    updatedAt?: true
    domainId?: true
    _all?: true
  }

  export type SubdomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subdomain to aggregate.
     */
    where?: SubdomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subdomains to fetch.
     */
    orderBy?: SubdomainOrderByWithRelationInput | SubdomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubdomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subdomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subdomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subdomains
    **/
    _count?: true | SubdomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubdomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubdomainMaxAggregateInputType
  }

  export type GetSubdomainAggregateType<T extends SubdomainAggregateArgs> = {
        [P in keyof T & keyof AggregateSubdomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubdomain[P]>
      : GetScalarType<T[P], AggregateSubdomain[P]>
  }




  export type SubdomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubdomainWhereInput
    orderBy?: SubdomainOrderByWithAggregationInput | SubdomainOrderByWithAggregationInput[]
    by: SubdomainScalarFieldEnum[] | SubdomainScalarFieldEnum
    having?: SubdomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubdomainCountAggregateInputType | true
    _min?: SubdomainMinAggregateInputType
    _max?: SubdomainMaxAggregateInputType
  }

  export type SubdomainGroupByOutputType = {
    id: string
    name: string
    fullDomain: string
    description: string | null
    purpose: string
    status: string
    environment: string
    targetIP: string | null
    sslEnabled: boolean
    createdAt: Date
    updatedAt: Date
    domainId: string
    _count: SubdomainCountAggregateOutputType | null
    _min: SubdomainMinAggregateOutputType | null
    _max: SubdomainMaxAggregateOutputType | null
  }

  type GetSubdomainGroupByPayload<T extends SubdomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubdomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubdomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubdomainGroupByOutputType[P]>
            : GetScalarType<T[P], SubdomainGroupByOutputType[P]>
        }
      >
    >


  export type SubdomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fullDomain?: boolean
    description?: boolean
    purpose?: boolean
    status?: boolean
    environment?: boolean
    targetIP?: boolean
    sslEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domainId?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    requests?: boolean | Subdomain$requestsArgs<ExtArgs>
    auditLogs?: boolean | Subdomain$auditLogsArgs<ExtArgs>
    _count?: boolean | SubdomainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subdomain"]>

  export type SubdomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fullDomain?: boolean
    description?: boolean
    purpose?: boolean
    status?: boolean
    environment?: boolean
    targetIP?: boolean
    sslEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domainId?: boolean
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subdomain"]>

  export type SubdomainSelectScalar = {
    id?: boolean
    name?: boolean
    fullDomain?: boolean
    description?: boolean
    purpose?: boolean
    status?: boolean
    environment?: boolean
    targetIP?: boolean
    sslEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domainId?: boolean
  }

  export type SubdomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
    requests?: boolean | Subdomain$requestsArgs<ExtArgs>
    auditLogs?: boolean | Subdomain$auditLogsArgs<ExtArgs>
    _count?: boolean | SubdomainCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubdomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainDefaultArgs<ExtArgs>
  }

  export type $SubdomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subdomain"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs>
      requests: Prisma.$DomainRequestPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      fullDomain: string
      description: string | null
      purpose: string
      status: string
      environment: string
      targetIP: string | null
      sslEnabled: boolean
      createdAt: Date
      updatedAt: Date
      domainId: string
    }, ExtArgs["result"]["subdomain"]>
    composites: {}
  }

  type SubdomainGetPayload<S extends boolean | null | undefined | SubdomainDefaultArgs> = $Result.GetResult<Prisma.$SubdomainPayload, S>

  type SubdomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubdomainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubdomainCountAggregateInputType | true
    }

  export interface SubdomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subdomain'], meta: { name: 'Subdomain' } }
    /**
     * Find zero or one Subdomain that matches the filter.
     * @param {SubdomainFindUniqueArgs} args - Arguments to find a Subdomain
     * @example
     * // Get one Subdomain
     * const subdomain = await prisma.subdomain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubdomainFindUniqueArgs>(args: SelectSubset<T, SubdomainFindUniqueArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subdomain that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubdomainFindUniqueOrThrowArgs} args - Arguments to find a Subdomain
     * @example
     * // Get one Subdomain
     * const subdomain = await prisma.subdomain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubdomainFindUniqueOrThrowArgs>(args: SelectSubset<T, SubdomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subdomain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainFindFirstArgs} args - Arguments to find a Subdomain
     * @example
     * // Get one Subdomain
     * const subdomain = await prisma.subdomain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubdomainFindFirstArgs>(args?: SelectSubset<T, SubdomainFindFirstArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subdomain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainFindFirstOrThrowArgs} args - Arguments to find a Subdomain
     * @example
     * // Get one Subdomain
     * const subdomain = await prisma.subdomain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubdomainFindFirstOrThrowArgs>(args?: SelectSubset<T, SubdomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subdomains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subdomains
     * const subdomains = await prisma.subdomain.findMany()
     * 
     * // Get first 10 Subdomains
     * const subdomains = await prisma.subdomain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subdomainWithIdOnly = await prisma.subdomain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubdomainFindManyArgs>(args?: SelectSubset<T, SubdomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subdomain.
     * @param {SubdomainCreateArgs} args - Arguments to create a Subdomain.
     * @example
     * // Create one Subdomain
     * const Subdomain = await prisma.subdomain.create({
     *   data: {
     *     // ... data to create a Subdomain
     *   }
     * })
     * 
     */
    create<T extends SubdomainCreateArgs>(args: SelectSubset<T, SubdomainCreateArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subdomains.
     * @param {SubdomainCreateManyArgs} args - Arguments to create many Subdomains.
     * @example
     * // Create many Subdomains
     * const subdomain = await prisma.subdomain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubdomainCreateManyArgs>(args?: SelectSubset<T, SubdomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subdomains and returns the data saved in the database.
     * @param {SubdomainCreateManyAndReturnArgs} args - Arguments to create many Subdomains.
     * @example
     * // Create many Subdomains
     * const subdomain = await prisma.subdomain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subdomains and only return the `id`
     * const subdomainWithIdOnly = await prisma.subdomain.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubdomainCreateManyAndReturnArgs>(args?: SelectSubset<T, SubdomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subdomain.
     * @param {SubdomainDeleteArgs} args - Arguments to delete one Subdomain.
     * @example
     * // Delete one Subdomain
     * const Subdomain = await prisma.subdomain.delete({
     *   where: {
     *     // ... filter to delete one Subdomain
     *   }
     * })
     * 
     */
    delete<T extends SubdomainDeleteArgs>(args: SelectSubset<T, SubdomainDeleteArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subdomain.
     * @param {SubdomainUpdateArgs} args - Arguments to update one Subdomain.
     * @example
     * // Update one Subdomain
     * const subdomain = await prisma.subdomain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubdomainUpdateArgs>(args: SelectSubset<T, SubdomainUpdateArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subdomains.
     * @param {SubdomainDeleteManyArgs} args - Arguments to filter Subdomains to delete.
     * @example
     * // Delete a few Subdomains
     * const { count } = await prisma.subdomain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubdomainDeleteManyArgs>(args?: SelectSubset<T, SubdomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subdomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subdomains
     * const subdomain = await prisma.subdomain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubdomainUpdateManyArgs>(args: SelectSubset<T, SubdomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subdomain.
     * @param {SubdomainUpsertArgs} args - Arguments to update or create a Subdomain.
     * @example
     * // Update or create a Subdomain
     * const subdomain = await prisma.subdomain.upsert({
     *   create: {
     *     // ... data to create a Subdomain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subdomain we want to update
     *   }
     * })
     */
    upsert<T extends SubdomainUpsertArgs>(args: SelectSubset<T, SubdomainUpsertArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subdomains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainCountArgs} args - Arguments to filter Subdomains to count.
     * @example
     * // Count the number of Subdomains
     * const count = await prisma.subdomain.count({
     *   where: {
     *     // ... the filter for the Subdomains we want to count
     *   }
     * })
    **/
    count<T extends SubdomainCountArgs>(
      args?: Subset<T, SubdomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubdomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subdomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubdomainAggregateArgs>(args: Subset<T, SubdomainAggregateArgs>): Prisma.PrismaPromise<GetSubdomainAggregateType<T>>

    /**
     * Group by Subdomain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubdomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubdomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubdomainGroupByArgs['orderBy'] }
        : { orderBy?: SubdomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubdomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubdomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subdomain model
   */
  readonly fields: SubdomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subdomain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubdomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends DomainDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainDefaultArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    requests<T extends Subdomain$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Subdomain$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends Subdomain$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Subdomain$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subdomain model
   */ 
  interface SubdomainFieldRefs {
    readonly id: FieldRef<"Subdomain", 'String'>
    readonly name: FieldRef<"Subdomain", 'String'>
    readonly fullDomain: FieldRef<"Subdomain", 'String'>
    readonly description: FieldRef<"Subdomain", 'String'>
    readonly purpose: FieldRef<"Subdomain", 'String'>
    readonly status: FieldRef<"Subdomain", 'String'>
    readonly environment: FieldRef<"Subdomain", 'String'>
    readonly targetIP: FieldRef<"Subdomain", 'String'>
    readonly sslEnabled: FieldRef<"Subdomain", 'Boolean'>
    readonly createdAt: FieldRef<"Subdomain", 'DateTime'>
    readonly updatedAt: FieldRef<"Subdomain", 'DateTime'>
    readonly domainId: FieldRef<"Subdomain", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subdomain findUnique
   */
  export type SubdomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter, which Subdomain to fetch.
     */
    where: SubdomainWhereUniqueInput
  }

  /**
   * Subdomain findUniqueOrThrow
   */
  export type SubdomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter, which Subdomain to fetch.
     */
    where: SubdomainWhereUniqueInput
  }

  /**
   * Subdomain findFirst
   */
  export type SubdomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter, which Subdomain to fetch.
     */
    where?: SubdomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subdomains to fetch.
     */
    orderBy?: SubdomainOrderByWithRelationInput | SubdomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subdomains.
     */
    cursor?: SubdomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subdomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subdomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subdomains.
     */
    distinct?: SubdomainScalarFieldEnum | SubdomainScalarFieldEnum[]
  }

  /**
   * Subdomain findFirstOrThrow
   */
  export type SubdomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter, which Subdomain to fetch.
     */
    where?: SubdomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subdomains to fetch.
     */
    orderBy?: SubdomainOrderByWithRelationInput | SubdomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subdomains.
     */
    cursor?: SubdomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subdomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subdomains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subdomains.
     */
    distinct?: SubdomainScalarFieldEnum | SubdomainScalarFieldEnum[]
  }

  /**
   * Subdomain findMany
   */
  export type SubdomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter, which Subdomains to fetch.
     */
    where?: SubdomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subdomains to fetch.
     */
    orderBy?: SubdomainOrderByWithRelationInput | SubdomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subdomains.
     */
    cursor?: SubdomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subdomains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subdomains.
     */
    skip?: number
    distinct?: SubdomainScalarFieldEnum | SubdomainScalarFieldEnum[]
  }

  /**
   * Subdomain create
   */
  export type SubdomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * The data needed to create a Subdomain.
     */
    data: XOR<SubdomainCreateInput, SubdomainUncheckedCreateInput>
  }

  /**
   * Subdomain createMany
   */
  export type SubdomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subdomains.
     */
    data: SubdomainCreateManyInput | SubdomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subdomain createManyAndReturn
   */
  export type SubdomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subdomains.
     */
    data: SubdomainCreateManyInput | SubdomainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subdomain update
   */
  export type SubdomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * The data needed to update a Subdomain.
     */
    data: XOR<SubdomainUpdateInput, SubdomainUncheckedUpdateInput>
    /**
     * Choose, which Subdomain to update.
     */
    where: SubdomainWhereUniqueInput
  }

  /**
   * Subdomain updateMany
   */
  export type SubdomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subdomains.
     */
    data: XOR<SubdomainUpdateManyMutationInput, SubdomainUncheckedUpdateManyInput>
    /**
     * Filter which Subdomains to update
     */
    where?: SubdomainWhereInput
  }

  /**
   * Subdomain upsert
   */
  export type SubdomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * The filter to search for the Subdomain to update in case it exists.
     */
    where: SubdomainWhereUniqueInput
    /**
     * In case the Subdomain found by the `where` argument doesn't exist, create a new Subdomain with this data.
     */
    create: XOR<SubdomainCreateInput, SubdomainUncheckedCreateInput>
    /**
     * In case the Subdomain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubdomainUpdateInput, SubdomainUncheckedUpdateInput>
  }

  /**
   * Subdomain delete
   */
  export type SubdomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    /**
     * Filter which Subdomain to delete.
     */
    where: SubdomainWhereUniqueInput
  }

  /**
   * Subdomain deleteMany
   */
  export type SubdomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subdomains to delete
     */
    where?: SubdomainWhereInput
  }

  /**
   * Subdomain.requests
   */
  export type Subdomain$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    where?: DomainRequestWhereInput
    orderBy?: DomainRequestOrderByWithRelationInput | DomainRequestOrderByWithRelationInput[]
    cursor?: DomainRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DomainRequestScalarFieldEnum | DomainRequestScalarFieldEnum[]
  }

  /**
   * Subdomain.auditLogs
   */
  export type Subdomain$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Subdomain without action
   */
  export type SubdomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
  }


  /**
   * Model DomainRequest
   */

  export type AggregateDomainRequest = {
    _count: DomainRequestCountAggregateOutputType | null
    _min: DomainRequestMinAggregateOutputType | null
    _max: DomainRequestMaxAggregateOutputType | null
  }

  export type DomainRequestMinAggregateOutputType = {
    id: string | null
    type: string | null
    status: string | null
    priority: string | null
    title: string | null
    description: string | null
    justification: string | null
    requestedBy: string | null
    requestedAt: Date | null
    updatedAt: Date | null
    proposedName: string | null
    proposedEnvironment: string | null
    proposedPurpose: string | null
    proposedDescription: string | null
    currentValue: string | null
    proposedValue: string | null
    domainId: string | null
    subdomainId: string | null
  }

  export type DomainRequestMaxAggregateOutputType = {
    id: string | null
    type: string | null
    status: string | null
    priority: string | null
    title: string | null
    description: string | null
    justification: string | null
    requestedBy: string | null
    requestedAt: Date | null
    updatedAt: Date | null
    proposedName: string | null
    proposedEnvironment: string | null
    proposedPurpose: string | null
    proposedDescription: string | null
    currentValue: string | null
    proposedValue: string | null
    domainId: string | null
    subdomainId: string | null
  }

  export type DomainRequestCountAggregateOutputType = {
    id: number
    type: number
    status: number
    priority: number
    title: number
    description: number
    justification: number
    requestedBy: number
    requestedAt: number
    updatedAt: number
    proposedName: number
    proposedEnvironment: number
    proposedPurpose: number
    proposedDescription: number
    currentValue: number
    proposedValue: number
    domainId: number
    subdomainId: number
    _all: number
  }


  export type DomainRequestMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    priority?: true
    title?: true
    description?: true
    justification?: true
    requestedBy?: true
    requestedAt?: true
    updatedAt?: true
    proposedName?: true
    proposedEnvironment?: true
    proposedPurpose?: true
    proposedDescription?: true
    currentValue?: true
    proposedValue?: true
    domainId?: true
    subdomainId?: true
  }

  export type DomainRequestMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    priority?: true
    title?: true
    description?: true
    justification?: true
    requestedBy?: true
    requestedAt?: true
    updatedAt?: true
    proposedName?: true
    proposedEnvironment?: true
    proposedPurpose?: true
    proposedDescription?: true
    currentValue?: true
    proposedValue?: true
    domainId?: true
    subdomainId?: true
  }

  export type DomainRequestCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    priority?: true
    title?: true
    description?: true
    justification?: true
    requestedBy?: true
    requestedAt?: true
    updatedAt?: true
    proposedName?: true
    proposedEnvironment?: true
    proposedPurpose?: true
    proposedDescription?: true
    currentValue?: true
    proposedValue?: true
    domainId?: true
    subdomainId?: true
    _all?: true
  }

  export type DomainRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DomainRequest to aggregate.
     */
    where?: DomainRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainRequests to fetch.
     */
    orderBy?: DomainRequestOrderByWithRelationInput | DomainRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DomainRequests
    **/
    _count?: true | DomainRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainRequestMaxAggregateInputType
  }

  export type GetDomainRequestAggregateType<T extends DomainRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateDomainRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomainRequest[P]>
      : GetScalarType<T[P], AggregateDomainRequest[P]>
  }




  export type DomainRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainRequestWhereInput
    orderBy?: DomainRequestOrderByWithAggregationInput | DomainRequestOrderByWithAggregationInput[]
    by: DomainRequestScalarFieldEnum[] | DomainRequestScalarFieldEnum
    having?: DomainRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainRequestCountAggregateInputType | true
    _min?: DomainRequestMinAggregateInputType
    _max?: DomainRequestMaxAggregateInputType
  }

  export type DomainRequestGroupByOutputType = {
    id: string
    type: string
    status: string
    priority: string
    title: string
    description: string
    justification: string | null
    requestedBy: string
    requestedAt: Date
    updatedAt: Date
    proposedName: string | null
    proposedEnvironment: string | null
    proposedPurpose: string | null
    proposedDescription: string | null
    currentValue: string | null
    proposedValue: string | null
    domainId: string | null
    subdomainId: string | null
    _count: DomainRequestCountAggregateOutputType | null
    _min: DomainRequestMinAggregateOutputType | null
    _max: DomainRequestMaxAggregateOutputType | null
  }

  type GetDomainRequestGroupByPayload<T extends DomainRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainRequestGroupByOutputType[P]>
            : GetScalarType<T[P], DomainRequestGroupByOutputType[P]>
        }
      >
    >


  export type DomainRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    title?: boolean
    description?: boolean
    justification?: boolean
    requestedBy?: boolean
    requestedAt?: boolean
    updatedAt?: boolean
    proposedName?: boolean
    proposedEnvironment?: boolean
    proposedPurpose?: boolean
    proposedDescription?: boolean
    currentValue?: boolean
    proposedValue?: boolean
    domainId?: boolean
    subdomainId?: boolean
    domain?: boolean | DomainRequest$domainArgs<ExtArgs>
    subdomain?: boolean | DomainRequest$subdomainArgs<ExtArgs>
    approvals?: boolean | DomainRequest$approvalsArgs<ExtArgs>
    comments?: boolean | DomainRequest$commentsArgs<ExtArgs>
    auditLogs?: boolean | DomainRequest$auditLogsArgs<ExtArgs>
    _count?: boolean | DomainRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domainRequest"]>

  export type DomainRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    title?: boolean
    description?: boolean
    justification?: boolean
    requestedBy?: boolean
    requestedAt?: boolean
    updatedAt?: boolean
    proposedName?: boolean
    proposedEnvironment?: boolean
    proposedPurpose?: boolean
    proposedDescription?: boolean
    currentValue?: boolean
    proposedValue?: boolean
    domainId?: boolean
    subdomainId?: boolean
    domain?: boolean | DomainRequest$domainArgs<ExtArgs>
    subdomain?: boolean | DomainRequest$subdomainArgs<ExtArgs>
  }, ExtArgs["result"]["domainRequest"]>

  export type DomainRequestSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    title?: boolean
    description?: boolean
    justification?: boolean
    requestedBy?: boolean
    requestedAt?: boolean
    updatedAt?: boolean
    proposedName?: boolean
    proposedEnvironment?: boolean
    proposedPurpose?: boolean
    proposedDescription?: boolean
    currentValue?: boolean
    proposedValue?: boolean
    domainId?: boolean
    subdomainId?: boolean
  }

  export type DomainRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainRequest$domainArgs<ExtArgs>
    subdomain?: boolean | DomainRequest$subdomainArgs<ExtArgs>
    approvals?: boolean | DomainRequest$approvalsArgs<ExtArgs>
    comments?: boolean | DomainRequest$commentsArgs<ExtArgs>
    auditLogs?: boolean | DomainRequest$auditLogsArgs<ExtArgs>
    _count?: boolean | DomainRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DomainRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainRequest$domainArgs<ExtArgs>
    subdomain?: boolean | DomainRequest$subdomainArgs<ExtArgs>
  }

  export type $DomainRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DomainRequest"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs> | null
      subdomain: Prisma.$SubdomainPayload<ExtArgs> | null
      approvals: Prisma.$ApprovalPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      status: string
      priority: string
      title: string
      description: string
      justification: string | null
      requestedBy: string
      requestedAt: Date
      updatedAt: Date
      proposedName: string | null
      proposedEnvironment: string | null
      proposedPurpose: string | null
      proposedDescription: string | null
      currentValue: string | null
      proposedValue: string | null
      domainId: string | null
      subdomainId: string | null
    }, ExtArgs["result"]["domainRequest"]>
    composites: {}
  }

  type DomainRequestGetPayload<S extends boolean | null | undefined | DomainRequestDefaultArgs> = $Result.GetResult<Prisma.$DomainRequestPayload, S>

  type DomainRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DomainRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DomainRequestCountAggregateInputType | true
    }

  export interface DomainRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DomainRequest'], meta: { name: 'DomainRequest' } }
    /**
     * Find zero or one DomainRequest that matches the filter.
     * @param {DomainRequestFindUniqueArgs} args - Arguments to find a DomainRequest
     * @example
     * // Get one DomainRequest
     * const domainRequest = await prisma.domainRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DomainRequestFindUniqueArgs>(args: SelectSubset<T, DomainRequestFindUniqueArgs<ExtArgs>>): Prisma__DomainRequestClient<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DomainRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DomainRequestFindUniqueOrThrowArgs} args - Arguments to find a DomainRequest
     * @example
     * // Get one DomainRequest
     * const domainRequest = await prisma.domainRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DomainRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, DomainRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DomainRequestClient<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DomainRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainRequestFindFirstArgs} args - Arguments to find a DomainRequest
     * @example
     * // Get one DomainRequest
     * const domainRequest = await prisma.domainRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DomainRequestFindFirstArgs>(args?: SelectSubset<T, DomainRequestFindFirstArgs<ExtArgs>>): Prisma__DomainRequestClient<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DomainRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainRequestFindFirstOrThrowArgs} args - Arguments to find a DomainRequest
     * @example
     * // Get one DomainRequest
     * const domainRequest = await prisma.domainRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DomainRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, DomainRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__DomainRequestClient<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DomainRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DomainRequests
     * const domainRequests = await prisma.domainRequest.findMany()
     * 
     * // Get first 10 DomainRequests
     * const domainRequests = await prisma.domainRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainRequestWithIdOnly = await prisma.domainRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DomainRequestFindManyArgs>(args?: SelectSubset<T, DomainRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DomainRequest.
     * @param {DomainRequestCreateArgs} args - Arguments to create a DomainRequest.
     * @example
     * // Create one DomainRequest
     * const DomainRequest = await prisma.domainRequest.create({
     *   data: {
     *     // ... data to create a DomainRequest
     *   }
     * })
     * 
     */
    create<T extends DomainRequestCreateArgs>(args: SelectSubset<T, DomainRequestCreateArgs<ExtArgs>>): Prisma__DomainRequestClient<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DomainRequests.
     * @param {DomainRequestCreateManyArgs} args - Arguments to create many DomainRequests.
     * @example
     * // Create many DomainRequests
     * const domainRequest = await prisma.domainRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DomainRequestCreateManyArgs>(args?: SelectSubset<T, DomainRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DomainRequests and returns the data saved in the database.
     * @param {DomainRequestCreateManyAndReturnArgs} args - Arguments to create many DomainRequests.
     * @example
     * // Create many DomainRequests
     * const domainRequest = await prisma.domainRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DomainRequests and only return the `id`
     * const domainRequestWithIdOnly = await prisma.domainRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DomainRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, DomainRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DomainRequest.
     * @param {DomainRequestDeleteArgs} args - Arguments to delete one DomainRequest.
     * @example
     * // Delete one DomainRequest
     * const DomainRequest = await prisma.domainRequest.delete({
     *   where: {
     *     // ... filter to delete one DomainRequest
     *   }
     * })
     * 
     */
    delete<T extends DomainRequestDeleteArgs>(args: SelectSubset<T, DomainRequestDeleteArgs<ExtArgs>>): Prisma__DomainRequestClient<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DomainRequest.
     * @param {DomainRequestUpdateArgs} args - Arguments to update one DomainRequest.
     * @example
     * // Update one DomainRequest
     * const domainRequest = await prisma.domainRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DomainRequestUpdateArgs>(args: SelectSubset<T, DomainRequestUpdateArgs<ExtArgs>>): Prisma__DomainRequestClient<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DomainRequests.
     * @param {DomainRequestDeleteManyArgs} args - Arguments to filter DomainRequests to delete.
     * @example
     * // Delete a few DomainRequests
     * const { count } = await prisma.domainRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DomainRequestDeleteManyArgs>(args?: SelectSubset<T, DomainRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DomainRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DomainRequests
     * const domainRequest = await prisma.domainRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DomainRequestUpdateManyArgs>(args: SelectSubset<T, DomainRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DomainRequest.
     * @param {DomainRequestUpsertArgs} args - Arguments to update or create a DomainRequest.
     * @example
     * // Update or create a DomainRequest
     * const domainRequest = await prisma.domainRequest.upsert({
     *   create: {
     *     // ... data to create a DomainRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DomainRequest we want to update
     *   }
     * })
     */
    upsert<T extends DomainRequestUpsertArgs>(args: SelectSubset<T, DomainRequestUpsertArgs<ExtArgs>>): Prisma__DomainRequestClient<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DomainRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainRequestCountArgs} args - Arguments to filter DomainRequests to count.
     * @example
     * // Count the number of DomainRequests
     * const count = await prisma.domainRequest.count({
     *   where: {
     *     // ... the filter for the DomainRequests we want to count
     *   }
     * })
    **/
    count<T extends DomainRequestCountArgs>(
      args?: Subset<T, DomainRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DomainRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DomainRequestAggregateArgs>(args: Subset<T, DomainRequestAggregateArgs>): Prisma.PrismaPromise<GetDomainRequestAggregateType<T>>

    /**
     * Group by DomainRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DomainRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainRequestGroupByArgs['orderBy'] }
        : { orderBy?: DomainRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DomainRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DomainRequest model
   */
  readonly fields: DomainRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DomainRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends DomainRequest$domainArgs<ExtArgs> = {}>(args?: Subset<T, DomainRequest$domainArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    subdomain<T extends DomainRequest$subdomainArgs<ExtArgs> = {}>(args?: Subset<T, DomainRequest$subdomainArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    approvals<T extends DomainRequest$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, DomainRequest$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany"> | Null>
    comments<T extends DomainRequest$commentsArgs<ExtArgs> = {}>(args?: Subset<T, DomainRequest$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany"> | Null>
    auditLogs<T extends DomainRequest$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, DomainRequest$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DomainRequest model
   */ 
  interface DomainRequestFieldRefs {
    readonly id: FieldRef<"DomainRequest", 'String'>
    readonly type: FieldRef<"DomainRequest", 'String'>
    readonly status: FieldRef<"DomainRequest", 'String'>
    readonly priority: FieldRef<"DomainRequest", 'String'>
    readonly title: FieldRef<"DomainRequest", 'String'>
    readonly description: FieldRef<"DomainRequest", 'String'>
    readonly justification: FieldRef<"DomainRequest", 'String'>
    readonly requestedBy: FieldRef<"DomainRequest", 'String'>
    readonly requestedAt: FieldRef<"DomainRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"DomainRequest", 'DateTime'>
    readonly proposedName: FieldRef<"DomainRequest", 'String'>
    readonly proposedEnvironment: FieldRef<"DomainRequest", 'String'>
    readonly proposedPurpose: FieldRef<"DomainRequest", 'String'>
    readonly proposedDescription: FieldRef<"DomainRequest", 'String'>
    readonly currentValue: FieldRef<"DomainRequest", 'String'>
    readonly proposedValue: FieldRef<"DomainRequest", 'String'>
    readonly domainId: FieldRef<"DomainRequest", 'String'>
    readonly subdomainId: FieldRef<"DomainRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DomainRequest findUnique
   */
  export type DomainRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    /**
     * Filter, which DomainRequest to fetch.
     */
    where: DomainRequestWhereUniqueInput
  }

  /**
   * DomainRequest findUniqueOrThrow
   */
  export type DomainRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    /**
     * Filter, which DomainRequest to fetch.
     */
    where: DomainRequestWhereUniqueInput
  }

  /**
   * DomainRequest findFirst
   */
  export type DomainRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    /**
     * Filter, which DomainRequest to fetch.
     */
    where?: DomainRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainRequests to fetch.
     */
    orderBy?: DomainRequestOrderByWithRelationInput | DomainRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DomainRequests.
     */
    cursor?: DomainRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DomainRequests.
     */
    distinct?: DomainRequestScalarFieldEnum | DomainRequestScalarFieldEnum[]
  }

  /**
   * DomainRequest findFirstOrThrow
   */
  export type DomainRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    /**
     * Filter, which DomainRequest to fetch.
     */
    where?: DomainRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainRequests to fetch.
     */
    orderBy?: DomainRequestOrderByWithRelationInput | DomainRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DomainRequests.
     */
    cursor?: DomainRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DomainRequests.
     */
    distinct?: DomainRequestScalarFieldEnum | DomainRequestScalarFieldEnum[]
  }

  /**
   * DomainRequest findMany
   */
  export type DomainRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    /**
     * Filter, which DomainRequests to fetch.
     */
    where?: DomainRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainRequests to fetch.
     */
    orderBy?: DomainRequestOrderByWithRelationInput | DomainRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DomainRequests.
     */
    cursor?: DomainRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainRequests.
     */
    skip?: number
    distinct?: DomainRequestScalarFieldEnum | DomainRequestScalarFieldEnum[]
  }

  /**
   * DomainRequest create
   */
  export type DomainRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a DomainRequest.
     */
    data: XOR<DomainRequestCreateInput, DomainRequestUncheckedCreateInput>
  }

  /**
   * DomainRequest createMany
   */
  export type DomainRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DomainRequests.
     */
    data: DomainRequestCreateManyInput | DomainRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DomainRequest createManyAndReturn
   */
  export type DomainRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DomainRequests.
     */
    data: DomainRequestCreateManyInput | DomainRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DomainRequest update
   */
  export type DomainRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a DomainRequest.
     */
    data: XOR<DomainRequestUpdateInput, DomainRequestUncheckedUpdateInput>
    /**
     * Choose, which DomainRequest to update.
     */
    where: DomainRequestWhereUniqueInput
  }

  /**
   * DomainRequest updateMany
   */
  export type DomainRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DomainRequests.
     */
    data: XOR<DomainRequestUpdateManyMutationInput, DomainRequestUncheckedUpdateManyInput>
    /**
     * Filter which DomainRequests to update
     */
    where?: DomainRequestWhereInput
  }

  /**
   * DomainRequest upsert
   */
  export type DomainRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the DomainRequest to update in case it exists.
     */
    where: DomainRequestWhereUniqueInput
    /**
     * In case the DomainRequest found by the `where` argument doesn't exist, create a new DomainRequest with this data.
     */
    create: XOR<DomainRequestCreateInput, DomainRequestUncheckedCreateInput>
    /**
     * In case the DomainRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainRequestUpdateInput, DomainRequestUncheckedUpdateInput>
  }

  /**
   * DomainRequest delete
   */
  export type DomainRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    /**
     * Filter which DomainRequest to delete.
     */
    where: DomainRequestWhereUniqueInput
  }

  /**
   * DomainRequest deleteMany
   */
  export type DomainRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DomainRequests to delete
     */
    where?: DomainRequestWhereInput
  }

  /**
   * DomainRequest.domain
   */
  export type DomainRequest$domainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
  }

  /**
   * DomainRequest.subdomain
   */
  export type DomainRequest$subdomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    where?: SubdomainWhereInput
  }

  /**
   * DomainRequest.approvals
   */
  export type DomainRequest$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    cursor?: ApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * DomainRequest.comments
   */
  export type DomainRequest$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * DomainRequest.auditLogs
   */
  export type DomainRequest$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * DomainRequest without action
   */
  export type DomainRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
  }


  /**
   * Model Approval
   */

  export type AggregateApproval = {
    _count: ApprovalCountAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  export type ApprovalMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    approvedBy: string | null
    status: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type ApprovalMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    approvedBy: string | null
    status: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type ApprovalCountAggregateOutputType = {
    id: number
    requestId: number
    approvedBy: number
    status: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ApprovalMinAggregateInputType = {
    id?: true
    requestId?: true
    approvedBy?: true
    status?: true
    comment?: true
    createdAt?: true
  }

  export type ApprovalMaxAggregateInputType = {
    id?: true
    requestId?: true
    approvedBy?: true
    status?: true
    comment?: true
    createdAt?: true
  }

  export type ApprovalCountAggregateInputType = {
    id?: true
    requestId?: true
    approvedBy?: true
    status?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ApprovalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approval to aggregate.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Approvals
    **/
    _count?: true | ApprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalMaxAggregateInputType
  }

  export type GetApprovalAggregateType<T extends ApprovalAggregateArgs> = {
        [P in keyof T & keyof AggregateApproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApproval[P]>
      : GetScalarType<T[P], AggregateApproval[P]>
  }




  export type ApprovalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalWhereInput
    orderBy?: ApprovalOrderByWithAggregationInput | ApprovalOrderByWithAggregationInput[]
    by: ApprovalScalarFieldEnum[] | ApprovalScalarFieldEnum
    having?: ApprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalCountAggregateInputType | true
    _min?: ApprovalMinAggregateInputType
    _max?: ApprovalMaxAggregateInputType
  }

  export type ApprovalGroupByOutputType = {
    id: string
    requestId: string
    approvedBy: string
    status: string
    comment: string | null
    createdAt: Date
    _count: ApprovalCountAggregateOutputType | null
    _min: ApprovalMinAggregateOutputType | null
    _max: ApprovalMaxAggregateOutputType | null
  }

  type GetApprovalGroupByPayload<T extends ApprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    approvedBy?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    request?: boolean | DomainRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    approvedBy?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
    request?: boolean | DomainRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approval"]>

  export type ApprovalSelectScalar = {
    id?: boolean
    requestId?: boolean
    approvedBy?: boolean
    status?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ApprovalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | DomainRequestDefaultArgs<ExtArgs>
  }
  export type ApprovalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | DomainRequestDefaultArgs<ExtArgs>
  }

  export type $ApprovalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Approval"
    objects: {
      request: Prisma.$DomainRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      approvedBy: string
      status: string
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["approval"]>
    composites: {}
  }

  type ApprovalGetPayload<S extends boolean | null | undefined | ApprovalDefaultArgs> = $Result.GetResult<Prisma.$ApprovalPayload, S>

  type ApprovalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApprovalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApprovalCountAggregateInputType | true
    }

  export interface ApprovalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Approval'], meta: { name: 'Approval' } }
    /**
     * Find zero or one Approval that matches the filter.
     * @param {ApprovalFindUniqueArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalFindUniqueArgs>(args: SelectSubset<T, ApprovalFindUniqueArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Approval that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApprovalFindUniqueOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Approval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalFindFirstArgs>(args?: SelectSubset<T, ApprovalFindFirstArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Approval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindFirstOrThrowArgs} args - Arguments to find a Approval
     * @example
     * // Get one Approval
     * const approval = await prisma.approval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Approvals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Approvals
     * const approvals = await prisma.approval.findMany()
     * 
     * // Get first 10 Approvals
     * const approvals = await prisma.approval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalWithIdOnly = await prisma.approval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalFindManyArgs>(args?: SelectSubset<T, ApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Approval.
     * @param {ApprovalCreateArgs} args - Arguments to create a Approval.
     * @example
     * // Create one Approval
     * const Approval = await prisma.approval.create({
     *   data: {
     *     // ... data to create a Approval
     *   }
     * })
     * 
     */
    create<T extends ApprovalCreateArgs>(args: SelectSubset<T, ApprovalCreateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Approvals.
     * @param {ApprovalCreateManyArgs} args - Arguments to create many Approvals.
     * @example
     * // Create many Approvals
     * const approval = await prisma.approval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalCreateManyArgs>(args?: SelectSubset<T, ApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Approvals and returns the data saved in the database.
     * @param {ApprovalCreateManyAndReturnArgs} args - Arguments to create many Approvals.
     * @example
     * // Create many Approvals
     * const approval = await prisma.approval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Approvals and only return the `id`
     * const approvalWithIdOnly = await prisma.approval.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Approval.
     * @param {ApprovalDeleteArgs} args - Arguments to delete one Approval.
     * @example
     * // Delete one Approval
     * const Approval = await prisma.approval.delete({
     *   where: {
     *     // ... filter to delete one Approval
     *   }
     * })
     * 
     */
    delete<T extends ApprovalDeleteArgs>(args: SelectSubset<T, ApprovalDeleteArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Approval.
     * @param {ApprovalUpdateArgs} args - Arguments to update one Approval.
     * @example
     * // Update one Approval
     * const approval = await prisma.approval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalUpdateArgs>(args: SelectSubset<T, ApprovalUpdateArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Approvals.
     * @param {ApprovalDeleteManyArgs} args - Arguments to filter Approvals to delete.
     * @example
     * // Delete a few Approvals
     * const { count } = await prisma.approval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalDeleteManyArgs>(args?: SelectSubset<T, ApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Approvals
     * const approval = await prisma.approval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalUpdateManyArgs>(args: SelectSubset<T, ApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Approval.
     * @param {ApprovalUpsertArgs} args - Arguments to update or create a Approval.
     * @example
     * // Update or create a Approval
     * const approval = await prisma.approval.upsert({
     *   create: {
     *     // ... data to create a Approval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Approval we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalUpsertArgs>(args: SelectSubset<T, ApprovalUpsertArgs<ExtArgs>>): Prisma__ApprovalClient<$Result.GetResult<Prisma.$ApprovalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Approvals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalCountArgs} args - Arguments to filter Approvals to count.
     * @example
     * // Count the number of Approvals
     * const count = await prisma.approval.count({
     *   where: {
     *     // ... the filter for the Approvals we want to count
     *   }
     * })
    **/
    count<T extends ApprovalCountArgs>(
      args?: Subset<T, ApprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApprovalAggregateArgs>(args: Subset<T, ApprovalAggregateArgs>): Prisma.PrismaPromise<GetApprovalAggregateType<T>>

    /**
     * Group by Approval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Approval model
   */
  readonly fields: ApprovalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Approval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends DomainRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainRequestDefaultArgs<ExtArgs>>): Prisma__DomainRequestClient<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Approval model
   */ 
  interface ApprovalFieldRefs {
    readonly id: FieldRef<"Approval", 'String'>
    readonly requestId: FieldRef<"Approval", 'String'>
    readonly approvedBy: FieldRef<"Approval", 'String'>
    readonly status: FieldRef<"Approval", 'String'>
    readonly comment: FieldRef<"Approval", 'String'>
    readonly createdAt: FieldRef<"Approval", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Approval findUnique
   */
  export type ApprovalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findUniqueOrThrow
   */
  export type ApprovalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval findFirst
   */
  export type ApprovalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findFirstOrThrow
   */
  export type ApprovalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approval to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Approvals.
     */
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval findMany
   */
  export type ApprovalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter, which Approvals to fetch.
     */
    where?: ApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Approvals to fetch.
     */
    orderBy?: ApprovalOrderByWithRelationInput | ApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Approvals.
     */
    cursor?: ApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Approvals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Approvals.
     */
    skip?: number
    distinct?: ApprovalScalarFieldEnum | ApprovalScalarFieldEnum[]
  }

  /**
   * Approval create
   */
  export type ApprovalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to create a Approval.
     */
    data: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
  }

  /**
   * Approval createMany
   */
  export type ApprovalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Approvals.
     */
    data: ApprovalCreateManyInput | ApprovalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Approval createManyAndReturn
   */
  export type ApprovalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Approvals.
     */
    data: ApprovalCreateManyInput | ApprovalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Approval update
   */
  export type ApprovalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The data needed to update a Approval.
     */
    data: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
    /**
     * Choose, which Approval to update.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval updateMany
   */
  export type ApprovalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Approvals.
     */
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyInput>
    /**
     * Filter which Approvals to update
     */
    where?: ApprovalWhereInput
  }

  /**
   * Approval upsert
   */
  export type ApprovalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * The filter to search for the Approval to update in case it exists.
     */
    where: ApprovalWhereUniqueInput
    /**
     * In case the Approval found by the `where` argument doesn't exist, create a new Approval with this data.
     */
    create: XOR<ApprovalCreateInput, ApprovalUncheckedCreateInput>
    /**
     * In case the Approval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalUpdateInput, ApprovalUncheckedUpdateInput>
  }

  /**
   * Approval delete
   */
  export type ApprovalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
    /**
     * Filter which Approval to delete.
     */
    where: ApprovalWhereUniqueInput
  }

  /**
   * Approval deleteMany
   */
  export type ApprovalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Approvals to delete
     */
    where?: ApprovalWhereInput
  }

  /**
   * Approval without action
   */
  export type ApprovalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Approval
     */
    select?: ApprovalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    requestId: string | null
    author: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    requestId: string | null
    author: string | null
    content: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    requestId: number
    author: number
    content: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    requestId?: true
    author?: true
    content?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    requestId?: true
    author?: true
    content?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    requestId?: true
    author?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    requestId: string
    author: string
    content: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    author?: boolean
    content?: boolean
    createdAt?: boolean
    request?: boolean | DomainRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestId?: boolean
    author?: boolean
    content?: boolean
    createdAt?: boolean
    request?: boolean | DomainRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    requestId?: boolean
    author?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | DomainRequestDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | DomainRequestDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      request: Prisma.$DomainRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestId: string
      author: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends DomainRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainRequestDefaultArgs<ExtArgs>>): Prisma__DomainRequestClient<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly requestId: FieldRef<"Comment", 'String'>
    readonly author: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    performedBy: string | null
    details: string | null
    createdAt: Date | null
    domainId: string | null
    subdomainId: string | null
    requestId: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    performedBy: string | null
    details: string | null
    createdAt: Date | null
    domainId: string | null
    subdomainId: string | null
    requestId: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    action: number
    entityType: number
    entityId: number
    performedBy: number
    details: number
    createdAt: number
    domainId: number
    subdomainId: number
    requestId: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    performedBy?: true
    details?: true
    createdAt?: true
    domainId?: true
    subdomainId?: true
    requestId?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    performedBy?: true
    details?: true
    createdAt?: true
    domainId?: true
    subdomainId?: true
    requestId?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    action?: true
    entityType?: true
    entityId?: true
    performedBy?: true
    details?: true
    createdAt?: true
    domainId?: true
    subdomainId?: true
    requestId?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details: string | null
    createdAt: Date
    domainId: string | null
    subdomainId: string | null
    requestId: string | null
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    performedBy?: boolean
    details?: boolean
    createdAt?: boolean
    domainId?: boolean
    subdomainId?: boolean
    requestId?: boolean
    domain?: boolean | AuditLog$domainArgs<ExtArgs>
    subdomain?: boolean | AuditLog$subdomainArgs<ExtArgs>
    request?: boolean | AuditLog$requestArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    performedBy?: boolean
    details?: boolean
    createdAt?: boolean
    domainId?: boolean
    subdomainId?: boolean
    requestId?: boolean
    domain?: boolean | AuditLog$domainArgs<ExtArgs>
    subdomain?: boolean | AuditLog$subdomainArgs<ExtArgs>
    request?: boolean | AuditLog$requestArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    performedBy?: boolean
    details?: boolean
    createdAt?: boolean
    domainId?: boolean
    subdomainId?: boolean
    requestId?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | AuditLog$domainArgs<ExtArgs>
    subdomain?: boolean | AuditLog$subdomainArgs<ExtArgs>
    request?: boolean | AuditLog$requestArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | AuditLog$domainArgs<ExtArgs>
    subdomain?: boolean | AuditLog$subdomainArgs<ExtArgs>
    request?: boolean | AuditLog$requestArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      domain: Prisma.$DomainPayload<ExtArgs> | null
      subdomain: Prisma.$SubdomainPayload<ExtArgs> | null
      request: Prisma.$DomainRequestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      entityType: string
      entityId: string
      performedBy: string
      details: string | null
      createdAt: Date
      domainId: string | null
      subdomainId: string | null
      requestId: string | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends AuditLog$domainArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$domainArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    subdomain<T extends AuditLog$subdomainArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$subdomainArgs<ExtArgs>>): Prisma__SubdomainClient<$Result.GetResult<Prisma.$SubdomainPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    request<T extends AuditLog$requestArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$requestArgs<ExtArgs>>): Prisma__DomainRequestClient<$Result.GetResult<Prisma.$DomainRequestPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly performedBy: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
    readonly domainId: FieldRef<"AuditLog", 'String'>
    readonly subdomainId: FieldRef<"AuditLog", 'String'>
    readonly requestId: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog.domain
   */
  export type AuditLog$domainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
  }

  /**
   * AuditLog.subdomain
   */
  export type AuditLog$subdomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subdomain
     */
    select?: SubdomainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubdomainInclude<ExtArgs> | null
    where?: SubdomainWhereInput
  }

  /**
   * AuditLog.request
   */
  export type AuditLog$requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainRequest
     */
    select?: DomainRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainRequestInclude<ExtArgs> | null
    where?: DomainRequestWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DomainScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    environment: 'environment',
    owner: 'owner',
    team: 'team',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DomainScalarFieldEnum = (typeof DomainScalarFieldEnum)[keyof typeof DomainScalarFieldEnum]


  export const SubdomainScalarFieldEnum: {
    id: 'id',
    name: 'name',
    fullDomain: 'fullDomain',
    description: 'description',
    purpose: 'purpose',
    status: 'status',
    environment: 'environment',
    targetIP: 'targetIP',
    sslEnabled: 'sslEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    domainId: 'domainId'
  };

  export type SubdomainScalarFieldEnum = (typeof SubdomainScalarFieldEnum)[keyof typeof SubdomainScalarFieldEnum]


  export const DomainRequestScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    priority: 'priority',
    title: 'title',
    description: 'description',
    justification: 'justification',
    requestedBy: 'requestedBy',
    requestedAt: 'requestedAt',
    updatedAt: 'updatedAt',
    proposedName: 'proposedName',
    proposedEnvironment: 'proposedEnvironment',
    proposedPurpose: 'proposedPurpose',
    proposedDescription: 'proposedDescription',
    currentValue: 'currentValue',
    proposedValue: 'proposedValue',
    domainId: 'domainId',
    subdomainId: 'subdomainId'
  };

  export type DomainRequestScalarFieldEnum = (typeof DomainRequestScalarFieldEnum)[keyof typeof DomainRequestScalarFieldEnum]


  export const ApprovalScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    approvedBy: 'approvedBy',
    status: 'status',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ApprovalScalarFieldEnum = (typeof ApprovalScalarFieldEnum)[keyof typeof ApprovalScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    requestId: 'requestId',
    author: 'author',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    performedBy: 'performedBy',
    details: 'details',
    createdAt: 'createdAt',
    domainId: 'domainId',
    subdomainId: 'subdomainId',
    requestId: 'requestId'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DomainWhereInput = {
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    id?: StringFilter<"Domain"> | string
    name?: StringFilter<"Domain"> | string
    description?: StringNullableFilter<"Domain"> | string | null
    status?: StringFilter<"Domain"> | string
    environment?: StringFilter<"Domain"> | string
    owner?: StringFilter<"Domain"> | string
    team?: StringNullableFilter<"Domain"> | string | null
    createdAt?: DateTimeFilter<"Domain"> | Date | string
    updatedAt?: DateTimeFilter<"Domain"> | Date | string
    subdomains?: SubdomainListRelationFilter
    requests?: DomainRequestListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type DomainOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    environment?: SortOrder
    owner?: SortOrder
    team?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subdomains?: SubdomainOrderByRelationAggregateInput
    requests?: DomainRequestOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type DomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    description?: StringNullableFilter<"Domain"> | string | null
    status?: StringFilter<"Domain"> | string
    environment?: StringFilter<"Domain"> | string
    owner?: StringFilter<"Domain"> | string
    team?: StringNullableFilter<"Domain"> | string | null
    createdAt?: DateTimeFilter<"Domain"> | Date | string
    updatedAt?: DateTimeFilter<"Domain"> | Date | string
    subdomains?: SubdomainListRelationFilter
    requests?: DomainRequestListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "name">

  export type DomainOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    environment?: SortOrder
    owner?: SortOrder
    team?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DomainCountOrderByAggregateInput
    _max?: DomainMaxOrderByAggregateInput
    _min?: DomainMinOrderByAggregateInput
  }

  export type DomainScalarWhereWithAggregatesInput = {
    AND?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    OR?: DomainScalarWhereWithAggregatesInput[]
    NOT?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Domain"> | string
    name?: StringWithAggregatesFilter<"Domain"> | string
    description?: StringNullableWithAggregatesFilter<"Domain"> | string | null
    status?: StringWithAggregatesFilter<"Domain"> | string
    environment?: StringWithAggregatesFilter<"Domain"> | string
    owner?: StringWithAggregatesFilter<"Domain"> | string
    team?: StringNullableWithAggregatesFilter<"Domain"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Domain"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Domain"> | Date | string
  }

  export type SubdomainWhereInput = {
    AND?: SubdomainWhereInput | SubdomainWhereInput[]
    OR?: SubdomainWhereInput[]
    NOT?: SubdomainWhereInput | SubdomainWhereInput[]
    id?: StringFilter<"Subdomain"> | string
    name?: StringFilter<"Subdomain"> | string
    fullDomain?: StringFilter<"Subdomain"> | string
    description?: StringNullableFilter<"Subdomain"> | string | null
    purpose?: StringFilter<"Subdomain"> | string
    status?: StringFilter<"Subdomain"> | string
    environment?: StringFilter<"Subdomain"> | string
    targetIP?: StringNullableFilter<"Subdomain"> | string | null
    sslEnabled?: BoolFilter<"Subdomain"> | boolean
    createdAt?: DateTimeFilter<"Subdomain"> | Date | string
    updatedAt?: DateTimeFilter<"Subdomain"> | Date | string
    domainId?: StringFilter<"Subdomain"> | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    requests?: DomainRequestListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type SubdomainOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fullDomain?: SortOrder
    description?: SortOrderInput | SortOrder
    purpose?: SortOrder
    status?: SortOrder
    environment?: SortOrder
    targetIP?: SortOrderInput | SortOrder
    sslEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domainId?: SortOrder
    domain?: DomainOrderByWithRelationInput
    requests?: DomainRequestOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type SubdomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fullDomain?: string
    AND?: SubdomainWhereInput | SubdomainWhereInput[]
    OR?: SubdomainWhereInput[]
    NOT?: SubdomainWhereInput | SubdomainWhereInput[]
    name?: StringFilter<"Subdomain"> | string
    description?: StringNullableFilter<"Subdomain"> | string | null
    purpose?: StringFilter<"Subdomain"> | string
    status?: StringFilter<"Subdomain"> | string
    environment?: StringFilter<"Subdomain"> | string
    targetIP?: StringNullableFilter<"Subdomain"> | string | null
    sslEnabled?: BoolFilter<"Subdomain"> | boolean
    createdAt?: DateTimeFilter<"Subdomain"> | Date | string
    updatedAt?: DateTimeFilter<"Subdomain"> | Date | string
    domainId?: StringFilter<"Subdomain"> | string
    domain?: XOR<DomainRelationFilter, DomainWhereInput>
    requests?: DomainRequestListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "fullDomain">

  export type SubdomainOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    fullDomain?: SortOrder
    description?: SortOrderInput | SortOrder
    purpose?: SortOrder
    status?: SortOrder
    environment?: SortOrder
    targetIP?: SortOrderInput | SortOrder
    sslEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domainId?: SortOrder
    _count?: SubdomainCountOrderByAggregateInput
    _max?: SubdomainMaxOrderByAggregateInput
    _min?: SubdomainMinOrderByAggregateInput
  }

  export type SubdomainScalarWhereWithAggregatesInput = {
    AND?: SubdomainScalarWhereWithAggregatesInput | SubdomainScalarWhereWithAggregatesInput[]
    OR?: SubdomainScalarWhereWithAggregatesInput[]
    NOT?: SubdomainScalarWhereWithAggregatesInput | SubdomainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subdomain"> | string
    name?: StringWithAggregatesFilter<"Subdomain"> | string
    fullDomain?: StringWithAggregatesFilter<"Subdomain"> | string
    description?: StringNullableWithAggregatesFilter<"Subdomain"> | string | null
    purpose?: StringWithAggregatesFilter<"Subdomain"> | string
    status?: StringWithAggregatesFilter<"Subdomain"> | string
    environment?: StringWithAggregatesFilter<"Subdomain"> | string
    targetIP?: StringNullableWithAggregatesFilter<"Subdomain"> | string | null
    sslEnabled?: BoolWithAggregatesFilter<"Subdomain"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Subdomain"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subdomain"> | Date | string
    domainId?: StringWithAggregatesFilter<"Subdomain"> | string
  }

  export type DomainRequestWhereInput = {
    AND?: DomainRequestWhereInput | DomainRequestWhereInput[]
    OR?: DomainRequestWhereInput[]
    NOT?: DomainRequestWhereInput | DomainRequestWhereInput[]
    id?: StringFilter<"DomainRequest"> | string
    type?: StringFilter<"DomainRequest"> | string
    status?: StringFilter<"DomainRequest"> | string
    priority?: StringFilter<"DomainRequest"> | string
    title?: StringFilter<"DomainRequest"> | string
    description?: StringFilter<"DomainRequest"> | string
    justification?: StringNullableFilter<"DomainRequest"> | string | null
    requestedBy?: StringFilter<"DomainRequest"> | string
    requestedAt?: DateTimeFilter<"DomainRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DomainRequest"> | Date | string
    proposedName?: StringNullableFilter<"DomainRequest"> | string | null
    proposedEnvironment?: StringNullableFilter<"DomainRequest"> | string | null
    proposedPurpose?: StringNullableFilter<"DomainRequest"> | string | null
    proposedDescription?: StringNullableFilter<"DomainRequest"> | string | null
    currentValue?: StringNullableFilter<"DomainRequest"> | string | null
    proposedValue?: StringNullableFilter<"DomainRequest"> | string | null
    domainId?: StringNullableFilter<"DomainRequest"> | string | null
    subdomainId?: StringNullableFilter<"DomainRequest"> | string | null
    domain?: XOR<DomainNullableRelationFilter, DomainWhereInput> | null
    subdomain?: XOR<SubdomainNullableRelationFilter, SubdomainWhereInput> | null
    approvals?: ApprovalListRelationFilter
    comments?: CommentListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type DomainRequestOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    title?: SortOrder
    description?: SortOrder
    justification?: SortOrderInput | SortOrder
    requestedBy?: SortOrder
    requestedAt?: SortOrder
    updatedAt?: SortOrder
    proposedName?: SortOrderInput | SortOrder
    proposedEnvironment?: SortOrderInput | SortOrder
    proposedPurpose?: SortOrderInput | SortOrder
    proposedDescription?: SortOrderInput | SortOrder
    currentValue?: SortOrderInput | SortOrder
    proposedValue?: SortOrderInput | SortOrder
    domainId?: SortOrderInput | SortOrder
    subdomainId?: SortOrderInput | SortOrder
    domain?: DomainOrderByWithRelationInput
    subdomain?: SubdomainOrderByWithRelationInput
    approvals?: ApprovalOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type DomainRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DomainRequestWhereInput | DomainRequestWhereInput[]
    OR?: DomainRequestWhereInput[]
    NOT?: DomainRequestWhereInput | DomainRequestWhereInput[]
    type?: StringFilter<"DomainRequest"> | string
    status?: StringFilter<"DomainRequest"> | string
    priority?: StringFilter<"DomainRequest"> | string
    title?: StringFilter<"DomainRequest"> | string
    description?: StringFilter<"DomainRequest"> | string
    justification?: StringNullableFilter<"DomainRequest"> | string | null
    requestedBy?: StringFilter<"DomainRequest"> | string
    requestedAt?: DateTimeFilter<"DomainRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DomainRequest"> | Date | string
    proposedName?: StringNullableFilter<"DomainRequest"> | string | null
    proposedEnvironment?: StringNullableFilter<"DomainRequest"> | string | null
    proposedPurpose?: StringNullableFilter<"DomainRequest"> | string | null
    proposedDescription?: StringNullableFilter<"DomainRequest"> | string | null
    currentValue?: StringNullableFilter<"DomainRequest"> | string | null
    proposedValue?: StringNullableFilter<"DomainRequest"> | string | null
    domainId?: StringNullableFilter<"DomainRequest"> | string | null
    subdomainId?: StringNullableFilter<"DomainRequest"> | string | null
    domain?: XOR<DomainNullableRelationFilter, DomainWhereInput> | null
    subdomain?: XOR<SubdomainNullableRelationFilter, SubdomainWhereInput> | null
    approvals?: ApprovalListRelationFilter
    comments?: CommentListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id">

  export type DomainRequestOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    title?: SortOrder
    description?: SortOrder
    justification?: SortOrderInput | SortOrder
    requestedBy?: SortOrder
    requestedAt?: SortOrder
    updatedAt?: SortOrder
    proposedName?: SortOrderInput | SortOrder
    proposedEnvironment?: SortOrderInput | SortOrder
    proposedPurpose?: SortOrderInput | SortOrder
    proposedDescription?: SortOrderInput | SortOrder
    currentValue?: SortOrderInput | SortOrder
    proposedValue?: SortOrderInput | SortOrder
    domainId?: SortOrderInput | SortOrder
    subdomainId?: SortOrderInput | SortOrder
    _count?: DomainRequestCountOrderByAggregateInput
    _max?: DomainRequestMaxOrderByAggregateInput
    _min?: DomainRequestMinOrderByAggregateInput
  }

  export type DomainRequestScalarWhereWithAggregatesInput = {
    AND?: DomainRequestScalarWhereWithAggregatesInput | DomainRequestScalarWhereWithAggregatesInput[]
    OR?: DomainRequestScalarWhereWithAggregatesInput[]
    NOT?: DomainRequestScalarWhereWithAggregatesInput | DomainRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DomainRequest"> | string
    type?: StringWithAggregatesFilter<"DomainRequest"> | string
    status?: StringWithAggregatesFilter<"DomainRequest"> | string
    priority?: StringWithAggregatesFilter<"DomainRequest"> | string
    title?: StringWithAggregatesFilter<"DomainRequest"> | string
    description?: StringWithAggregatesFilter<"DomainRequest"> | string
    justification?: StringNullableWithAggregatesFilter<"DomainRequest"> | string | null
    requestedBy?: StringWithAggregatesFilter<"DomainRequest"> | string
    requestedAt?: DateTimeWithAggregatesFilter<"DomainRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DomainRequest"> | Date | string
    proposedName?: StringNullableWithAggregatesFilter<"DomainRequest"> | string | null
    proposedEnvironment?: StringNullableWithAggregatesFilter<"DomainRequest"> | string | null
    proposedPurpose?: StringNullableWithAggregatesFilter<"DomainRequest"> | string | null
    proposedDescription?: StringNullableWithAggregatesFilter<"DomainRequest"> | string | null
    currentValue?: StringNullableWithAggregatesFilter<"DomainRequest"> | string | null
    proposedValue?: StringNullableWithAggregatesFilter<"DomainRequest"> | string | null
    domainId?: StringNullableWithAggregatesFilter<"DomainRequest"> | string | null
    subdomainId?: StringNullableWithAggregatesFilter<"DomainRequest"> | string | null
  }

  export type ApprovalWhereInput = {
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    id?: StringFilter<"Approval"> | string
    requestId?: StringFilter<"Approval"> | string
    approvedBy?: StringFilter<"Approval"> | string
    status?: StringFilter<"Approval"> | string
    comment?: StringNullableFilter<"Approval"> | string | null
    createdAt?: DateTimeFilter<"Approval"> | Date | string
    request?: XOR<DomainRequestRelationFilter, DomainRequestWhereInput>
  }

  export type ApprovalOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    approvedBy?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    request?: DomainRequestOrderByWithRelationInput
  }

  export type ApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApprovalWhereInput | ApprovalWhereInput[]
    OR?: ApprovalWhereInput[]
    NOT?: ApprovalWhereInput | ApprovalWhereInput[]
    requestId?: StringFilter<"Approval"> | string
    approvedBy?: StringFilter<"Approval"> | string
    status?: StringFilter<"Approval"> | string
    comment?: StringNullableFilter<"Approval"> | string | null
    createdAt?: DateTimeFilter<"Approval"> | Date | string
    request?: XOR<DomainRequestRelationFilter, DomainRequestWhereInput>
  }, "id">

  export type ApprovalOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    approvedBy?: SortOrder
    status?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApprovalCountOrderByAggregateInput
    _max?: ApprovalMaxOrderByAggregateInput
    _min?: ApprovalMinOrderByAggregateInput
  }

  export type ApprovalScalarWhereWithAggregatesInput = {
    AND?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    OR?: ApprovalScalarWhereWithAggregatesInput[]
    NOT?: ApprovalScalarWhereWithAggregatesInput | ApprovalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Approval"> | string
    requestId?: StringWithAggregatesFilter<"Approval"> | string
    approvedBy?: StringWithAggregatesFilter<"Approval"> | string
    status?: StringWithAggregatesFilter<"Approval"> | string
    comment?: StringNullableWithAggregatesFilter<"Approval"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Approval"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    requestId?: StringFilter<"Comment"> | string
    author?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    request?: XOR<DomainRequestRelationFilter, DomainRequestWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    requestId?: SortOrder
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    request?: DomainRequestOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    requestId?: StringFilter<"Comment"> | string
    author?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    request?: XOR<DomainRequestRelationFilter, DomainRequestWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    requestId?: SortOrder
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    requestId?: StringWithAggregatesFilter<"Comment"> | string
    author?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    performedBy?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    domainId?: StringNullableFilter<"AuditLog"> | string | null
    subdomainId?: StringNullableFilter<"AuditLog"> | string | null
    requestId?: StringNullableFilter<"AuditLog"> | string | null
    domain?: XOR<DomainNullableRelationFilter, DomainWhereInput> | null
    subdomain?: XOR<SubdomainNullableRelationFilter, SubdomainWhereInput> | null
    request?: XOR<DomainRequestNullableRelationFilter, DomainRequestWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    performedBy?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    domainId?: SortOrderInput | SortOrder
    subdomainId?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    domain?: DomainOrderByWithRelationInput
    subdomain?: SubdomainOrderByWithRelationInput
    request?: DomainRequestOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    performedBy?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    domainId?: StringNullableFilter<"AuditLog"> | string | null
    subdomainId?: StringNullableFilter<"AuditLog"> | string | null
    requestId?: StringNullableFilter<"AuditLog"> | string | null
    domain?: XOR<DomainNullableRelationFilter, DomainWhereInput> | null
    subdomain?: XOR<SubdomainNullableRelationFilter, SubdomainWhereInput> | null
    request?: XOR<DomainRequestNullableRelationFilter, DomainRequestWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    performedBy?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    domainId?: SortOrderInput | SortOrder
    subdomainId?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    performedBy?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    domainId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    subdomainId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    requestId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
  }

  export type DomainCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    environment?: string
    owner: string
    team?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomains?: SubdomainCreateNestedManyWithoutDomainInput
    requests?: DomainRequestCreateNestedManyWithoutDomainInput
    auditLogs?: AuditLogCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    environment?: string
    owner: string
    team?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomains?: SubdomainUncheckedCreateNestedManyWithoutDomainInput
    requests?: DomainRequestUncheckedCreateNestedManyWithoutDomainInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomains?: SubdomainUpdateManyWithoutDomainNestedInput
    requests?: DomainRequestUpdateManyWithoutDomainNestedInput
    auditLogs?: AuditLogUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomains?: SubdomainUncheckedUpdateManyWithoutDomainNestedInput
    requests?: DomainRequestUncheckedUpdateManyWithoutDomainNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    environment?: string
    owner: string
    team?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubdomainCreateInput = {
    id?: string
    name: string
    fullDomain: string
    description?: string | null
    purpose?: string
    status?: string
    environment?: string
    targetIP?: string | null
    sslEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: DomainCreateNestedOneWithoutSubdomainsInput
    requests?: DomainRequestCreateNestedManyWithoutSubdomainInput
    auditLogs?: AuditLogCreateNestedManyWithoutSubdomainInput
  }

  export type SubdomainUncheckedCreateInput = {
    id?: string
    name: string
    fullDomain: string
    description?: string | null
    purpose?: string
    status?: string
    environment?: string
    targetIP?: string | null
    sslEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    domainId: string
    requests?: DomainRequestUncheckedCreateNestedManyWithoutSubdomainInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutSubdomainInput
  }

  export type SubdomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    targetIP?: NullableStringFieldUpdateOperationsInput | string | null
    sslEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutSubdomainsNestedInput
    requests?: DomainRequestUpdateManyWithoutSubdomainNestedInput
    auditLogs?: AuditLogUpdateManyWithoutSubdomainNestedInput
  }

  export type SubdomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    targetIP?: NullableStringFieldUpdateOperationsInput | string | null
    sslEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: StringFieldUpdateOperationsInput | string
    requests?: DomainRequestUncheckedUpdateManyWithoutSubdomainNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutSubdomainNestedInput
  }

  export type SubdomainCreateManyInput = {
    id?: string
    name: string
    fullDomain: string
    description?: string | null
    purpose?: string
    status?: string
    environment?: string
    targetIP?: string | null
    sslEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    domainId: string
  }

  export type SubdomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    targetIP?: NullableStringFieldUpdateOperationsInput | string | null
    sslEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubdomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    targetIP?: NullableStringFieldUpdateOperationsInput | string | null
    sslEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: StringFieldUpdateOperationsInput | string
  }

  export type DomainRequestCreateInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domain?: DomainCreateNestedOneWithoutRequestsInput
    subdomain?: SubdomainCreateNestedOneWithoutRequestsInput
    approvals?: ApprovalCreateNestedManyWithoutRequestInput
    comments?: CommentCreateNestedManyWithoutRequestInput
    auditLogs?: AuditLogCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestUncheckedCreateInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domainId?: string | null
    subdomainId?: string | null
    approvals?: ApprovalUncheckedCreateNestedManyWithoutRequestInput
    comments?: CommentUncheckedCreateNestedManyWithoutRequestInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: DomainUpdateOneWithoutRequestsNestedInput
    subdomain?: SubdomainUpdateOneWithoutRequestsNestedInput
    approvals?: ApprovalUpdateManyWithoutRequestNestedInput
    comments?: CommentUpdateManyWithoutRequestNestedInput
    auditLogs?: AuditLogUpdateManyWithoutRequestNestedInput
  }

  export type DomainRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
    approvals?: ApprovalUncheckedUpdateManyWithoutRequestNestedInput
    comments?: CommentUncheckedUpdateManyWithoutRequestNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type DomainRequestCreateManyInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domainId?: string | null
    subdomainId?: string | null
  }

  export type DomainRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DomainRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApprovalCreateInput = {
    id?: string
    approvedBy: string
    status: string
    comment?: string | null
    createdAt?: Date | string
    request: DomainRequestCreateNestedOneWithoutApprovalsInput
  }

  export type ApprovalUncheckedCreateInput = {
    id?: string
    requestId: string
    approvedBy: string
    status: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type ApprovalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: DomainRequestUpdateOneRequiredWithoutApprovalsNestedInput
  }

  export type ApprovalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalCreateManyInput = {
    id?: string
    requestId: string
    approvedBy: string
    status: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type ApprovalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    author: string
    content: string
    createdAt?: Date | string
    request: DomainRequestCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    requestId: string
    author: string
    content: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: DomainRequestUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    requestId: string
    author: string
    content: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    domain?: DomainCreateNestedOneWithoutAuditLogsInput
    subdomain?: SubdomainCreateNestedOneWithoutAuditLogsInput
    request?: DomainRequestCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    domainId?: string | null
    subdomainId?: string | null
    requestId?: string | null
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneWithoutAuditLogsNestedInput
    subdomain?: SubdomainUpdateOneWithoutAuditLogsNestedInput
    request?: DomainRequestUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateManyInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    domainId?: string | null
    subdomainId?: string | null
    requestId?: string | null
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubdomainListRelationFilter = {
    every?: SubdomainWhereInput
    some?: SubdomainWhereInput
    none?: SubdomainWhereInput
  }

  export type DomainRequestListRelationFilter = {
    every?: DomainRequestWhereInput
    some?: DomainRequestWhereInput
    none?: DomainRequestWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubdomainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomainRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomainCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    environment?: SortOrder
    owner?: SortOrder
    team?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    environment?: SortOrder
    owner?: SortOrder
    team?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    environment?: SortOrder
    owner?: SortOrder
    team?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DomainRelationFilter = {
    is?: DomainWhereInput
    isNot?: DomainWhereInput
  }

  export type SubdomainCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fullDomain?: SortOrder
    description?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    environment?: SortOrder
    targetIP?: SortOrder
    sslEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domainId?: SortOrder
  }

  export type SubdomainMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fullDomain?: SortOrder
    description?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    environment?: SortOrder
    targetIP?: SortOrder
    sslEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domainId?: SortOrder
  }

  export type SubdomainMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fullDomain?: SortOrder
    description?: SortOrder
    purpose?: SortOrder
    status?: SortOrder
    environment?: SortOrder
    targetIP?: SortOrder
    sslEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domainId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DomainNullableRelationFilter = {
    is?: DomainWhereInput | null
    isNot?: DomainWhereInput | null
  }

  export type SubdomainNullableRelationFilter = {
    is?: SubdomainWhereInput | null
    isNot?: SubdomainWhereInput | null
  }

  export type ApprovalListRelationFilter = {
    every?: ApprovalWhereInput
    some?: ApprovalWhereInput
    none?: ApprovalWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ApprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomainRequestCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    title?: SortOrder
    description?: SortOrder
    justification?: SortOrder
    requestedBy?: SortOrder
    requestedAt?: SortOrder
    updatedAt?: SortOrder
    proposedName?: SortOrder
    proposedEnvironment?: SortOrder
    proposedPurpose?: SortOrder
    proposedDescription?: SortOrder
    currentValue?: SortOrder
    proposedValue?: SortOrder
    domainId?: SortOrder
    subdomainId?: SortOrder
  }

  export type DomainRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    title?: SortOrder
    description?: SortOrder
    justification?: SortOrder
    requestedBy?: SortOrder
    requestedAt?: SortOrder
    updatedAt?: SortOrder
    proposedName?: SortOrder
    proposedEnvironment?: SortOrder
    proposedPurpose?: SortOrder
    proposedDescription?: SortOrder
    currentValue?: SortOrder
    proposedValue?: SortOrder
    domainId?: SortOrder
    subdomainId?: SortOrder
  }

  export type DomainRequestMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    title?: SortOrder
    description?: SortOrder
    justification?: SortOrder
    requestedBy?: SortOrder
    requestedAt?: SortOrder
    updatedAt?: SortOrder
    proposedName?: SortOrder
    proposedEnvironment?: SortOrder
    proposedPurpose?: SortOrder
    proposedDescription?: SortOrder
    currentValue?: SortOrder
    proposedValue?: SortOrder
    domainId?: SortOrder
    subdomainId?: SortOrder
  }

  export type DomainRequestRelationFilter = {
    is?: DomainRequestWhereInput
    isNot?: DomainRequestWhereInput
  }

  export type ApprovalCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    approvedBy?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    approvedBy?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovalMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    approvedBy?: SortOrder
    status?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    requestId?: SortOrder
    author?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type DomainRequestNullableRelationFilter = {
    is?: DomainRequestWhereInput | null
    isNot?: DomainRequestWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    performedBy?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    domainId?: SortOrder
    subdomainId?: SortOrder
    requestId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    performedBy?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    domainId?: SortOrder
    subdomainId?: SortOrder
    requestId?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    performedBy?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    domainId?: SortOrder
    subdomainId?: SortOrder
    requestId?: SortOrder
  }

  export type SubdomainCreateNestedManyWithoutDomainInput = {
    create?: XOR<SubdomainCreateWithoutDomainInput, SubdomainUncheckedCreateWithoutDomainInput> | SubdomainCreateWithoutDomainInput[] | SubdomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: SubdomainCreateOrConnectWithoutDomainInput | SubdomainCreateOrConnectWithoutDomainInput[]
    createMany?: SubdomainCreateManyDomainInputEnvelope
    connect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
  }

  export type DomainRequestCreateNestedManyWithoutDomainInput = {
    create?: XOR<DomainRequestCreateWithoutDomainInput, DomainRequestUncheckedCreateWithoutDomainInput> | DomainRequestCreateWithoutDomainInput[] | DomainRequestUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: DomainRequestCreateOrConnectWithoutDomainInput | DomainRequestCreateOrConnectWithoutDomainInput[]
    createMany?: DomainRequestCreateManyDomainInputEnvelope
    connect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutDomainInput = {
    create?: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput> | AuditLogCreateWithoutDomainInput[] | AuditLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutDomainInput | AuditLogCreateOrConnectWithoutDomainInput[]
    createMany?: AuditLogCreateManyDomainInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type SubdomainUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<SubdomainCreateWithoutDomainInput, SubdomainUncheckedCreateWithoutDomainInput> | SubdomainCreateWithoutDomainInput[] | SubdomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: SubdomainCreateOrConnectWithoutDomainInput | SubdomainCreateOrConnectWithoutDomainInput[]
    createMany?: SubdomainCreateManyDomainInputEnvelope
    connect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
  }

  export type DomainRequestUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<DomainRequestCreateWithoutDomainInput, DomainRequestUncheckedCreateWithoutDomainInput> | DomainRequestCreateWithoutDomainInput[] | DomainRequestUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: DomainRequestCreateOrConnectWithoutDomainInput | DomainRequestCreateOrConnectWithoutDomainInput[]
    createMany?: DomainRequestCreateManyDomainInputEnvelope
    connect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput> | AuditLogCreateWithoutDomainInput[] | AuditLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutDomainInput | AuditLogCreateOrConnectWithoutDomainInput[]
    createMany?: AuditLogCreateManyDomainInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubdomainUpdateManyWithoutDomainNestedInput = {
    create?: XOR<SubdomainCreateWithoutDomainInput, SubdomainUncheckedCreateWithoutDomainInput> | SubdomainCreateWithoutDomainInput[] | SubdomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: SubdomainCreateOrConnectWithoutDomainInput | SubdomainCreateOrConnectWithoutDomainInput[]
    upsert?: SubdomainUpsertWithWhereUniqueWithoutDomainInput | SubdomainUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: SubdomainCreateManyDomainInputEnvelope
    set?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    disconnect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    delete?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    connect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    update?: SubdomainUpdateWithWhereUniqueWithoutDomainInput | SubdomainUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: SubdomainUpdateManyWithWhereWithoutDomainInput | SubdomainUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: SubdomainScalarWhereInput | SubdomainScalarWhereInput[]
  }

  export type DomainRequestUpdateManyWithoutDomainNestedInput = {
    create?: XOR<DomainRequestCreateWithoutDomainInput, DomainRequestUncheckedCreateWithoutDomainInput> | DomainRequestCreateWithoutDomainInput[] | DomainRequestUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: DomainRequestCreateOrConnectWithoutDomainInput | DomainRequestCreateOrConnectWithoutDomainInput[]
    upsert?: DomainRequestUpsertWithWhereUniqueWithoutDomainInput | DomainRequestUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: DomainRequestCreateManyDomainInputEnvelope
    set?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    disconnect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    delete?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    connect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    update?: DomainRequestUpdateWithWhereUniqueWithoutDomainInput | DomainRequestUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: DomainRequestUpdateManyWithWhereWithoutDomainInput | DomainRequestUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: DomainRequestScalarWhereInput | DomainRequestScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutDomainNestedInput = {
    create?: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput> | AuditLogCreateWithoutDomainInput[] | AuditLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutDomainInput | AuditLogCreateOrConnectWithoutDomainInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutDomainInput | AuditLogUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: AuditLogCreateManyDomainInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutDomainInput | AuditLogUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutDomainInput | AuditLogUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SubdomainUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<SubdomainCreateWithoutDomainInput, SubdomainUncheckedCreateWithoutDomainInput> | SubdomainCreateWithoutDomainInput[] | SubdomainUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: SubdomainCreateOrConnectWithoutDomainInput | SubdomainCreateOrConnectWithoutDomainInput[]
    upsert?: SubdomainUpsertWithWhereUniqueWithoutDomainInput | SubdomainUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: SubdomainCreateManyDomainInputEnvelope
    set?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    disconnect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    delete?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    connect?: SubdomainWhereUniqueInput | SubdomainWhereUniqueInput[]
    update?: SubdomainUpdateWithWhereUniqueWithoutDomainInput | SubdomainUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: SubdomainUpdateManyWithWhereWithoutDomainInput | SubdomainUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: SubdomainScalarWhereInput | SubdomainScalarWhereInput[]
  }

  export type DomainRequestUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<DomainRequestCreateWithoutDomainInput, DomainRequestUncheckedCreateWithoutDomainInput> | DomainRequestCreateWithoutDomainInput[] | DomainRequestUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: DomainRequestCreateOrConnectWithoutDomainInput | DomainRequestCreateOrConnectWithoutDomainInput[]
    upsert?: DomainRequestUpsertWithWhereUniqueWithoutDomainInput | DomainRequestUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: DomainRequestCreateManyDomainInputEnvelope
    set?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    disconnect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    delete?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    connect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    update?: DomainRequestUpdateWithWhereUniqueWithoutDomainInput | DomainRequestUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: DomainRequestUpdateManyWithWhereWithoutDomainInput | DomainRequestUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: DomainRequestScalarWhereInput | DomainRequestScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput> | AuditLogCreateWithoutDomainInput[] | AuditLogUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutDomainInput | AuditLogCreateOrConnectWithoutDomainInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutDomainInput | AuditLogUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: AuditLogCreateManyDomainInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutDomainInput | AuditLogUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutDomainInput | AuditLogUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type DomainCreateNestedOneWithoutSubdomainsInput = {
    create?: XOR<DomainCreateWithoutSubdomainsInput, DomainUncheckedCreateWithoutSubdomainsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutSubdomainsInput
    connect?: DomainWhereUniqueInput
  }

  export type DomainRequestCreateNestedManyWithoutSubdomainInput = {
    create?: XOR<DomainRequestCreateWithoutSubdomainInput, DomainRequestUncheckedCreateWithoutSubdomainInput> | DomainRequestCreateWithoutSubdomainInput[] | DomainRequestUncheckedCreateWithoutSubdomainInput[]
    connectOrCreate?: DomainRequestCreateOrConnectWithoutSubdomainInput | DomainRequestCreateOrConnectWithoutSubdomainInput[]
    createMany?: DomainRequestCreateManySubdomainInputEnvelope
    connect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutSubdomainInput = {
    create?: XOR<AuditLogCreateWithoutSubdomainInput, AuditLogUncheckedCreateWithoutSubdomainInput> | AuditLogCreateWithoutSubdomainInput[] | AuditLogUncheckedCreateWithoutSubdomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutSubdomainInput | AuditLogCreateOrConnectWithoutSubdomainInput[]
    createMany?: AuditLogCreateManySubdomainInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type DomainRequestUncheckedCreateNestedManyWithoutSubdomainInput = {
    create?: XOR<DomainRequestCreateWithoutSubdomainInput, DomainRequestUncheckedCreateWithoutSubdomainInput> | DomainRequestCreateWithoutSubdomainInput[] | DomainRequestUncheckedCreateWithoutSubdomainInput[]
    connectOrCreate?: DomainRequestCreateOrConnectWithoutSubdomainInput | DomainRequestCreateOrConnectWithoutSubdomainInput[]
    createMany?: DomainRequestCreateManySubdomainInputEnvelope
    connect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutSubdomainInput = {
    create?: XOR<AuditLogCreateWithoutSubdomainInput, AuditLogUncheckedCreateWithoutSubdomainInput> | AuditLogCreateWithoutSubdomainInput[] | AuditLogUncheckedCreateWithoutSubdomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutSubdomainInput | AuditLogCreateOrConnectWithoutSubdomainInput[]
    createMany?: AuditLogCreateManySubdomainInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DomainUpdateOneRequiredWithoutSubdomainsNestedInput = {
    create?: XOR<DomainCreateWithoutSubdomainsInput, DomainUncheckedCreateWithoutSubdomainsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutSubdomainsInput
    upsert?: DomainUpsertWithoutSubdomainsInput
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutSubdomainsInput, DomainUpdateWithoutSubdomainsInput>, DomainUncheckedUpdateWithoutSubdomainsInput>
  }

  export type DomainRequestUpdateManyWithoutSubdomainNestedInput = {
    create?: XOR<DomainRequestCreateWithoutSubdomainInput, DomainRequestUncheckedCreateWithoutSubdomainInput> | DomainRequestCreateWithoutSubdomainInput[] | DomainRequestUncheckedCreateWithoutSubdomainInput[]
    connectOrCreate?: DomainRequestCreateOrConnectWithoutSubdomainInput | DomainRequestCreateOrConnectWithoutSubdomainInput[]
    upsert?: DomainRequestUpsertWithWhereUniqueWithoutSubdomainInput | DomainRequestUpsertWithWhereUniqueWithoutSubdomainInput[]
    createMany?: DomainRequestCreateManySubdomainInputEnvelope
    set?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    disconnect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    delete?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    connect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    update?: DomainRequestUpdateWithWhereUniqueWithoutSubdomainInput | DomainRequestUpdateWithWhereUniqueWithoutSubdomainInput[]
    updateMany?: DomainRequestUpdateManyWithWhereWithoutSubdomainInput | DomainRequestUpdateManyWithWhereWithoutSubdomainInput[]
    deleteMany?: DomainRequestScalarWhereInput | DomainRequestScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutSubdomainNestedInput = {
    create?: XOR<AuditLogCreateWithoutSubdomainInput, AuditLogUncheckedCreateWithoutSubdomainInput> | AuditLogCreateWithoutSubdomainInput[] | AuditLogUncheckedCreateWithoutSubdomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutSubdomainInput | AuditLogCreateOrConnectWithoutSubdomainInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutSubdomainInput | AuditLogUpsertWithWhereUniqueWithoutSubdomainInput[]
    createMany?: AuditLogCreateManySubdomainInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutSubdomainInput | AuditLogUpdateWithWhereUniqueWithoutSubdomainInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutSubdomainInput | AuditLogUpdateManyWithWhereWithoutSubdomainInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type DomainRequestUncheckedUpdateManyWithoutSubdomainNestedInput = {
    create?: XOR<DomainRequestCreateWithoutSubdomainInput, DomainRequestUncheckedCreateWithoutSubdomainInput> | DomainRequestCreateWithoutSubdomainInput[] | DomainRequestUncheckedCreateWithoutSubdomainInput[]
    connectOrCreate?: DomainRequestCreateOrConnectWithoutSubdomainInput | DomainRequestCreateOrConnectWithoutSubdomainInput[]
    upsert?: DomainRequestUpsertWithWhereUniqueWithoutSubdomainInput | DomainRequestUpsertWithWhereUniqueWithoutSubdomainInput[]
    createMany?: DomainRequestCreateManySubdomainInputEnvelope
    set?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    disconnect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    delete?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    connect?: DomainRequestWhereUniqueInput | DomainRequestWhereUniqueInput[]
    update?: DomainRequestUpdateWithWhereUniqueWithoutSubdomainInput | DomainRequestUpdateWithWhereUniqueWithoutSubdomainInput[]
    updateMany?: DomainRequestUpdateManyWithWhereWithoutSubdomainInput | DomainRequestUpdateManyWithWhereWithoutSubdomainInput[]
    deleteMany?: DomainRequestScalarWhereInput | DomainRequestScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutSubdomainNestedInput = {
    create?: XOR<AuditLogCreateWithoutSubdomainInput, AuditLogUncheckedCreateWithoutSubdomainInput> | AuditLogCreateWithoutSubdomainInput[] | AuditLogUncheckedCreateWithoutSubdomainInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutSubdomainInput | AuditLogCreateOrConnectWithoutSubdomainInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutSubdomainInput | AuditLogUpsertWithWhereUniqueWithoutSubdomainInput[]
    createMany?: AuditLogCreateManySubdomainInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutSubdomainInput | AuditLogUpdateWithWhereUniqueWithoutSubdomainInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutSubdomainInput | AuditLogUpdateManyWithWhereWithoutSubdomainInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type DomainCreateNestedOneWithoutRequestsInput = {
    create?: XOR<DomainCreateWithoutRequestsInput, DomainUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutRequestsInput
    connect?: DomainWhereUniqueInput
  }

  export type SubdomainCreateNestedOneWithoutRequestsInput = {
    create?: XOR<SubdomainCreateWithoutRequestsInput, SubdomainUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: SubdomainCreateOrConnectWithoutRequestsInput
    connect?: SubdomainWhereUniqueInput
  }

  export type ApprovalCreateNestedManyWithoutRequestInput = {
    create?: XOR<ApprovalCreateWithoutRequestInput, ApprovalUncheckedCreateWithoutRequestInput> | ApprovalCreateWithoutRequestInput[] | ApprovalUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutRequestInput | ApprovalCreateOrConnectWithoutRequestInput[]
    createMany?: ApprovalCreateManyRequestInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutRequestInput = {
    create?: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput> | CommentCreateWithoutRequestInput[] | CommentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRequestInput | CommentCreateOrConnectWithoutRequestInput[]
    createMany?: CommentCreateManyRequestInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutRequestInput = {
    create?: XOR<AuditLogCreateWithoutRequestInput, AuditLogUncheckedCreateWithoutRequestInput> | AuditLogCreateWithoutRequestInput[] | AuditLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutRequestInput | AuditLogCreateOrConnectWithoutRequestInput[]
    createMany?: AuditLogCreateManyRequestInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ApprovalUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<ApprovalCreateWithoutRequestInput, ApprovalUncheckedCreateWithoutRequestInput> | ApprovalCreateWithoutRequestInput[] | ApprovalUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutRequestInput | ApprovalCreateOrConnectWithoutRequestInput[]
    createMany?: ApprovalCreateManyRequestInputEnvelope
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput> | CommentCreateWithoutRequestInput[] | CommentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRequestInput | CommentCreateOrConnectWithoutRequestInput[]
    createMany?: CommentCreateManyRequestInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<AuditLogCreateWithoutRequestInput, AuditLogUncheckedCreateWithoutRequestInput> | AuditLogCreateWithoutRequestInput[] | AuditLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutRequestInput | AuditLogCreateOrConnectWithoutRequestInput[]
    createMany?: AuditLogCreateManyRequestInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type DomainUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<DomainCreateWithoutRequestsInput, DomainUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutRequestsInput
    upsert?: DomainUpsertWithoutRequestsInput
    disconnect?: DomainWhereInput | boolean
    delete?: DomainWhereInput | boolean
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutRequestsInput, DomainUpdateWithoutRequestsInput>, DomainUncheckedUpdateWithoutRequestsInput>
  }

  export type SubdomainUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<SubdomainCreateWithoutRequestsInput, SubdomainUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: SubdomainCreateOrConnectWithoutRequestsInput
    upsert?: SubdomainUpsertWithoutRequestsInput
    disconnect?: SubdomainWhereInput | boolean
    delete?: SubdomainWhereInput | boolean
    connect?: SubdomainWhereUniqueInput
    update?: XOR<XOR<SubdomainUpdateToOneWithWhereWithoutRequestsInput, SubdomainUpdateWithoutRequestsInput>, SubdomainUncheckedUpdateWithoutRequestsInput>
  }

  export type ApprovalUpdateManyWithoutRequestNestedInput = {
    create?: XOR<ApprovalCreateWithoutRequestInput, ApprovalUncheckedCreateWithoutRequestInput> | ApprovalCreateWithoutRequestInput[] | ApprovalUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutRequestInput | ApprovalCreateOrConnectWithoutRequestInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutRequestInput | ApprovalUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: ApprovalCreateManyRequestInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutRequestInput | ApprovalUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutRequestInput | ApprovalUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutRequestNestedInput = {
    create?: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput> | CommentCreateWithoutRequestInput[] | CommentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRequestInput | CommentCreateOrConnectWithoutRequestInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutRequestInput | CommentUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: CommentCreateManyRequestInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutRequestInput | CommentUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutRequestInput | CommentUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutRequestNestedInput = {
    create?: XOR<AuditLogCreateWithoutRequestInput, AuditLogUncheckedCreateWithoutRequestInput> | AuditLogCreateWithoutRequestInput[] | AuditLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutRequestInput | AuditLogCreateOrConnectWithoutRequestInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutRequestInput | AuditLogUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: AuditLogCreateManyRequestInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutRequestInput | AuditLogUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutRequestInput | AuditLogUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ApprovalUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<ApprovalCreateWithoutRequestInput, ApprovalUncheckedCreateWithoutRequestInput> | ApprovalCreateWithoutRequestInput[] | ApprovalUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ApprovalCreateOrConnectWithoutRequestInput | ApprovalCreateOrConnectWithoutRequestInput[]
    upsert?: ApprovalUpsertWithWhereUniqueWithoutRequestInput | ApprovalUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: ApprovalCreateManyRequestInputEnvelope
    set?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    disconnect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    delete?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    connect?: ApprovalWhereUniqueInput | ApprovalWhereUniqueInput[]
    update?: ApprovalUpdateWithWhereUniqueWithoutRequestInput | ApprovalUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: ApprovalUpdateManyWithWhereWithoutRequestInput | ApprovalUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput> | CommentCreateWithoutRequestInput[] | CommentUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRequestInput | CommentCreateOrConnectWithoutRequestInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutRequestInput | CommentUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: CommentCreateManyRequestInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutRequestInput | CommentUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutRequestInput | CommentUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<AuditLogCreateWithoutRequestInput, AuditLogUncheckedCreateWithoutRequestInput> | AuditLogCreateWithoutRequestInput[] | AuditLogUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutRequestInput | AuditLogCreateOrConnectWithoutRequestInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutRequestInput | AuditLogUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: AuditLogCreateManyRequestInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutRequestInput | AuditLogUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutRequestInput | AuditLogUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type DomainRequestCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<DomainRequestCreateWithoutApprovalsInput, DomainRequestUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: DomainRequestCreateOrConnectWithoutApprovalsInput
    connect?: DomainRequestWhereUniqueInput
  }

  export type DomainRequestUpdateOneRequiredWithoutApprovalsNestedInput = {
    create?: XOR<DomainRequestCreateWithoutApprovalsInput, DomainRequestUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: DomainRequestCreateOrConnectWithoutApprovalsInput
    upsert?: DomainRequestUpsertWithoutApprovalsInput
    connect?: DomainRequestWhereUniqueInput
    update?: XOR<XOR<DomainRequestUpdateToOneWithWhereWithoutApprovalsInput, DomainRequestUpdateWithoutApprovalsInput>, DomainRequestUncheckedUpdateWithoutApprovalsInput>
  }

  export type DomainRequestCreateNestedOneWithoutCommentsInput = {
    create?: XOR<DomainRequestCreateWithoutCommentsInput, DomainRequestUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DomainRequestCreateOrConnectWithoutCommentsInput
    connect?: DomainRequestWhereUniqueInput
  }

  export type DomainRequestUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<DomainRequestCreateWithoutCommentsInput, DomainRequestUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DomainRequestCreateOrConnectWithoutCommentsInput
    upsert?: DomainRequestUpsertWithoutCommentsInput
    connect?: DomainRequestWhereUniqueInput
    update?: XOR<XOR<DomainRequestUpdateToOneWithWhereWithoutCommentsInput, DomainRequestUpdateWithoutCommentsInput>, DomainRequestUncheckedUpdateWithoutCommentsInput>
  }

  export type DomainCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<DomainCreateWithoutAuditLogsInput, DomainUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutAuditLogsInput
    connect?: DomainWhereUniqueInput
  }

  export type SubdomainCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<SubdomainCreateWithoutAuditLogsInput, SubdomainUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: SubdomainCreateOrConnectWithoutAuditLogsInput
    connect?: SubdomainWhereUniqueInput
  }

  export type DomainRequestCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<DomainRequestCreateWithoutAuditLogsInput, DomainRequestUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: DomainRequestCreateOrConnectWithoutAuditLogsInput
    connect?: DomainRequestWhereUniqueInput
  }

  export type DomainUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<DomainCreateWithoutAuditLogsInput, DomainUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutAuditLogsInput
    upsert?: DomainUpsertWithoutAuditLogsInput
    disconnect?: DomainWhereInput | boolean
    delete?: DomainWhereInput | boolean
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutAuditLogsInput, DomainUpdateWithoutAuditLogsInput>, DomainUncheckedUpdateWithoutAuditLogsInput>
  }

  export type SubdomainUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<SubdomainCreateWithoutAuditLogsInput, SubdomainUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: SubdomainCreateOrConnectWithoutAuditLogsInput
    upsert?: SubdomainUpsertWithoutAuditLogsInput
    disconnect?: SubdomainWhereInput | boolean
    delete?: SubdomainWhereInput | boolean
    connect?: SubdomainWhereUniqueInput
    update?: XOR<XOR<SubdomainUpdateToOneWithWhereWithoutAuditLogsInput, SubdomainUpdateWithoutAuditLogsInput>, SubdomainUncheckedUpdateWithoutAuditLogsInput>
  }

  export type DomainRequestUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<DomainRequestCreateWithoutAuditLogsInput, DomainRequestUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: DomainRequestCreateOrConnectWithoutAuditLogsInput
    upsert?: DomainRequestUpsertWithoutAuditLogsInput
    disconnect?: DomainRequestWhereInput | boolean
    delete?: DomainRequestWhereInput | boolean
    connect?: DomainRequestWhereUniqueInput
    update?: XOR<XOR<DomainRequestUpdateToOneWithWhereWithoutAuditLogsInput, DomainRequestUpdateWithoutAuditLogsInput>, DomainRequestUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SubdomainCreateWithoutDomainInput = {
    id?: string
    name: string
    fullDomain: string
    description?: string | null
    purpose?: string
    status?: string
    environment?: string
    targetIP?: string | null
    sslEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: DomainRequestCreateNestedManyWithoutSubdomainInput
    auditLogs?: AuditLogCreateNestedManyWithoutSubdomainInput
  }

  export type SubdomainUncheckedCreateWithoutDomainInput = {
    id?: string
    name: string
    fullDomain: string
    description?: string | null
    purpose?: string
    status?: string
    environment?: string
    targetIP?: string | null
    sslEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: DomainRequestUncheckedCreateNestedManyWithoutSubdomainInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutSubdomainInput
  }

  export type SubdomainCreateOrConnectWithoutDomainInput = {
    where: SubdomainWhereUniqueInput
    create: XOR<SubdomainCreateWithoutDomainInput, SubdomainUncheckedCreateWithoutDomainInput>
  }

  export type SubdomainCreateManyDomainInputEnvelope = {
    data: SubdomainCreateManyDomainInput | SubdomainCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type DomainRequestCreateWithoutDomainInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    subdomain?: SubdomainCreateNestedOneWithoutRequestsInput
    approvals?: ApprovalCreateNestedManyWithoutRequestInput
    comments?: CommentCreateNestedManyWithoutRequestInput
    auditLogs?: AuditLogCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestUncheckedCreateWithoutDomainInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    subdomainId?: string | null
    approvals?: ApprovalUncheckedCreateNestedManyWithoutRequestInput
    comments?: CommentUncheckedCreateNestedManyWithoutRequestInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestCreateOrConnectWithoutDomainInput = {
    where: DomainRequestWhereUniqueInput
    create: XOR<DomainRequestCreateWithoutDomainInput, DomainRequestUncheckedCreateWithoutDomainInput>
  }

  export type DomainRequestCreateManyDomainInputEnvelope = {
    data: DomainRequestCreateManyDomainInput | DomainRequestCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutDomainInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    subdomain?: SubdomainCreateNestedOneWithoutAuditLogsInput
    request?: DomainRequestCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutDomainInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    subdomainId?: string | null
    requestId?: string | null
  }

  export type AuditLogCreateOrConnectWithoutDomainInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput>
  }

  export type AuditLogCreateManyDomainInputEnvelope = {
    data: AuditLogCreateManyDomainInput | AuditLogCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type SubdomainUpsertWithWhereUniqueWithoutDomainInput = {
    where: SubdomainWhereUniqueInput
    update: XOR<SubdomainUpdateWithoutDomainInput, SubdomainUncheckedUpdateWithoutDomainInput>
    create: XOR<SubdomainCreateWithoutDomainInput, SubdomainUncheckedCreateWithoutDomainInput>
  }

  export type SubdomainUpdateWithWhereUniqueWithoutDomainInput = {
    where: SubdomainWhereUniqueInput
    data: XOR<SubdomainUpdateWithoutDomainInput, SubdomainUncheckedUpdateWithoutDomainInput>
  }

  export type SubdomainUpdateManyWithWhereWithoutDomainInput = {
    where: SubdomainScalarWhereInput
    data: XOR<SubdomainUpdateManyMutationInput, SubdomainUncheckedUpdateManyWithoutDomainInput>
  }

  export type SubdomainScalarWhereInput = {
    AND?: SubdomainScalarWhereInput | SubdomainScalarWhereInput[]
    OR?: SubdomainScalarWhereInput[]
    NOT?: SubdomainScalarWhereInput | SubdomainScalarWhereInput[]
    id?: StringFilter<"Subdomain"> | string
    name?: StringFilter<"Subdomain"> | string
    fullDomain?: StringFilter<"Subdomain"> | string
    description?: StringNullableFilter<"Subdomain"> | string | null
    purpose?: StringFilter<"Subdomain"> | string
    status?: StringFilter<"Subdomain"> | string
    environment?: StringFilter<"Subdomain"> | string
    targetIP?: StringNullableFilter<"Subdomain"> | string | null
    sslEnabled?: BoolFilter<"Subdomain"> | boolean
    createdAt?: DateTimeFilter<"Subdomain"> | Date | string
    updatedAt?: DateTimeFilter<"Subdomain"> | Date | string
    domainId?: StringFilter<"Subdomain"> | string
  }

  export type DomainRequestUpsertWithWhereUniqueWithoutDomainInput = {
    where: DomainRequestWhereUniqueInput
    update: XOR<DomainRequestUpdateWithoutDomainInput, DomainRequestUncheckedUpdateWithoutDomainInput>
    create: XOR<DomainRequestCreateWithoutDomainInput, DomainRequestUncheckedCreateWithoutDomainInput>
  }

  export type DomainRequestUpdateWithWhereUniqueWithoutDomainInput = {
    where: DomainRequestWhereUniqueInput
    data: XOR<DomainRequestUpdateWithoutDomainInput, DomainRequestUncheckedUpdateWithoutDomainInput>
  }

  export type DomainRequestUpdateManyWithWhereWithoutDomainInput = {
    where: DomainRequestScalarWhereInput
    data: XOR<DomainRequestUpdateManyMutationInput, DomainRequestUncheckedUpdateManyWithoutDomainInput>
  }

  export type DomainRequestScalarWhereInput = {
    AND?: DomainRequestScalarWhereInput | DomainRequestScalarWhereInput[]
    OR?: DomainRequestScalarWhereInput[]
    NOT?: DomainRequestScalarWhereInput | DomainRequestScalarWhereInput[]
    id?: StringFilter<"DomainRequest"> | string
    type?: StringFilter<"DomainRequest"> | string
    status?: StringFilter<"DomainRequest"> | string
    priority?: StringFilter<"DomainRequest"> | string
    title?: StringFilter<"DomainRequest"> | string
    description?: StringFilter<"DomainRequest"> | string
    justification?: StringNullableFilter<"DomainRequest"> | string | null
    requestedBy?: StringFilter<"DomainRequest"> | string
    requestedAt?: DateTimeFilter<"DomainRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DomainRequest"> | Date | string
    proposedName?: StringNullableFilter<"DomainRequest"> | string | null
    proposedEnvironment?: StringNullableFilter<"DomainRequest"> | string | null
    proposedPurpose?: StringNullableFilter<"DomainRequest"> | string | null
    proposedDescription?: StringNullableFilter<"DomainRequest"> | string | null
    currentValue?: StringNullableFilter<"DomainRequest"> | string | null
    proposedValue?: StringNullableFilter<"DomainRequest"> | string | null
    domainId?: StringNullableFilter<"DomainRequest"> | string | null
    subdomainId?: StringNullableFilter<"DomainRequest"> | string | null
  }

  export type AuditLogUpsertWithWhereUniqueWithoutDomainInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutDomainInput, AuditLogUncheckedUpdateWithoutDomainInput>
    create: XOR<AuditLogCreateWithoutDomainInput, AuditLogUncheckedCreateWithoutDomainInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutDomainInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutDomainInput, AuditLogUncheckedUpdateWithoutDomainInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutDomainInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutDomainInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    performedBy?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    domainId?: StringNullableFilter<"AuditLog"> | string | null
    subdomainId?: StringNullableFilter<"AuditLog"> | string | null
    requestId?: StringNullableFilter<"AuditLog"> | string | null
  }

  export type DomainCreateWithoutSubdomainsInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    environment?: string
    owner: string
    team?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: DomainRequestCreateNestedManyWithoutDomainInput
    auditLogs?: AuditLogCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutSubdomainsInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    environment?: string
    owner: string
    team?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: DomainRequestUncheckedCreateNestedManyWithoutDomainInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutSubdomainsInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutSubdomainsInput, DomainUncheckedCreateWithoutSubdomainsInput>
  }

  export type DomainRequestCreateWithoutSubdomainInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domain?: DomainCreateNestedOneWithoutRequestsInput
    approvals?: ApprovalCreateNestedManyWithoutRequestInput
    comments?: CommentCreateNestedManyWithoutRequestInput
    auditLogs?: AuditLogCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestUncheckedCreateWithoutSubdomainInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domainId?: string | null
    approvals?: ApprovalUncheckedCreateNestedManyWithoutRequestInput
    comments?: CommentUncheckedCreateNestedManyWithoutRequestInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestCreateOrConnectWithoutSubdomainInput = {
    where: DomainRequestWhereUniqueInput
    create: XOR<DomainRequestCreateWithoutSubdomainInput, DomainRequestUncheckedCreateWithoutSubdomainInput>
  }

  export type DomainRequestCreateManySubdomainInputEnvelope = {
    data: DomainRequestCreateManySubdomainInput | DomainRequestCreateManySubdomainInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutSubdomainInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    domain?: DomainCreateNestedOneWithoutAuditLogsInput
    request?: DomainRequestCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutSubdomainInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    domainId?: string | null
    requestId?: string | null
  }

  export type AuditLogCreateOrConnectWithoutSubdomainInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutSubdomainInput, AuditLogUncheckedCreateWithoutSubdomainInput>
  }

  export type AuditLogCreateManySubdomainInputEnvelope = {
    data: AuditLogCreateManySubdomainInput | AuditLogCreateManySubdomainInput[]
    skipDuplicates?: boolean
  }

  export type DomainUpsertWithoutSubdomainsInput = {
    update: XOR<DomainUpdateWithoutSubdomainsInput, DomainUncheckedUpdateWithoutSubdomainsInput>
    create: XOR<DomainCreateWithoutSubdomainsInput, DomainUncheckedCreateWithoutSubdomainsInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutSubdomainsInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutSubdomainsInput, DomainUncheckedUpdateWithoutSubdomainsInput>
  }

  export type DomainUpdateWithoutSubdomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: DomainRequestUpdateManyWithoutDomainNestedInput
    auditLogs?: AuditLogUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutSubdomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: DomainRequestUncheckedUpdateManyWithoutDomainNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainRequestUpsertWithWhereUniqueWithoutSubdomainInput = {
    where: DomainRequestWhereUniqueInput
    update: XOR<DomainRequestUpdateWithoutSubdomainInput, DomainRequestUncheckedUpdateWithoutSubdomainInput>
    create: XOR<DomainRequestCreateWithoutSubdomainInput, DomainRequestUncheckedCreateWithoutSubdomainInput>
  }

  export type DomainRequestUpdateWithWhereUniqueWithoutSubdomainInput = {
    where: DomainRequestWhereUniqueInput
    data: XOR<DomainRequestUpdateWithoutSubdomainInput, DomainRequestUncheckedUpdateWithoutSubdomainInput>
  }

  export type DomainRequestUpdateManyWithWhereWithoutSubdomainInput = {
    where: DomainRequestScalarWhereInput
    data: XOR<DomainRequestUpdateManyMutationInput, DomainRequestUncheckedUpdateManyWithoutSubdomainInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutSubdomainInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutSubdomainInput, AuditLogUncheckedUpdateWithoutSubdomainInput>
    create: XOR<AuditLogCreateWithoutSubdomainInput, AuditLogUncheckedCreateWithoutSubdomainInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutSubdomainInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutSubdomainInput, AuditLogUncheckedUpdateWithoutSubdomainInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutSubdomainInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutSubdomainInput>
  }

  export type DomainCreateWithoutRequestsInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    environment?: string
    owner: string
    team?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomains?: SubdomainCreateNestedManyWithoutDomainInput
    auditLogs?: AuditLogCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    environment?: string
    owner: string
    team?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomains?: SubdomainUncheckedCreateNestedManyWithoutDomainInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutRequestsInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutRequestsInput, DomainUncheckedCreateWithoutRequestsInput>
  }

  export type SubdomainCreateWithoutRequestsInput = {
    id?: string
    name: string
    fullDomain: string
    description?: string | null
    purpose?: string
    status?: string
    environment?: string
    targetIP?: string | null
    sslEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: DomainCreateNestedOneWithoutSubdomainsInput
    auditLogs?: AuditLogCreateNestedManyWithoutSubdomainInput
  }

  export type SubdomainUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    fullDomain: string
    description?: string | null
    purpose?: string
    status?: string
    environment?: string
    targetIP?: string | null
    sslEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    domainId: string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutSubdomainInput
  }

  export type SubdomainCreateOrConnectWithoutRequestsInput = {
    where: SubdomainWhereUniqueInput
    create: XOR<SubdomainCreateWithoutRequestsInput, SubdomainUncheckedCreateWithoutRequestsInput>
  }

  export type ApprovalCreateWithoutRequestInput = {
    id?: string
    approvedBy: string
    status: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type ApprovalUncheckedCreateWithoutRequestInput = {
    id?: string
    approvedBy: string
    status: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type ApprovalCreateOrConnectWithoutRequestInput = {
    where: ApprovalWhereUniqueInput
    create: XOR<ApprovalCreateWithoutRequestInput, ApprovalUncheckedCreateWithoutRequestInput>
  }

  export type ApprovalCreateManyRequestInputEnvelope = {
    data: ApprovalCreateManyRequestInput | ApprovalCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutRequestInput = {
    id?: string
    author: string
    content: string
    createdAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutRequestInput = {
    id?: string
    author: string
    content: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutRequestInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput>
  }

  export type CommentCreateManyRequestInputEnvelope = {
    data: CommentCreateManyRequestInput | CommentCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutRequestInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    domain?: DomainCreateNestedOneWithoutAuditLogsInput
    subdomain?: SubdomainCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutRequestInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    domainId?: string | null
    subdomainId?: string | null
  }

  export type AuditLogCreateOrConnectWithoutRequestInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutRequestInput, AuditLogUncheckedCreateWithoutRequestInput>
  }

  export type AuditLogCreateManyRequestInputEnvelope = {
    data: AuditLogCreateManyRequestInput | AuditLogCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type DomainUpsertWithoutRequestsInput = {
    update: XOR<DomainUpdateWithoutRequestsInput, DomainUncheckedUpdateWithoutRequestsInput>
    create: XOR<DomainCreateWithoutRequestsInput, DomainUncheckedCreateWithoutRequestsInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutRequestsInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutRequestsInput, DomainUncheckedUpdateWithoutRequestsInput>
  }

  export type DomainUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomains?: SubdomainUpdateManyWithoutDomainNestedInput
    auditLogs?: AuditLogUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomains?: SubdomainUncheckedUpdateManyWithoutDomainNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type SubdomainUpsertWithoutRequestsInput = {
    update: XOR<SubdomainUpdateWithoutRequestsInput, SubdomainUncheckedUpdateWithoutRequestsInput>
    create: XOR<SubdomainCreateWithoutRequestsInput, SubdomainUncheckedCreateWithoutRequestsInput>
    where?: SubdomainWhereInput
  }

  export type SubdomainUpdateToOneWithWhereWithoutRequestsInput = {
    where?: SubdomainWhereInput
    data: XOR<SubdomainUpdateWithoutRequestsInput, SubdomainUncheckedUpdateWithoutRequestsInput>
  }

  export type SubdomainUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    targetIP?: NullableStringFieldUpdateOperationsInput | string | null
    sslEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutSubdomainsNestedInput
    auditLogs?: AuditLogUpdateManyWithoutSubdomainNestedInput
  }

  export type SubdomainUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    targetIP?: NullableStringFieldUpdateOperationsInput | string | null
    sslEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: StringFieldUpdateOperationsInput | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutSubdomainNestedInput
  }

  export type ApprovalUpsertWithWhereUniqueWithoutRequestInput = {
    where: ApprovalWhereUniqueInput
    update: XOR<ApprovalUpdateWithoutRequestInput, ApprovalUncheckedUpdateWithoutRequestInput>
    create: XOR<ApprovalCreateWithoutRequestInput, ApprovalUncheckedCreateWithoutRequestInput>
  }

  export type ApprovalUpdateWithWhereUniqueWithoutRequestInput = {
    where: ApprovalWhereUniqueInput
    data: XOR<ApprovalUpdateWithoutRequestInput, ApprovalUncheckedUpdateWithoutRequestInput>
  }

  export type ApprovalUpdateManyWithWhereWithoutRequestInput = {
    where: ApprovalScalarWhereInput
    data: XOR<ApprovalUpdateManyMutationInput, ApprovalUncheckedUpdateManyWithoutRequestInput>
  }

  export type ApprovalScalarWhereInput = {
    AND?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    OR?: ApprovalScalarWhereInput[]
    NOT?: ApprovalScalarWhereInput | ApprovalScalarWhereInput[]
    id?: StringFilter<"Approval"> | string
    requestId?: StringFilter<"Approval"> | string
    approvedBy?: StringFilter<"Approval"> | string
    status?: StringFilter<"Approval"> | string
    comment?: StringNullableFilter<"Approval"> | string | null
    createdAt?: DateTimeFilter<"Approval"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutRequestInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutRequestInput, CommentUncheckedUpdateWithoutRequestInput>
    create: XOR<CommentCreateWithoutRequestInput, CommentUncheckedCreateWithoutRequestInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutRequestInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutRequestInput, CommentUncheckedUpdateWithoutRequestInput>
  }

  export type CommentUpdateManyWithWhereWithoutRequestInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutRequestInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    requestId?: StringFilter<"Comment"> | string
    author?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutRequestInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutRequestInput, AuditLogUncheckedUpdateWithoutRequestInput>
    create: XOR<AuditLogCreateWithoutRequestInput, AuditLogUncheckedCreateWithoutRequestInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutRequestInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutRequestInput, AuditLogUncheckedUpdateWithoutRequestInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutRequestInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutRequestInput>
  }

  export type DomainRequestCreateWithoutApprovalsInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domain?: DomainCreateNestedOneWithoutRequestsInput
    subdomain?: SubdomainCreateNestedOneWithoutRequestsInput
    comments?: CommentCreateNestedManyWithoutRequestInput
    auditLogs?: AuditLogCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestUncheckedCreateWithoutApprovalsInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domainId?: string | null
    subdomainId?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutRequestInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestCreateOrConnectWithoutApprovalsInput = {
    where: DomainRequestWhereUniqueInput
    create: XOR<DomainRequestCreateWithoutApprovalsInput, DomainRequestUncheckedCreateWithoutApprovalsInput>
  }

  export type DomainRequestUpsertWithoutApprovalsInput = {
    update: XOR<DomainRequestUpdateWithoutApprovalsInput, DomainRequestUncheckedUpdateWithoutApprovalsInput>
    create: XOR<DomainRequestCreateWithoutApprovalsInput, DomainRequestUncheckedCreateWithoutApprovalsInput>
    where?: DomainRequestWhereInput
  }

  export type DomainRequestUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: DomainRequestWhereInput
    data: XOR<DomainRequestUpdateWithoutApprovalsInput, DomainRequestUncheckedUpdateWithoutApprovalsInput>
  }

  export type DomainRequestUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: DomainUpdateOneWithoutRequestsNestedInput
    subdomain?: SubdomainUpdateOneWithoutRequestsNestedInput
    comments?: CommentUpdateManyWithoutRequestNestedInput
    auditLogs?: AuditLogUpdateManyWithoutRequestNestedInput
  }

  export type DomainRequestUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutRequestNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type DomainRequestCreateWithoutCommentsInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domain?: DomainCreateNestedOneWithoutRequestsInput
    subdomain?: SubdomainCreateNestedOneWithoutRequestsInput
    approvals?: ApprovalCreateNestedManyWithoutRequestInput
    auditLogs?: AuditLogCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestUncheckedCreateWithoutCommentsInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domainId?: string | null
    subdomainId?: string | null
    approvals?: ApprovalUncheckedCreateNestedManyWithoutRequestInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestCreateOrConnectWithoutCommentsInput = {
    where: DomainRequestWhereUniqueInput
    create: XOR<DomainRequestCreateWithoutCommentsInput, DomainRequestUncheckedCreateWithoutCommentsInput>
  }

  export type DomainRequestUpsertWithoutCommentsInput = {
    update: XOR<DomainRequestUpdateWithoutCommentsInput, DomainRequestUncheckedUpdateWithoutCommentsInput>
    create: XOR<DomainRequestCreateWithoutCommentsInput, DomainRequestUncheckedCreateWithoutCommentsInput>
    where?: DomainRequestWhereInput
  }

  export type DomainRequestUpdateToOneWithWhereWithoutCommentsInput = {
    where?: DomainRequestWhereInput
    data: XOR<DomainRequestUpdateWithoutCommentsInput, DomainRequestUncheckedUpdateWithoutCommentsInput>
  }

  export type DomainRequestUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: DomainUpdateOneWithoutRequestsNestedInput
    subdomain?: SubdomainUpdateOneWithoutRequestsNestedInput
    approvals?: ApprovalUpdateManyWithoutRequestNestedInput
    auditLogs?: AuditLogUpdateManyWithoutRequestNestedInput
  }

  export type DomainRequestUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
    approvals?: ApprovalUncheckedUpdateManyWithoutRequestNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type DomainCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    environment?: string
    owner: string
    team?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomains?: SubdomainCreateNestedManyWithoutDomainInput
    requests?: DomainRequestCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    environment?: string
    owner: string
    team?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomains?: SubdomainUncheckedCreateNestedManyWithoutDomainInput
    requests?: DomainRequestUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutAuditLogsInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutAuditLogsInput, DomainUncheckedCreateWithoutAuditLogsInput>
  }

  export type SubdomainCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    fullDomain: string
    description?: string | null
    purpose?: string
    status?: string
    environment?: string
    targetIP?: string | null
    sslEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: DomainCreateNestedOneWithoutSubdomainsInput
    requests?: DomainRequestCreateNestedManyWithoutSubdomainInput
  }

  export type SubdomainUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    fullDomain: string
    description?: string | null
    purpose?: string
    status?: string
    environment?: string
    targetIP?: string | null
    sslEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    domainId: string
    requests?: DomainRequestUncheckedCreateNestedManyWithoutSubdomainInput
  }

  export type SubdomainCreateOrConnectWithoutAuditLogsInput = {
    where: SubdomainWhereUniqueInput
    create: XOR<SubdomainCreateWithoutAuditLogsInput, SubdomainUncheckedCreateWithoutAuditLogsInput>
  }

  export type DomainRequestCreateWithoutAuditLogsInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domain?: DomainCreateNestedOneWithoutRequestsInput
    subdomain?: SubdomainCreateNestedOneWithoutRequestsInput
    approvals?: ApprovalCreateNestedManyWithoutRequestInput
    comments?: CommentCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domainId?: string | null
    subdomainId?: string | null
    approvals?: ApprovalUncheckedCreateNestedManyWithoutRequestInput
    comments?: CommentUncheckedCreateNestedManyWithoutRequestInput
  }

  export type DomainRequestCreateOrConnectWithoutAuditLogsInput = {
    where: DomainRequestWhereUniqueInput
    create: XOR<DomainRequestCreateWithoutAuditLogsInput, DomainRequestUncheckedCreateWithoutAuditLogsInput>
  }

  export type DomainUpsertWithoutAuditLogsInput = {
    update: XOR<DomainUpdateWithoutAuditLogsInput, DomainUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<DomainCreateWithoutAuditLogsInput, DomainUncheckedCreateWithoutAuditLogsInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutAuditLogsInput, DomainUncheckedUpdateWithoutAuditLogsInput>
  }

  export type DomainUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomains?: SubdomainUpdateManyWithoutDomainNestedInput
    requests?: DomainRequestUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    team?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomains?: SubdomainUncheckedUpdateManyWithoutDomainNestedInput
    requests?: DomainRequestUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type SubdomainUpsertWithoutAuditLogsInput = {
    update: XOR<SubdomainUpdateWithoutAuditLogsInput, SubdomainUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<SubdomainCreateWithoutAuditLogsInput, SubdomainUncheckedCreateWithoutAuditLogsInput>
    where?: SubdomainWhereInput
  }

  export type SubdomainUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: SubdomainWhereInput
    data: XOR<SubdomainUpdateWithoutAuditLogsInput, SubdomainUncheckedUpdateWithoutAuditLogsInput>
  }

  export type SubdomainUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    targetIP?: NullableStringFieldUpdateOperationsInput | string | null
    sslEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneRequiredWithoutSubdomainsNestedInput
    requests?: DomainRequestUpdateManyWithoutSubdomainNestedInput
  }

  export type SubdomainUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    targetIP?: NullableStringFieldUpdateOperationsInput | string | null
    sslEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: StringFieldUpdateOperationsInput | string
    requests?: DomainRequestUncheckedUpdateManyWithoutSubdomainNestedInput
  }

  export type DomainRequestUpsertWithoutAuditLogsInput = {
    update: XOR<DomainRequestUpdateWithoutAuditLogsInput, DomainRequestUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<DomainRequestCreateWithoutAuditLogsInput, DomainRequestUncheckedCreateWithoutAuditLogsInput>
    where?: DomainRequestWhereInput
  }

  export type DomainRequestUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: DomainRequestWhereInput
    data: XOR<DomainRequestUpdateWithoutAuditLogsInput, DomainRequestUncheckedUpdateWithoutAuditLogsInput>
  }

  export type DomainRequestUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: DomainUpdateOneWithoutRequestsNestedInput
    subdomain?: SubdomainUpdateOneWithoutRequestsNestedInput
    approvals?: ApprovalUpdateManyWithoutRequestNestedInput
    comments?: CommentUpdateManyWithoutRequestNestedInput
  }

  export type DomainRequestUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
    approvals?: ApprovalUncheckedUpdateManyWithoutRequestNestedInput
    comments?: CommentUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type SubdomainCreateManyDomainInput = {
    id?: string
    name: string
    fullDomain: string
    description?: string | null
    purpose?: string
    status?: string
    environment?: string
    targetIP?: string | null
    sslEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainRequestCreateManyDomainInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    subdomainId?: string | null
  }

  export type AuditLogCreateManyDomainInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    subdomainId?: string | null
    requestId?: string | null
  }

  export type SubdomainUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    targetIP?: NullableStringFieldUpdateOperationsInput | string | null
    sslEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: DomainRequestUpdateManyWithoutSubdomainNestedInput
    auditLogs?: AuditLogUpdateManyWithoutSubdomainNestedInput
  }

  export type SubdomainUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    targetIP?: NullableStringFieldUpdateOperationsInput | string | null
    sslEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: DomainRequestUncheckedUpdateManyWithoutSubdomainNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutSubdomainNestedInput
  }

  export type SubdomainUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullDomain?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    purpose?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    targetIP?: NullableStringFieldUpdateOperationsInput | string | null
    sslEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainRequestUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    subdomain?: SubdomainUpdateOneWithoutRequestsNestedInput
    approvals?: ApprovalUpdateManyWithoutRequestNestedInput
    comments?: CommentUpdateManyWithoutRequestNestedInput
    auditLogs?: AuditLogUpdateManyWithoutRequestNestedInput
  }

  export type DomainRequestUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
    approvals?: ApprovalUncheckedUpdateManyWithoutRequestNestedInput
    comments?: CommentUncheckedUpdateManyWithoutRequestNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type DomainRequestUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: SubdomainUpdateOneWithoutAuditLogsNestedInput
    request?: DomainRequestUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DomainRequestCreateManySubdomainInput = {
    id?: string
    type: string
    status?: string
    priority?: string
    title: string
    description: string
    justification?: string | null
    requestedBy: string
    requestedAt?: Date | string
    updatedAt?: Date | string
    proposedName?: string | null
    proposedEnvironment?: string | null
    proposedPurpose?: string | null
    proposedDescription?: string | null
    currentValue?: string | null
    proposedValue?: string | null
    domainId?: string | null
  }

  export type AuditLogCreateManySubdomainInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    domainId?: string | null
    requestId?: string | null
  }

  export type DomainRequestUpdateWithoutSubdomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domain?: DomainUpdateOneWithoutRequestsNestedInput
    approvals?: ApprovalUpdateManyWithoutRequestNestedInput
    comments?: CommentUpdateManyWithoutRequestNestedInput
    auditLogs?: AuditLogUpdateManyWithoutRequestNestedInput
  }

  export type DomainRequestUncheckedUpdateWithoutSubdomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    approvals?: ApprovalUncheckedUpdateManyWithoutRequestNestedInput
    comments?: CommentUncheckedUpdateManyWithoutRequestNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type DomainRequestUncheckedUpdateManyWithoutSubdomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    justification?: NullableStringFieldUpdateOperationsInput | string | null
    requestedBy?: StringFieldUpdateOperationsInput | string
    requestedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proposedName?: NullableStringFieldUpdateOperationsInput | string | null
    proposedEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    proposedPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    proposedDescription?: NullableStringFieldUpdateOperationsInput | string | null
    currentValue?: NullableStringFieldUpdateOperationsInput | string | null
    proposedValue?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUpdateWithoutSubdomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneWithoutAuditLogsNestedInput
    request?: DomainRequestUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutSubdomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateManyWithoutSubdomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    requestId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApprovalCreateManyRequestInput = {
    id?: string
    approvedBy: string
    status: string
    comment?: string | null
    createdAt?: Date | string
  }

  export type CommentCreateManyRequestInput = {
    id?: string
    author: string
    content: string
    createdAt?: Date | string
  }

  export type AuditLogCreateManyRequestInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    performedBy: string
    details?: string | null
    createdAt?: Date | string
    domainId?: string | null
    subdomainId?: string | null
  }

  export type ApprovalUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainUpdateOneWithoutAuditLogsNestedInput
    subdomain?: SubdomainUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateManyWithoutRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    subdomainId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DomainCountOutputTypeDefaultArgs instead
     */
    export type DomainCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DomainCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubdomainCountOutputTypeDefaultArgs instead
     */
    export type SubdomainCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubdomainCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DomainRequestCountOutputTypeDefaultArgs instead
     */
    export type DomainRequestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DomainRequestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DomainDefaultArgs instead
     */
    export type DomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DomainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubdomainDefaultArgs instead
     */
    export type SubdomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubdomainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DomainRequestDefaultArgs instead
     */
    export type DomainRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DomainRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApprovalDefaultArgs instead
     */
    export type ApprovalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApprovalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}