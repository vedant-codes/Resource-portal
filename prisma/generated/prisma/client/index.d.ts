
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model ResourceTag
 * 
 */
export type ResourceTag = $Result.DefaultSelection<Prisma.$ResourceTagPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model BookTransaction
 * 
 */
export type BookTransaction = $Result.DefaultSelection<Prisma.$BookTransactionPayload>
/**
 * Model Forum
 * 
 */
export type Forum = $Result.DefaultSelection<Prisma.$ForumPayload>
/**
 * Model Discussion
 * 
 */
export type Discussion = $Result.DefaultSelection<Prisma.$DiscussionPayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model Flag
 * 
 */
export type Flag = $Result.DefaultSelection<Prisma.$FlagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resourceTag`: Exposes CRUD operations for the **ResourceTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResourceTags
    * const resourceTags = await prisma.resourceTag.findMany()
    * ```
    */
  get resourceTag(): Prisma.ResourceTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookTransaction`: Exposes CRUD operations for the **BookTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookTransactions
    * const bookTransactions = await prisma.bookTransaction.findMany()
    * ```
    */
  get bookTransaction(): Prisma.BookTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forum`: Exposes CRUD operations for the **Forum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forums
    * const forums = await prisma.forum.findMany()
    * ```
    */
  get forum(): Prisma.ForumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discussion`: Exposes CRUD operations for the **Discussion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discussions
    * const discussions = await prisma.discussion.findMany()
    * ```
    */
  get discussion(): Prisma.DiscussionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flag`: Exposes CRUD operations for the **Flag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flags
    * const flags = await prisma.flag.findMany()
    * ```
    */
  get flag(): Prisma.FlagDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Course: 'Course',
    Resource: 'Resource',
    ResourceTag: 'ResourceTag',
    Book: 'Book',
    BookTransaction: 'BookTransaction',
    Forum: 'Forum',
    Discussion: 'Discussion',
    Request: 'Request',
    Rating: 'Rating',
    Flag: 'Flag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "course" | "resource" | "resourceTag" | "book" | "bookTransaction" | "forum" | "discussion" | "request" | "rating" | "flag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      ResourceTag: {
        payload: Prisma.$ResourceTagPayload<ExtArgs>
        fields: Prisma.ResourceTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceTagPayload>
          }
          findFirst: {
            args: Prisma.ResourceTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceTagPayload>
          }
          findMany: {
            args: Prisma.ResourceTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceTagPayload>[]
          }
          create: {
            args: Prisma.ResourceTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceTagPayload>
          }
          createMany: {
            args: Prisma.ResourceTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceTagPayload>[]
          }
          delete: {
            args: Prisma.ResourceTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceTagPayload>
          }
          update: {
            args: Prisma.ResourceTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceTagPayload>
          }
          deleteMany: {
            args: Prisma.ResourceTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceTagPayload>[]
          }
          upsert: {
            args: Prisma.ResourceTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourceTagPayload>
          }
          aggregate: {
            args: Prisma.ResourceTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResourceTag>
          }
          groupBy: {
            args: Prisma.ResourceTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceTagCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceTagCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      BookTransaction: {
        payload: Prisma.$BookTransactionPayload<ExtArgs>
        fields: Prisma.BookTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTransactionPayload>
          }
          findFirst: {
            args: Prisma.BookTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTransactionPayload>
          }
          findMany: {
            args: Prisma.BookTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTransactionPayload>[]
          }
          create: {
            args: Prisma.BookTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTransactionPayload>
          }
          createMany: {
            args: Prisma.BookTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTransactionPayload>[]
          }
          delete: {
            args: Prisma.BookTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTransactionPayload>
          }
          update: {
            args: Prisma.BookTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTransactionPayload>
          }
          deleteMany: {
            args: Prisma.BookTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTransactionPayload>[]
          }
          upsert: {
            args: Prisma.BookTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookTransactionPayload>
          }
          aggregate: {
            args: Prisma.BookTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookTransaction>
          }
          groupBy: {
            args: Prisma.BookTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<BookTransactionCountAggregateOutputType> | number
          }
        }
      }
      Forum: {
        payload: Prisma.$ForumPayload<ExtArgs>
        fields: Prisma.ForumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          findFirst: {
            args: Prisma.ForumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          findMany: {
            args: Prisma.ForumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>[]
          }
          create: {
            args: Prisma.ForumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          createMany: {
            args: Prisma.ForumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>[]
          }
          delete: {
            args: Prisma.ForumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          update: {
            args: Prisma.ForumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          deleteMany: {
            args: Prisma.ForumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>[]
          }
          upsert: {
            args: Prisma.ForumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          aggregate: {
            args: Prisma.ForumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForum>
          }
          groupBy: {
            args: Prisma.ForumGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCountAggregateOutputType> | number
          }
        }
      }
      Discussion: {
        payload: Prisma.$DiscussionPayload<ExtArgs>
        fields: Prisma.DiscussionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscussionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscussionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          findFirst: {
            args: Prisma.DiscussionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscussionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          findMany: {
            args: Prisma.DiscussionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          create: {
            args: Prisma.DiscussionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          createMany: {
            args: Prisma.DiscussionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscussionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          delete: {
            args: Prisma.DiscussionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          update: {
            args: Prisma.DiscussionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          deleteMany: {
            args: Prisma.DiscussionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscussionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscussionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          upsert: {
            args: Prisma.DiscussionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          aggregate: {
            args: Prisma.DiscussionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscussion>
          }
          groupBy: {
            args: Prisma.DiscussionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscussionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscussionCountArgs<ExtArgs>
            result: $Utils.Optional<DiscussionCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      Flag: {
        payload: Prisma.$FlagPayload<ExtArgs>
        fields: Prisma.FlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          findFirst: {
            args: Prisma.FlagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          findMany: {
            args: Prisma.FlagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>[]
          }
          create: {
            args: Prisma.FlagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          createMany: {
            args: Prisma.FlagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>[]
          }
          delete: {
            args: Prisma.FlagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          update: {
            args: Prisma.FlagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          deleteMany: {
            args: Prisma.FlagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>[]
          }
          upsert: {
            args: Prisma.FlagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlagPayload>
          }
          aggregate: {
            args: Prisma.FlagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlag>
          }
          groupBy: {
            args: Prisma.FlagGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlagCountArgs<ExtArgs>
            result: $Utils.Optional<FlagCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    course?: CourseOmit
    resource?: ResourceOmit
    resourceTag?: ResourceTagOmit
    book?: BookOmit
    bookTransaction?: BookTransactionOmit
    forum?: ForumOmit
    discussion?: DiscussionOmit
    request?: RequestOmit
    rating?: RatingOmit
    flag?: FlagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    resources: number
    books: number
    transactions: number
    forums: number
    discussions: number
    requests: number
    ratings: number
    flags: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | UserCountOutputTypeCountResourcesArgs
    books?: boolean | UserCountOutputTypeCountBooksArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    forums?: boolean | UserCountOutputTypeCountForumsArgs
    discussions?: boolean | UserCountOutputTypeCountDiscussionsArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
    flags?: boolean | UserCountOutputTypeCountFlagsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountForumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDiscussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    resources: number
    forums: number
    requests: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | CourseCountOutputTypeCountResourcesArgs
    forums?: boolean | CourseCountOutputTypeCountForumsArgs
    requests?: boolean | CourseCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountForumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }


  /**
   * Count Type ResourceCountOutputType
   */

  export type ResourceCountOutputType = {
    tags: number
    ratings: number
    flags: number
  }

  export type ResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | ResourceCountOutputTypeCountTagsArgs
    ratings?: boolean | ResourceCountOutputTypeCountRatingsArgs
    flags?: boolean | ResourceCountOutputTypeCountFlagsArgs
  }

  // Custom InputTypes
  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCountOutputType
     */
    select?: ResourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceTagWhereInput
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    transactions: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | BookCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTransactionWhereInput
  }


  /**
   * Count Type ForumCountOutputType
   */

  export type ForumCountOutputType = {
    discussions: number
  }

  export type ForumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discussions?: boolean | ForumCountOutputTypeCountDiscussionsArgs
  }

  // Custom InputTypes
  /**
   * ForumCountOutputType without action
   */
  export type ForumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCountOutputType
     */
    select?: ForumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumCountOutputType without action
   */
  export type ForumCountOutputTypeCountDiscussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    UserID: number | null
    Year: number | null
    ContributionScore: number | null
  }

  export type UserSumAggregateOutputType = {
    UserID: number | null
    Year: number | null
    ContributionScore: number | null
  }

  export type UserMinAggregateOutputType = {
    UserID: number | null
    Name: string | null
    Email: string | null
    PasswordHash: string | null
    Role: string | null
    Year: number | null
    Department: string | null
    ProfilePicture: string | null
    Bio: string | null
    JoinedDate: Date | null
    LastLogin: Date | null
    ContributionScore: number | null
    Status: string | null
  }

  export type UserMaxAggregateOutputType = {
    UserID: number | null
    Name: string | null
    Email: string | null
    PasswordHash: string | null
    Role: string | null
    Year: number | null
    Department: string | null
    ProfilePicture: string | null
    Bio: string | null
    JoinedDate: Date | null
    LastLogin: Date | null
    ContributionScore: number | null
    Status: string | null
  }

  export type UserCountAggregateOutputType = {
    UserID: number
    Name: number
    Email: number
    PasswordHash: number
    Role: number
    Year: number
    Department: number
    ProfilePicture: number
    Bio: number
    JoinedDate: number
    LastLogin: number
    ContributionScore: number
    Status: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    UserID?: true
    Year?: true
    ContributionScore?: true
  }

  export type UserSumAggregateInputType = {
    UserID?: true
    Year?: true
    ContributionScore?: true
  }

  export type UserMinAggregateInputType = {
    UserID?: true
    Name?: true
    Email?: true
    PasswordHash?: true
    Role?: true
    Year?: true
    Department?: true
    ProfilePicture?: true
    Bio?: true
    JoinedDate?: true
    LastLogin?: true
    ContributionScore?: true
    Status?: true
  }

  export type UserMaxAggregateInputType = {
    UserID?: true
    Name?: true
    Email?: true
    PasswordHash?: true
    Role?: true
    Year?: true
    Department?: true
    ProfilePicture?: true
    Bio?: true
    JoinedDate?: true
    LastLogin?: true
    ContributionScore?: true
    Status?: true
  }

  export type UserCountAggregateInputType = {
    UserID?: true
    Name?: true
    Email?: true
    PasswordHash?: true
    Role?: true
    Year?: true
    Department?: true
    ProfilePicture?: true
    Bio?: true
    JoinedDate?: true
    LastLogin?: true
    ContributionScore?: true
    Status?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    UserID: number
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year: number | null
    Department: string | null
    ProfilePicture: string | null
    Bio: string | null
    JoinedDate: Date
    LastLogin: Date | null
    ContributionScore: number
    Status: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    Name?: boolean
    Email?: boolean
    PasswordHash?: boolean
    Role?: boolean
    Year?: boolean
    Department?: boolean
    ProfilePicture?: boolean
    Bio?: boolean
    JoinedDate?: boolean
    LastLogin?: boolean
    ContributionScore?: boolean
    Status?: boolean
    resources?: boolean | User$resourcesArgs<ExtArgs>
    books?: boolean | User$booksArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    forums?: boolean | User$forumsArgs<ExtArgs>
    discussions?: boolean | User$discussionsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    flags?: boolean | User$flagsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    Name?: boolean
    Email?: boolean
    PasswordHash?: boolean
    Role?: boolean
    Year?: boolean
    Department?: boolean
    ProfilePicture?: boolean
    Bio?: boolean
    JoinedDate?: boolean
    LastLogin?: boolean
    ContributionScore?: boolean
    Status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    Name?: boolean
    Email?: boolean
    PasswordHash?: boolean
    Role?: boolean
    Year?: boolean
    Department?: boolean
    ProfilePicture?: boolean
    Bio?: boolean
    JoinedDate?: boolean
    LastLogin?: boolean
    ContributionScore?: boolean
    Status?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    UserID?: boolean
    Name?: boolean
    Email?: boolean
    PasswordHash?: boolean
    Role?: boolean
    Year?: boolean
    Department?: boolean
    ProfilePicture?: boolean
    Bio?: boolean
    JoinedDate?: boolean
    LastLogin?: boolean
    ContributionScore?: boolean
    Status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserID" | "Name" | "Email" | "PasswordHash" | "Role" | "Year" | "Department" | "ProfilePicture" | "Bio" | "JoinedDate" | "LastLogin" | "ContributionScore" | "Status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | User$resourcesArgs<ExtArgs>
    books?: boolean | User$booksArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    forums?: boolean | User$forumsArgs<ExtArgs>
    discussions?: boolean | User$discussionsArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    flags?: boolean | User$flagsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resources: Prisma.$ResourcePayload<ExtArgs>[]
      books: Prisma.$BookPayload<ExtArgs>[]
      transactions: Prisma.$BookTransactionPayload<ExtArgs>[]
      forums: Prisma.$ForumPayload<ExtArgs>[]
      discussions: Prisma.$DiscussionPayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      flags: Prisma.$FlagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: number
      Name: string
      Email: string
      PasswordHash: string
      Role: string
      Year: number | null
      Department: string | null
      ProfilePicture: string | null
      Bio: string | null
      JoinedDate: Date
      LastLogin: Date | null
      ContributionScore: number
      Status: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const userWithUserIDOnly = await prisma.user.findMany({ select: { UserID: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `UserID`
     * const userWithUserIDOnly = await prisma.user.createManyAndReturn({
     *   select: { UserID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `UserID`
     * const userWithUserIDOnly = await prisma.user.updateManyAndReturn({
     *   select: { UserID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resources<T extends User$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, User$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    books<T extends User$booksArgs<ExtArgs> = {}>(args?: Subset<T, User$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forums<T extends User$forumsArgs<ExtArgs> = {}>(args?: Subset<T, User$forumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    discussions<T extends User$discussionsArgs<ExtArgs> = {}>(args?: Subset<T, User$discussionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flags<T extends User$flagsArgs<ExtArgs> = {}>(args?: Subset<T, User$flagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly UserID: FieldRef<"User", 'Int'>
    readonly Name: FieldRef<"User", 'String'>
    readonly Email: FieldRef<"User", 'String'>
    readonly PasswordHash: FieldRef<"User", 'String'>
    readonly Role: FieldRef<"User", 'String'>
    readonly Year: FieldRef<"User", 'Int'>
    readonly Department: FieldRef<"User", 'String'>
    readonly ProfilePicture: FieldRef<"User", 'String'>
    readonly Bio: FieldRef<"User", 'String'>
    readonly JoinedDate: FieldRef<"User", 'DateTime'>
    readonly LastLogin: FieldRef<"User", 'DateTime'>
    readonly ContributionScore: FieldRef<"User", 'Int'>
    readonly Status: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.resources
   */
  export type User$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * User.books
   */
  export type User$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
    where?: BookTransactionWhereInput
    orderBy?: BookTransactionOrderByWithRelationInput | BookTransactionOrderByWithRelationInput[]
    cursor?: BookTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookTransactionScalarFieldEnum | BookTransactionScalarFieldEnum[]
  }

  /**
   * User.forums
   */
  export type User$forumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    where?: ForumWhereInput
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    cursor?: ForumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * User.discussions
   */
  export type User$discussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    cursor?: DiscussionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.ratings
   */
  export type User$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.flags
   */
  export type User$flagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    cursor?: FlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    CourseID: number | null
    Year: number | null
    Semester: number | null
  }

  export type CourseSumAggregateOutputType = {
    CourseID: number | null
    Year: number | null
    Semester: number | null
  }

  export type CourseMinAggregateOutputType = {
    CourseID: number | null
    CourseName: string | null
    CourseCode: string | null
    Department: string | null
    Year: number | null
    Semester: number | null
    Description: string | null
    Instructor: string | null
    Status: string | null
  }

  export type CourseMaxAggregateOutputType = {
    CourseID: number | null
    CourseName: string | null
    CourseCode: string | null
    Department: string | null
    Year: number | null
    Semester: number | null
    Description: string | null
    Instructor: string | null
    Status: string | null
  }

  export type CourseCountAggregateOutputType = {
    CourseID: number
    CourseName: number
    CourseCode: number
    Department: number
    Year: number
    Semester: number
    Description: number
    Instructor: number
    Status: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    CourseID?: true
    Year?: true
    Semester?: true
  }

  export type CourseSumAggregateInputType = {
    CourseID?: true
    Year?: true
    Semester?: true
  }

  export type CourseMinAggregateInputType = {
    CourseID?: true
    CourseName?: true
    CourseCode?: true
    Department?: true
    Year?: true
    Semester?: true
    Description?: true
    Instructor?: true
    Status?: true
  }

  export type CourseMaxAggregateInputType = {
    CourseID?: true
    CourseName?: true
    CourseCode?: true
    Department?: true
    Year?: true
    Semester?: true
    Description?: true
    Instructor?: true
    Status?: true
  }

  export type CourseCountAggregateInputType = {
    CourseID?: true
    CourseName?: true
    CourseCode?: true
    Department?: true
    Year?: true
    Semester?: true
    Description?: true
    Instructor?: true
    Status?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    CourseID: number
    CourseName: string
    CourseCode: string
    Department: string | null
    Year: number | null
    Semester: number | null
    Description: string | null
    Instructor: string | null
    Status: string | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CourseID?: boolean
    CourseName?: boolean
    CourseCode?: boolean
    Department?: boolean
    Year?: boolean
    Semester?: boolean
    Description?: boolean
    Instructor?: boolean
    Status?: boolean
    resources?: boolean | Course$resourcesArgs<ExtArgs>
    forums?: boolean | Course$forumsArgs<ExtArgs>
    requests?: boolean | Course$requestsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CourseID?: boolean
    CourseName?: boolean
    CourseCode?: boolean
    Department?: boolean
    Year?: boolean
    Semester?: boolean
    Description?: boolean
    Instructor?: boolean
    Status?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CourseID?: boolean
    CourseName?: boolean
    CourseCode?: boolean
    Department?: boolean
    Year?: boolean
    Semester?: boolean
    Description?: boolean
    Instructor?: boolean
    Status?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    CourseID?: boolean
    CourseName?: boolean
    CourseCode?: boolean
    Department?: boolean
    Year?: boolean
    Semester?: boolean
    Description?: boolean
    Instructor?: boolean
    Status?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CourseID" | "CourseName" | "CourseCode" | "Department" | "Year" | "Semester" | "Description" | "Instructor" | "Status", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | Course$resourcesArgs<ExtArgs>
    forums?: boolean | Course$forumsArgs<ExtArgs>
    requests?: boolean | Course$requestsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      resources: Prisma.$ResourcePayload<ExtArgs>[]
      forums: Prisma.$ForumPayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CourseID: number
      CourseName: string
      CourseCode: string
      Department: string | null
      Year: number | null
      Semester: number | null
      Description: string | null
      Instructor: string | null
      Status: string | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `CourseID`
     * const courseWithCourseIDOnly = await prisma.course.findMany({ select: { CourseID: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `CourseID`
     * const courseWithCourseIDOnly = await prisma.course.createManyAndReturn({
     *   select: { CourseID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `CourseID`
     * const courseWithCourseIDOnly = await prisma.course.updateManyAndReturn({
     *   select: { CourseID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resources<T extends Course$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, Course$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    forums<T extends Course$forumsArgs<ExtArgs> = {}>(args?: Subset<T, Course$forumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends Course$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Course$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly CourseID: FieldRef<"Course", 'Int'>
    readonly CourseName: FieldRef<"Course", 'String'>
    readonly CourseCode: FieldRef<"Course", 'String'>
    readonly Department: FieldRef<"Course", 'String'>
    readonly Year: FieldRef<"Course", 'Int'>
    readonly Semester: FieldRef<"Course", 'Int'>
    readonly Description: FieldRef<"Course", 'String'>
    readonly Instructor: FieldRef<"Course", 'String'>
    readonly Status: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.resources
   */
  export type Course$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    cursor?: ResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Course.forums
   */
  export type Course$forumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    where?: ForumWhereInput
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    cursor?: ForumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Course.requests
   */
  export type Course$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceAvgAggregateOutputType = {
    ResourceID: number | null
    FileSize: number | null
    Version: number | null
    DownloadCount: number | null
    UserID: number | null
    CourseID: number | null
  }

  export type ResourceSumAggregateOutputType = {
    ResourceID: number | null
    FileSize: number | null
    Version: number | null
    DownloadCount: number | null
    UserID: number | null
    CourseID: number | null
  }

  export type ResourceMinAggregateOutputType = {
    ResourceID: number | null
    Title: string | null
    Description: string | null
    FilePath: string | null
    FileType: string | null
    FileSize: number | null
    UploadDate: Date | null
    Version: number | null
    DownloadCount: number | null
    Status: string | null
    LastModified: Date | null
    UserID: number | null
    CourseID: number | null
  }

  export type ResourceMaxAggregateOutputType = {
    ResourceID: number | null
    Title: string | null
    Description: string | null
    FilePath: string | null
    FileType: string | null
    FileSize: number | null
    UploadDate: Date | null
    Version: number | null
    DownloadCount: number | null
    Status: string | null
    LastModified: Date | null
    UserID: number | null
    CourseID: number | null
  }

  export type ResourceCountAggregateOutputType = {
    ResourceID: number
    Title: number
    Description: number
    FilePath: number
    FileType: number
    FileSize: number
    UploadDate: number
    Version: number
    DownloadCount: number
    Status: number
    LastModified: number
    UserID: number
    CourseID: number
    _all: number
  }


  export type ResourceAvgAggregateInputType = {
    ResourceID?: true
    FileSize?: true
    Version?: true
    DownloadCount?: true
    UserID?: true
    CourseID?: true
  }

  export type ResourceSumAggregateInputType = {
    ResourceID?: true
    FileSize?: true
    Version?: true
    DownloadCount?: true
    UserID?: true
    CourseID?: true
  }

  export type ResourceMinAggregateInputType = {
    ResourceID?: true
    Title?: true
    Description?: true
    FilePath?: true
    FileType?: true
    FileSize?: true
    UploadDate?: true
    Version?: true
    DownloadCount?: true
    Status?: true
    LastModified?: true
    UserID?: true
    CourseID?: true
  }

  export type ResourceMaxAggregateInputType = {
    ResourceID?: true
    Title?: true
    Description?: true
    FilePath?: true
    FileType?: true
    FileSize?: true
    UploadDate?: true
    Version?: true
    DownloadCount?: true
    Status?: true
    LastModified?: true
    UserID?: true
    CourseID?: true
  }

  export type ResourceCountAggregateInputType = {
    ResourceID?: true
    Title?: true
    Description?: true
    FilePath?: true
    FileType?: true
    FileSize?: true
    UploadDate?: true
    Version?: true
    DownloadCount?: true
    Status?: true
    LastModified?: true
    UserID?: true
    CourseID?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _avg?: ResourceAvgAggregateInputType
    _sum?: ResourceSumAggregateInputType
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    ResourceID: number
    Title: string
    Description: string | null
    FilePath: string
    FileType: string | null
    FileSize: number | null
    UploadDate: Date
    Version: number | null
    DownloadCount: number | null
    Status: string | null
    LastModified: Date | null
    UserID: number
    CourseID: number
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ResourceID?: boolean
    Title?: boolean
    Description?: boolean
    FilePath?: boolean
    FileType?: boolean
    FileSize?: boolean
    UploadDate?: boolean
    Version?: boolean
    DownloadCount?: boolean
    Status?: boolean
    LastModified?: boolean
    UserID?: boolean
    CourseID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tags?: boolean | Resource$tagsArgs<ExtArgs>
    ratings?: boolean | Resource$ratingsArgs<ExtArgs>
    flags?: boolean | Resource$flagsArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ResourceID?: boolean
    Title?: boolean
    Description?: boolean
    FilePath?: boolean
    FileType?: boolean
    FileSize?: boolean
    UploadDate?: boolean
    Version?: boolean
    DownloadCount?: boolean
    Status?: boolean
    LastModified?: boolean
    UserID?: boolean
    CourseID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ResourceID?: boolean
    Title?: boolean
    Description?: boolean
    FilePath?: boolean
    FileType?: boolean
    FileSize?: boolean
    UploadDate?: boolean
    Version?: boolean
    DownloadCount?: boolean
    Status?: boolean
    LastModified?: boolean
    UserID?: boolean
    CourseID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    ResourceID?: boolean
    Title?: boolean
    Description?: boolean
    FilePath?: boolean
    FileType?: boolean
    FileSize?: boolean
    UploadDate?: boolean
    Version?: boolean
    DownloadCount?: boolean
    Status?: boolean
    LastModified?: boolean
    UserID?: boolean
    CourseID?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ResourceID" | "Title" | "Description" | "FilePath" | "FileType" | "FileSize" | "UploadDate" | "Version" | "DownloadCount" | "Status" | "LastModified" | "UserID" | "CourseID", ExtArgs["result"]["resource"]>
  export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    tags?: boolean | Resource$tagsArgs<ExtArgs>
    ratings?: boolean | Resource$ratingsArgs<ExtArgs>
    flags?: boolean | Resource$flagsArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
      tags: Prisma.$ResourceTagPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      flags: Prisma.$FlagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ResourceID: number
      Title: string
      Description: string | null
      FilePath: string
      FileType: string | null
      FileSize: number | null
      UploadDate: Date
      Version: number | null
      DownloadCount: number | null
      Status: string | null
      LastModified: Date | null
      UserID: number
      CourseID: number
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `ResourceID`
     * const resourceWithResourceIDOnly = await prisma.resource.findMany({ select: { ResourceID: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `ResourceID`
     * const resourceWithResourceIDOnly = await prisma.resource.createManyAndReturn({
     *   select: { ResourceID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources and returns the data updated in the database.
     * @param {ResourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resources and only return the `ResourceID`
     * const resourceWithResourceIDOnly = await prisma.resource.updateManyAndReturn({
     *   select: { ResourceID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
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
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Resource$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Resource$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Resource$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Resource$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flags<T extends Resource$flagsArgs<ExtArgs> = {}>(args?: Subset<T, Resource$flagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly ResourceID: FieldRef<"Resource", 'Int'>
    readonly Title: FieldRef<"Resource", 'String'>
    readonly Description: FieldRef<"Resource", 'String'>
    readonly FilePath: FieldRef<"Resource", 'String'>
    readonly FileType: FieldRef<"Resource", 'String'>
    readonly FileSize: FieldRef<"Resource", 'Int'>
    readonly UploadDate: FieldRef<"Resource", 'DateTime'>
    readonly Version: FieldRef<"Resource", 'Int'>
    readonly DownloadCount: FieldRef<"Resource", 'Int'>
    readonly Status: FieldRef<"Resource", 'String'>
    readonly LastModified: FieldRef<"Resource", 'DateTime'>
    readonly UserID: FieldRef<"Resource", 'Int'>
    readonly CourseID: FieldRef<"Resource", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource updateManyAndReturn
   */
  export type ResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource.tags
   */
  export type Resource$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagInclude<ExtArgs> | null
    where?: ResourceTagWhereInput
    orderBy?: ResourceTagOrderByWithRelationInput | ResourceTagOrderByWithRelationInput[]
    cursor?: ResourceTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResourceTagScalarFieldEnum | ResourceTagScalarFieldEnum[]
  }

  /**
   * Resource.ratings
   */
  export type Resource$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Resource.flags
   */
  export type Resource$flagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    cursor?: FlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
  }


  /**
   * Model ResourceTag
   */

  export type AggregateResourceTag = {
    _count: ResourceTagCountAggregateOutputType | null
    _avg: ResourceTagAvgAggregateOutputType | null
    _sum: ResourceTagSumAggregateOutputType | null
    _min: ResourceTagMinAggregateOutputType | null
    _max: ResourceTagMaxAggregateOutputType | null
  }

  export type ResourceTagAvgAggregateOutputType = {
    ResourceID: number | null
  }

  export type ResourceTagSumAggregateOutputType = {
    ResourceID: number | null
  }

  export type ResourceTagMinAggregateOutputType = {
    ResourceID: number | null
    Tag: string | null
  }

  export type ResourceTagMaxAggregateOutputType = {
    ResourceID: number | null
    Tag: string | null
  }

  export type ResourceTagCountAggregateOutputType = {
    ResourceID: number
    Tag: number
    _all: number
  }


  export type ResourceTagAvgAggregateInputType = {
    ResourceID?: true
  }

  export type ResourceTagSumAggregateInputType = {
    ResourceID?: true
  }

  export type ResourceTagMinAggregateInputType = {
    ResourceID?: true
    Tag?: true
  }

  export type ResourceTagMaxAggregateInputType = {
    ResourceID?: true
    Tag?: true
  }

  export type ResourceTagCountAggregateInputType = {
    ResourceID?: true
    Tag?: true
    _all?: true
  }

  export type ResourceTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceTag to aggregate.
     */
    where?: ResourceTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTags to fetch.
     */
    orderBy?: ResourceTagOrderByWithRelationInput | ResourceTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResourceTags
    **/
    _count?: true | ResourceTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceTagMaxAggregateInputType
  }

  export type GetResourceTagAggregateType<T extends ResourceTagAggregateArgs> = {
        [P in keyof T & keyof AggregateResourceTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResourceTag[P]>
      : GetScalarType<T[P], AggregateResourceTag[P]>
  }




  export type ResourceTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceTagWhereInput
    orderBy?: ResourceTagOrderByWithAggregationInput | ResourceTagOrderByWithAggregationInput[]
    by: ResourceTagScalarFieldEnum[] | ResourceTagScalarFieldEnum
    having?: ResourceTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceTagCountAggregateInputType | true
    _avg?: ResourceTagAvgAggregateInputType
    _sum?: ResourceTagSumAggregateInputType
    _min?: ResourceTagMinAggregateInputType
    _max?: ResourceTagMaxAggregateInputType
  }

  export type ResourceTagGroupByOutputType = {
    ResourceID: number
    Tag: string
    _count: ResourceTagCountAggregateOutputType | null
    _avg: ResourceTagAvgAggregateOutputType | null
    _sum: ResourceTagSumAggregateOutputType | null
    _min: ResourceTagMinAggregateOutputType | null
    _max: ResourceTagMaxAggregateOutputType | null
  }

  type GetResourceTagGroupByPayload<T extends ResourceTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceTagGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceTagGroupByOutputType[P]>
        }
      >
    >


  export type ResourceTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ResourceID?: boolean
    Tag?: boolean
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceTag"]>

  export type ResourceTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ResourceID?: boolean
    Tag?: boolean
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceTag"]>

  export type ResourceTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ResourceID?: boolean
    Tag?: boolean
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resourceTag"]>

  export type ResourceTagSelectScalar = {
    ResourceID?: boolean
    Tag?: boolean
  }

  export type ResourceTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ResourceID" | "Tag", ExtArgs["result"]["resourceTag"]>
  export type ResourceTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type ResourceTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type ResourceTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }

  export type $ResourceTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResourceTag"
    objects: {
      resource: Prisma.$ResourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ResourceID: number
      Tag: string
    }, ExtArgs["result"]["resourceTag"]>
    composites: {}
  }

  type ResourceTagGetPayload<S extends boolean | null | undefined | ResourceTagDefaultArgs> = $Result.GetResult<Prisma.$ResourceTagPayload, S>

  type ResourceTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceTagCountAggregateInputType | true
    }

  export interface ResourceTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResourceTag'], meta: { name: 'ResourceTag' } }
    /**
     * Find zero or one ResourceTag that matches the filter.
     * @param {ResourceTagFindUniqueArgs} args - Arguments to find a ResourceTag
     * @example
     * // Get one ResourceTag
     * const resourceTag = await prisma.resourceTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceTagFindUniqueArgs>(args: SelectSubset<T, ResourceTagFindUniqueArgs<ExtArgs>>): Prisma__ResourceTagClient<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResourceTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceTagFindUniqueOrThrowArgs} args - Arguments to find a ResourceTag
     * @example
     * // Get one ResourceTag
     * const resourceTag = await prisma.resourceTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceTagFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceTagClient<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResourceTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTagFindFirstArgs} args - Arguments to find a ResourceTag
     * @example
     * // Get one ResourceTag
     * const resourceTag = await prisma.resourceTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceTagFindFirstArgs>(args?: SelectSubset<T, ResourceTagFindFirstArgs<ExtArgs>>): Prisma__ResourceTagClient<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResourceTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTagFindFirstOrThrowArgs} args - Arguments to find a ResourceTag
     * @example
     * // Get one ResourceTag
     * const resourceTag = await prisma.resourceTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceTagFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceTagClient<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResourceTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResourceTags
     * const resourceTags = await prisma.resourceTag.findMany()
     * 
     * // Get first 10 ResourceTags
     * const resourceTags = await prisma.resourceTag.findMany({ take: 10 })
     * 
     * // Only select the `ResourceID`
     * const resourceTagWithResourceIDOnly = await prisma.resourceTag.findMany({ select: { ResourceID: true } })
     * 
     */
    findMany<T extends ResourceTagFindManyArgs>(args?: SelectSubset<T, ResourceTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResourceTag.
     * @param {ResourceTagCreateArgs} args - Arguments to create a ResourceTag.
     * @example
     * // Create one ResourceTag
     * const ResourceTag = await prisma.resourceTag.create({
     *   data: {
     *     // ... data to create a ResourceTag
     *   }
     * })
     * 
     */
    create<T extends ResourceTagCreateArgs>(args: SelectSubset<T, ResourceTagCreateArgs<ExtArgs>>): Prisma__ResourceTagClient<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResourceTags.
     * @param {ResourceTagCreateManyArgs} args - Arguments to create many ResourceTags.
     * @example
     * // Create many ResourceTags
     * const resourceTag = await prisma.resourceTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceTagCreateManyArgs>(args?: SelectSubset<T, ResourceTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResourceTags and returns the data saved in the database.
     * @param {ResourceTagCreateManyAndReturnArgs} args - Arguments to create many ResourceTags.
     * @example
     * // Create many ResourceTags
     * const resourceTag = await prisma.resourceTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResourceTags and only return the `ResourceID`
     * const resourceTagWithResourceIDOnly = await prisma.resourceTag.createManyAndReturn({
     *   select: { ResourceID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceTagCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResourceTag.
     * @param {ResourceTagDeleteArgs} args - Arguments to delete one ResourceTag.
     * @example
     * // Delete one ResourceTag
     * const ResourceTag = await prisma.resourceTag.delete({
     *   where: {
     *     // ... filter to delete one ResourceTag
     *   }
     * })
     * 
     */
    delete<T extends ResourceTagDeleteArgs>(args: SelectSubset<T, ResourceTagDeleteArgs<ExtArgs>>): Prisma__ResourceTagClient<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResourceTag.
     * @param {ResourceTagUpdateArgs} args - Arguments to update one ResourceTag.
     * @example
     * // Update one ResourceTag
     * const resourceTag = await prisma.resourceTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceTagUpdateArgs>(args: SelectSubset<T, ResourceTagUpdateArgs<ExtArgs>>): Prisma__ResourceTagClient<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResourceTags.
     * @param {ResourceTagDeleteManyArgs} args - Arguments to filter ResourceTags to delete.
     * @example
     * // Delete a few ResourceTags
     * const { count } = await prisma.resourceTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceTagDeleteManyArgs>(args?: SelectSubset<T, ResourceTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResourceTags
     * const resourceTag = await prisma.resourceTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceTagUpdateManyArgs>(args: SelectSubset<T, ResourceTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResourceTags and returns the data updated in the database.
     * @param {ResourceTagUpdateManyAndReturnArgs} args - Arguments to update many ResourceTags.
     * @example
     * // Update many ResourceTags
     * const resourceTag = await prisma.resourceTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResourceTags and only return the `ResourceID`
     * const resourceTagWithResourceIDOnly = await prisma.resourceTag.updateManyAndReturn({
     *   select: { ResourceID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResourceTagUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResourceTag.
     * @param {ResourceTagUpsertArgs} args - Arguments to update or create a ResourceTag.
     * @example
     * // Update or create a ResourceTag
     * const resourceTag = await prisma.resourceTag.upsert({
     *   create: {
     *     // ... data to create a ResourceTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResourceTag we want to update
     *   }
     * })
     */
    upsert<T extends ResourceTagUpsertArgs>(args: SelectSubset<T, ResourceTagUpsertArgs<ExtArgs>>): Prisma__ResourceTagClient<$Result.GetResult<Prisma.$ResourceTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResourceTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTagCountArgs} args - Arguments to filter ResourceTags to count.
     * @example
     * // Count the number of ResourceTags
     * const count = await prisma.resourceTag.count({
     *   where: {
     *     // ... the filter for the ResourceTags we want to count
     *   }
     * })
    **/
    count<T extends ResourceTagCountArgs>(
      args?: Subset<T, ResourceTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResourceTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResourceTagAggregateArgs>(args: Subset<T, ResourceTagAggregateArgs>): Prisma.PrismaPromise<GetResourceTagAggregateType<T>>

    /**
     * Group by ResourceTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceTagGroupByArgs} args - Group by arguments.
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
      T extends ResourceTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceTagGroupByArgs['orderBy'] }
        : { orderBy?: ResourceTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResourceTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResourceTag model
   */
  readonly fields: ResourceTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResourceTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resource<T extends ResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDefaultArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ResourceTag model
   */
  interface ResourceTagFieldRefs {
    readonly ResourceID: FieldRef<"ResourceTag", 'Int'>
    readonly Tag: FieldRef<"ResourceTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ResourceTag findUnique
   */
  export type ResourceTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagInclude<ExtArgs> | null
    /**
     * Filter, which ResourceTag to fetch.
     */
    where: ResourceTagWhereUniqueInput
  }

  /**
   * ResourceTag findUniqueOrThrow
   */
  export type ResourceTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagInclude<ExtArgs> | null
    /**
     * Filter, which ResourceTag to fetch.
     */
    where: ResourceTagWhereUniqueInput
  }

  /**
   * ResourceTag findFirst
   */
  export type ResourceTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagInclude<ExtArgs> | null
    /**
     * Filter, which ResourceTag to fetch.
     */
    where?: ResourceTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTags to fetch.
     */
    orderBy?: ResourceTagOrderByWithRelationInput | ResourceTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceTags.
     */
    cursor?: ResourceTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceTags.
     */
    distinct?: ResourceTagScalarFieldEnum | ResourceTagScalarFieldEnum[]
  }

  /**
   * ResourceTag findFirstOrThrow
   */
  export type ResourceTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagInclude<ExtArgs> | null
    /**
     * Filter, which ResourceTag to fetch.
     */
    where?: ResourceTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTags to fetch.
     */
    orderBy?: ResourceTagOrderByWithRelationInput | ResourceTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResourceTags.
     */
    cursor?: ResourceTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResourceTags.
     */
    distinct?: ResourceTagScalarFieldEnum | ResourceTagScalarFieldEnum[]
  }

  /**
   * ResourceTag findMany
   */
  export type ResourceTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagInclude<ExtArgs> | null
    /**
     * Filter, which ResourceTags to fetch.
     */
    where?: ResourceTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResourceTags to fetch.
     */
    orderBy?: ResourceTagOrderByWithRelationInput | ResourceTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResourceTags.
     */
    cursor?: ResourceTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResourceTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResourceTags.
     */
    skip?: number
    distinct?: ResourceTagScalarFieldEnum | ResourceTagScalarFieldEnum[]
  }

  /**
   * ResourceTag create
   */
  export type ResourceTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagInclude<ExtArgs> | null
    /**
     * The data needed to create a ResourceTag.
     */
    data: XOR<ResourceTagCreateInput, ResourceTagUncheckedCreateInput>
  }

  /**
   * ResourceTag createMany
   */
  export type ResourceTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResourceTags.
     */
    data: ResourceTagCreateManyInput | ResourceTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResourceTag createManyAndReturn
   */
  export type ResourceTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * The data used to create many ResourceTags.
     */
    data: ResourceTagCreateManyInput | ResourceTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResourceTag update
   */
  export type ResourceTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagInclude<ExtArgs> | null
    /**
     * The data needed to update a ResourceTag.
     */
    data: XOR<ResourceTagUpdateInput, ResourceTagUncheckedUpdateInput>
    /**
     * Choose, which ResourceTag to update.
     */
    where: ResourceTagWhereUniqueInput
  }

  /**
   * ResourceTag updateMany
   */
  export type ResourceTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResourceTags.
     */
    data: XOR<ResourceTagUpdateManyMutationInput, ResourceTagUncheckedUpdateManyInput>
    /**
     * Filter which ResourceTags to update
     */
    where?: ResourceTagWhereInput
    /**
     * Limit how many ResourceTags to update.
     */
    limit?: number
  }

  /**
   * ResourceTag updateManyAndReturn
   */
  export type ResourceTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * The data used to update ResourceTags.
     */
    data: XOR<ResourceTagUpdateManyMutationInput, ResourceTagUncheckedUpdateManyInput>
    /**
     * Filter which ResourceTags to update
     */
    where?: ResourceTagWhereInput
    /**
     * Limit how many ResourceTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResourceTag upsert
   */
  export type ResourceTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagInclude<ExtArgs> | null
    /**
     * The filter to search for the ResourceTag to update in case it exists.
     */
    where: ResourceTagWhereUniqueInput
    /**
     * In case the ResourceTag found by the `where` argument doesn't exist, create a new ResourceTag with this data.
     */
    create: XOR<ResourceTagCreateInput, ResourceTagUncheckedCreateInput>
    /**
     * In case the ResourceTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceTagUpdateInput, ResourceTagUncheckedUpdateInput>
  }

  /**
   * ResourceTag delete
   */
  export type ResourceTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagInclude<ExtArgs> | null
    /**
     * Filter which ResourceTag to delete.
     */
    where: ResourceTagWhereUniqueInput
  }

  /**
   * ResourceTag deleteMany
   */
  export type ResourceTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResourceTags to delete
     */
    where?: ResourceTagWhereInput
    /**
     * Limit how many ResourceTags to delete.
     */
    limit?: number
  }

  /**
   * ResourceTag without action
   */
  export type ResourceTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceTag
     */
    select?: ResourceTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResourceTag
     */
    omit?: ResourceTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceTagInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    BookID: number | null
    UserID: number | null
  }

  export type BookSumAggregateOutputType = {
    BookID: number | null
    UserID: number | null
  }

  export type BookMinAggregateOutputType = {
    BookID: number | null
    Title: string | null
    Author: string | null
    Edition: string | null
    Condition: string | null
    AvailabilityStatus: string | null
    ListedDate: Date | null
    UserID: number | null
  }

  export type BookMaxAggregateOutputType = {
    BookID: number | null
    Title: string | null
    Author: string | null
    Edition: string | null
    Condition: string | null
    AvailabilityStatus: string | null
    ListedDate: Date | null
    UserID: number | null
  }

  export type BookCountAggregateOutputType = {
    BookID: number
    Title: number
    Author: number
    Edition: number
    Condition: number
    AvailabilityStatus: number
    ListedDate: number
    UserID: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    BookID?: true
    UserID?: true
  }

  export type BookSumAggregateInputType = {
    BookID?: true
    UserID?: true
  }

  export type BookMinAggregateInputType = {
    BookID?: true
    Title?: true
    Author?: true
    Edition?: true
    Condition?: true
    AvailabilityStatus?: true
    ListedDate?: true
    UserID?: true
  }

  export type BookMaxAggregateInputType = {
    BookID?: true
    Title?: true
    Author?: true
    Edition?: true
    Condition?: true
    AvailabilityStatus?: true
    ListedDate?: true
    UserID?: true
  }

  export type BookCountAggregateInputType = {
    BookID?: true
    Title?: true
    Author?: true
    Edition?: true
    Condition?: true
    AvailabilityStatus?: true
    ListedDate?: true
    UserID?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    BookID: number
    Title: string
    Author: string
    Edition: string | null
    Condition: string | null
    AvailabilityStatus: string | null
    ListedDate: Date
    UserID: number
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BookID?: boolean
    Title?: boolean
    Author?: boolean
    Edition?: boolean
    Condition?: boolean
    AvailabilityStatus?: boolean
    ListedDate?: boolean
    UserID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Book$transactionsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BookID?: boolean
    Title?: boolean
    Author?: boolean
    Edition?: boolean
    Condition?: boolean
    AvailabilityStatus?: boolean
    ListedDate?: boolean
    UserID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BookID?: boolean
    Title?: boolean
    Author?: boolean
    Edition?: boolean
    Condition?: boolean
    AvailabilityStatus?: boolean
    ListedDate?: boolean
    UserID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    BookID?: boolean
    Title?: boolean
    Author?: boolean
    Edition?: boolean
    Condition?: boolean
    AvailabilityStatus?: boolean
    ListedDate?: boolean
    UserID?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"BookID" | "Title" | "Author" | "Edition" | "Condition" | "AvailabilityStatus" | "ListedDate" | "UserID", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | Book$transactionsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$BookTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      BookID: number
      Title: string
      Author: string
      Edition: string | null
      Condition: string | null
      AvailabilityStatus: string | null
      ListedDate: Date
      UserID: number
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `BookID`
     * const bookWithBookIDOnly = await prisma.book.findMany({ select: { BookID: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `BookID`
     * const bookWithBookIDOnly = await prisma.book.createManyAndReturn({
     *   select: { BookID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `BookID`
     * const bookWithBookIDOnly = await prisma.book.updateManyAndReturn({
     *   select: { BookID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Book$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Book$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly BookID: FieldRef<"Book", 'Int'>
    readonly Title: FieldRef<"Book", 'String'>
    readonly Author: FieldRef<"Book", 'String'>
    readonly Edition: FieldRef<"Book", 'String'>
    readonly Condition: FieldRef<"Book", 'String'>
    readonly AvailabilityStatus: FieldRef<"Book", 'String'>
    readonly ListedDate: FieldRef<"Book", 'DateTime'>
    readonly UserID: FieldRef<"Book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.transactions
   */
  export type Book$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
    where?: BookTransactionWhereInput
    orderBy?: BookTransactionOrderByWithRelationInput | BookTransactionOrderByWithRelationInput[]
    cursor?: BookTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookTransactionScalarFieldEnum | BookTransactionScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model BookTransaction
   */

  export type AggregateBookTransaction = {
    _count: BookTransactionCountAggregateOutputType | null
    _avg: BookTransactionAvgAggregateOutputType | null
    _sum: BookTransactionSumAggregateOutputType | null
    _min: BookTransactionMinAggregateOutputType | null
    _max: BookTransactionMaxAggregateOutputType | null
  }

  export type BookTransactionAvgAggregateOutputType = {
    TransactionID: number | null
    UserID: number | null
    BookID: number | null
  }

  export type BookTransactionSumAggregateOutputType = {
    TransactionID: number | null
    UserID: number | null
    BookID: number | null
  }

  export type BookTransactionMinAggregateOutputType = {
    TransactionID: number | null
    Status: string | null
    RequestDate: Date | null
    ApprovalDate: Date | null
    ReturnDate: Date | null
    TransactionType: string | null
    UserID: number | null
    BookID: number | null
  }

  export type BookTransactionMaxAggregateOutputType = {
    TransactionID: number | null
    Status: string | null
    RequestDate: Date | null
    ApprovalDate: Date | null
    ReturnDate: Date | null
    TransactionType: string | null
    UserID: number | null
    BookID: number | null
  }

  export type BookTransactionCountAggregateOutputType = {
    TransactionID: number
    Status: number
    RequestDate: number
    ApprovalDate: number
    ReturnDate: number
    TransactionType: number
    UserID: number
    BookID: number
    _all: number
  }


  export type BookTransactionAvgAggregateInputType = {
    TransactionID?: true
    UserID?: true
    BookID?: true
  }

  export type BookTransactionSumAggregateInputType = {
    TransactionID?: true
    UserID?: true
    BookID?: true
  }

  export type BookTransactionMinAggregateInputType = {
    TransactionID?: true
    Status?: true
    RequestDate?: true
    ApprovalDate?: true
    ReturnDate?: true
    TransactionType?: true
    UserID?: true
    BookID?: true
  }

  export type BookTransactionMaxAggregateInputType = {
    TransactionID?: true
    Status?: true
    RequestDate?: true
    ApprovalDate?: true
    ReturnDate?: true
    TransactionType?: true
    UserID?: true
    BookID?: true
  }

  export type BookTransactionCountAggregateInputType = {
    TransactionID?: true
    Status?: true
    RequestDate?: true
    ApprovalDate?: true
    ReturnDate?: true
    TransactionType?: true
    UserID?: true
    BookID?: true
    _all?: true
  }

  export type BookTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookTransaction to aggregate.
     */
    where?: BookTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTransactions to fetch.
     */
    orderBy?: BookTransactionOrderByWithRelationInput | BookTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookTransactions
    **/
    _count?: true | BookTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookTransactionMaxAggregateInputType
  }

  export type GetBookTransactionAggregateType<T extends BookTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateBookTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookTransaction[P]>
      : GetScalarType<T[P], AggregateBookTransaction[P]>
  }




  export type BookTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookTransactionWhereInput
    orderBy?: BookTransactionOrderByWithAggregationInput | BookTransactionOrderByWithAggregationInput[]
    by: BookTransactionScalarFieldEnum[] | BookTransactionScalarFieldEnum
    having?: BookTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookTransactionCountAggregateInputType | true
    _avg?: BookTransactionAvgAggregateInputType
    _sum?: BookTransactionSumAggregateInputType
    _min?: BookTransactionMinAggregateInputType
    _max?: BookTransactionMaxAggregateInputType
  }

  export type BookTransactionGroupByOutputType = {
    TransactionID: number
    Status: string | null
    RequestDate: Date
    ApprovalDate: Date | null
    ReturnDate: Date | null
    TransactionType: string | null
    UserID: number
    BookID: number
    _count: BookTransactionCountAggregateOutputType | null
    _avg: BookTransactionAvgAggregateOutputType | null
    _sum: BookTransactionSumAggregateOutputType | null
    _min: BookTransactionMinAggregateOutputType | null
    _max: BookTransactionMaxAggregateOutputType | null
  }

  type GetBookTransactionGroupByPayload<T extends BookTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], BookTransactionGroupByOutputType[P]>
        }
      >
    >


  export type BookTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TransactionID?: boolean
    Status?: boolean
    RequestDate?: boolean
    ApprovalDate?: boolean
    ReturnDate?: boolean
    TransactionType?: boolean
    UserID?: boolean
    BookID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookTransaction"]>

  export type BookTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TransactionID?: boolean
    Status?: boolean
    RequestDate?: boolean
    ApprovalDate?: boolean
    ReturnDate?: boolean
    TransactionType?: boolean
    UserID?: boolean
    BookID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookTransaction"]>

  export type BookTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    TransactionID?: boolean
    Status?: boolean
    RequestDate?: boolean
    ApprovalDate?: boolean
    ReturnDate?: boolean
    TransactionType?: boolean
    UserID?: boolean
    BookID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookTransaction"]>

  export type BookTransactionSelectScalar = {
    TransactionID?: boolean
    Status?: boolean
    RequestDate?: boolean
    ApprovalDate?: boolean
    ReturnDate?: boolean
    TransactionType?: boolean
    UserID?: boolean
    BookID?: boolean
  }

  export type BookTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"TransactionID" | "Status" | "RequestDate" | "ApprovalDate" | "ReturnDate" | "TransactionType" | "UserID" | "BookID", ExtArgs["result"]["bookTransaction"]>
  export type BookTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      TransactionID: number
      Status: string | null
      RequestDate: Date
      ApprovalDate: Date | null
      ReturnDate: Date | null
      TransactionType: string | null
      UserID: number
      BookID: number
    }, ExtArgs["result"]["bookTransaction"]>
    composites: {}
  }

  type BookTransactionGetPayload<S extends boolean | null | undefined | BookTransactionDefaultArgs> = $Result.GetResult<Prisma.$BookTransactionPayload, S>

  type BookTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookTransactionCountAggregateInputType | true
    }

  export interface BookTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookTransaction'], meta: { name: 'BookTransaction' } }
    /**
     * Find zero or one BookTransaction that matches the filter.
     * @param {BookTransactionFindUniqueArgs} args - Arguments to find a BookTransaction
     * @example
     * // Get one BookTransaction
     * const bookTransaction = await prisma.bookTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookTransactionFindUniqueArgs>(args: SelectSubset<T, BookTransactionFindUniqueArgs<ExtArgs>>): Prisma__BookTransactionClient<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookTransactionFindUniqueOrThrowArgs} args - Arguments to find a BookTransaction
     * @example
     * // Get one BookTransaction
     * const bookTransaction = await prisma.bookTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, BookTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookTransactionClient<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTransactionFindFirstArgs} args - Arguments to find a BookTransaction
     * @example
     * // Get one BookTransaction
     * const bookTransaction = await prisma.bookTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookTransactionFindFirstArgs>(args?: SelectSubset<T, BookTransactionFindFirstArgs<ExtArgs>>): Prisma__BookTransactionClient<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTransactionFindFirstOrThrowArgs} args - Arguments to find a BookTransaction
     * @example
     * // Get one BookTransaction
     * const bookTransaction = await prisma.bookTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, BookTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookTransactionClient<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookTransactions
     * const bookTransactions = await prisma.bookTransaction.findMany()
     * 
     * // Get first 10 BookTransactions
     * const bookTransactions = await prisma.bookTransaction.findMany({ take: 10 })
     * 
     * // Only select the `TransactionID`
     * const bookTransactionWithTransactionIDOnly = await prisma.bookTransaction.findMany({ select: { TransactionID: true } })
     * 
     */
    findMany<T extends BookTransactionFindManyArgs>(args?: SelectSubset<T, BookTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookTransaction.
     * @param {BookTransactionCreateArgs} args - Arguments to create a BookTransaction.
     * @example
     * // Create one BookTransaction
     * const BookTransaction = await prisma.bookTransaction.create({
     *   data: {
     *     // ... data to create a BookTransaction
     *   }
     * })
     * 
     */
    create<T extends BookTransactionCreateArgs>(args: SelectSubset<T, BookTransactionCreateArgs<ExtArgs>>): Prisma__BookTransactionClient<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookTransactions.
     * @param {BookTransactionCreateManyArgs} args - Arguments to create many BookTransactions.
     * @example
     * // Create many BookTransactions
     * const bookTransaction = await prisma.bookTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookTransactionCreateManyArgs>(args?: SelectSubset<T, BookTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookTransactions and returns the data saved in the database.
     * @param {BookTransactionCreateManyAndReturnArgs} args - Arguments to create many BookTransactions.
     * @example
     * // Create many BookTransactions
     * const bookTransaction = await prisma.bookTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookTransactions and only return the `TransactionID`
     * const bookTransactionWithTransactionIDOnly = await prisma.bookTransaction.createManyAndReturn({
     *   select: { TransactionID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, BookTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookTransaction.
     * @param {BookTransactionDeleteArgs} args - Arguments to delete one BookTransaction.
     * @example
     * // Delete one BookTransaction
     * const BookTransaction = await prisma.bookTransaction.delete({
     *   where: {
     *     // ... filter to delete one BookTransaction
     *   }
     * })
     * 
     */
    delete<T extends BookTransactionDeleteArgs>(args: SelectSubset<T, BookTransactionDeleteArgs<ExtArgs>>): Prisma__BookTransactionClient<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookTransaction.
     * @param {BookTransactionUpdateArgs} args - Arguments to update one BookTransaction.
     * @example
     * // Update one BookTransaction
     * const bookTransaction = await prisma.bookTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookTransactionUpdateArgs>(args: SelectSubset<T, BookTransactionUpdateArgs<ExtArgs>>): Prisma__BookTransactionClient<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookTransactions.
     * @param {BookTransactionDeleteManyArgs} args - Arguments to filter BookTransactions to delete.
     * @example
     * // Delete a few BookTransactions
     * const { count } = await prisma.bookTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookTransactionDeleteManyArgs>(args?: SelectSubset<T, BookTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookTransactions
     * const bookTransaction = await prisma.bookTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookTransactionUpdateManyArgs>(args: SelectSubset<T, BookTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookTransactions and returns the data updated in the database.
     * @param {BookTransactionUpdateManyAndReturnArgs} args - Arguments to update many BookTransactions.
     * @example
     * // Update many BookTransactions
     * const bookTransaction = await prisma.bookTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookTransactions and only return the `TransactionID`
     * const bookTransactionWithTransactionIDOnly = await prisma.bookTransaction.updateManyAndReturn({
     *   select: { TransactionID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, BookTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookTransaction.
     * @param {BookTransactionUpsertArgs} args - Arguments to update or create a BookTransaction.
     * @example
     * // Update or create a BookTransaction
     * const bookTransaction = await prisma.bookTransaction.upsert({
     *   create: {
     *     // ... data to create a BookTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookTransaction we want to update
     *   }
     * })
     */
    upsert<T extends BookTransactionUpsertArgs>(args: SelectSubset<T, BookTransactionUpsertArgs<ExtArgs>>): Prisma__BookTransactionClient<$Result.GetResult<Prisma.$BookTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTransactionCountArgs} args - Arguments to filter BookTransactions to count.
     * @example
     * // Count the number of BookTransactions
     * const count = await prisma.bookTransaction.count({
     *   where: {
     *     // ... the filter for the BookTransactions we want to count
     *   }
     * })
    **/
    count<T extends BookTransactionCountArgs>(
      args?: Subset<T, BookTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookTransactionAggregateArgs>(args: Subset<T, BookTransactionAggregateArgs>): Prisma.PrismaPromise<GetBookTransactionAggregateType<T>>

    /**
     * Group by BookTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookTransactionGroupByArgs} args - Group by arguments.
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
      T extends BookTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookTransactionGroupByArgs['orderBy'] }
        : { orderBy?: BookTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookTransaction model
   */
  readonly fields: BookTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookTransaction model
   */
  interface BookTransactionFieldRefs {
    readonly TransactionID: FieldRef<"BookTransaction", 'Int'>
    readonly Status: FieldRef<"BookTransaction", 'String'>
    readonly RequestDate: FieldRef<"BookTransaction", 'DateTime'>
    readonly ApprovalDate: FieldRef<"BookTransaction", 'DateTime'>
    readonly ReturnDate: FieldRef<"BookTransaction", 'DateTime'>
    readonly TransactionType: FieldRef<"BookTransaction", 'String'>
    readonly UserID: FieldRef<"BookTransaction", 'Int'>
    readonly BookID: FieldRef<"BookTransaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BookTransaction findUnique
   */
  export type BookTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BookTransaction to fetch.
     */
    where: BookTransactionWhereUniqueInput
  }

  /**
   * BookTransaction findUniqueOrThrow
   */
  export type BookTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BookTransaction to fetch.
     */
    where: BookTransactionWhereUniqueInput
  }

  /**
   * BookTransaction findFirst
   */
  export type BookTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BookTransaction to fetch.
     */
    where?: BookTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTransactions to fetch.
     */
    orderBy?: BookTransactionOrderByWithRelationInput | BookTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookTransactions.
     */
    cursor?: BookTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookTransactions.
     */
    distinct?: BookTransactionScalarFieldEnum | BookTransactionScalarFieldEnum[]
  }

  /**
   * BookTransaction findFirstOrThrow
   */
  export type BookTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BookTransaction to fetch.
     */
    where?: BookTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTransactions to fetch.
     */
    orderBy?: BookTransactionOrderByWithRelationInput | BookTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookTransactions.
     */
    cursor?: BookTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookTransactions.
     */
    distinct?: BookTransactionScalarFieldEnum | BookTransactionScalarFieldEnum[]
  }

  /**
   * BookTransaction findMany
   */
  export type BookTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
    /**
     * Filter, which BookTransactions to fetch.
     */
    where?: BookTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookTransactions to fetch.
     */
    orderBy?: BookTransactionOrderByWithRelationInput | BookTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookTransactions.
     */
    cursor?: BookTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookTransactions.
     */
    skip?: number
    distinct?: BookTransactionScalarFieldEnum | BookTransactionScalarFieldEnum[]
  }

  /**
   * BookTransaction create
   */
  export type BookTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a BookTransaction.
     */
    data: XOR<BookTransactionCreateInput, BookTransactionUncheckedCreateInput>
  }

  /**
   * BookTransaction createMany
   */
  export type BookTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookTransactions.
     */
    data: BookTransactionCreateManyInput | BookTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookTransaction createManyAndReturn
   */
  export type BookTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many BookTransactions.
     */
    data: BookTransactionCreateManyInput | BookTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookTransaction update
   */
  export type BookTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a BookTransaction.
     */
    data: XOR<BookTransactionUpdateInput, BookTransactionUncheckedUpdateInput>
    /**
     * Choose, which BookTransaction to update.
     */
    where: BookTransactionWhereUniqueInput
  }

  /**
   * BookTransaction updateMany
   */
  export type BookTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookTransactions.
     */
    data: XOR<BookTransactionUpdateManyMutationInput, BookTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BookTransactions to update
     */
    where?: BookTransactionWhereInput
    /**
     * Limit how many BookTransactions to update.
     */
    limit?: number
  }

  /**
   * BookTransaction updateManyAndReturn
   */
  export type BookTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * The data used to update BookTransactions.
     */
    data: XOR<BookTransactionUpdateManyMutationInput, BookTransactionUncheckedUpdateManyInput>
    /**
     * Filter which BookTransactions to update
     */
    where?: BookTransactionWhereInput
    /**
     * Limit how many BookTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookTransaction upsert
   */
  export type BookTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the BookTransaction to update in case it exists.
     */
    where: BookTransactionWhereUniqueInput
    /**
     * In case the BookTransaction found by the `where` argument doesn't exist, create a new BookTransaction with this data.
     */
    create: XOR<BookTransactionCreateInput, BookTransactionUncheckedCreateInput>
    /**
     * In case the BookTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookTransactionUpdateInput, BookTransactionUncheckedUpdateInput>
  }

  /**
   * BookTransaction delete
   */
  export type BookTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
    /**
     * Filter which BookTransaction to delete.
     */
    where: BookTransactionWhereUniqueInput
  }

  /**
   * BookTransaction deleteMany
   */
  export type BookTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookTransactions to delete
     */
    where?: BookTransactionWhereInput
    /**
     * Limit how many BookTransactions to delete.
     */
    limit?: number
  }

  /**
   * BookTransaction without action
   */
  export type BookTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookTransaction
     */
    select?: BookTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookTransaction
     */
    omit?: BookTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Forum
   */

  export type AggregateForum = {
    _count: ForumCountAggregateOutputType | null
    _avg: ForumAvgAggregateOutputType | null
    _sum: ForumSumAggregateOutputType | null
    _min: ForumMinAggregateOutputType | null
    _max: ForumMaxAggregateOutputType | null
  }

  export type ForumAvgAggregateOutputType = {
    ForumID: number | null
    UserID: number | null
    CourseID: number | null
  }

  export type ForumSumAggregateOutputType = {
    ForumID: number | null
    UserID: number | null
    CourseID: number | null
  }

  export type ForumMinAggregateOutputType = {
    ForumID: number | null
    Title: string | null
    CreatedDate: Date | null
    Status: string | null
    UserID: number | null
    CourseID: number | null
  }

  export type ForumMaxAggregateOutputType = {
    ForumID: number | null
    Title: string | null
    CreatedDate: Date | null
    Status: string | null
    UserID: number | null
    CourseID: number | null
  }

  export type ForumCountAggregateOutputType = {
    ForumID: number
    Title: number
    CreatedDate: number
    Status: number
    UserID: number
    CourseID: number
    _all: number
  }


  export type ForumAvgAggregateInputType = {
    ForumID?: true
    UserID?: true
    CourseID?: true
  }

  export type ForumSumAggregateInputType = {
    ForumID?: true
    UserID?: true
    CourseID?: true
  }

  export type ForumMinAggregateInputType = {
    ForumID?: true
    Title?: true
    CreatedDate?: true
    Status?: true
    UserID?: true
    CourseID?: true
  }

  export type ForumMaxAggregateInputType = {
    ForumID?: true
    Title?: true
    CreatedDate?: true
    Status?: true
    UserID?: true
    CourseID?: true
  }

  export type ForumCountAggregateInputType = {
    ForumID?: true
    Title?: true
    CreatedDate?: true
    Status?: true
    UserID?: true
    CourseID?: true
    _all?: true
  }

  export type ForumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forum to aggregate.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forums
    **/
    _count?: true | ForumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ForumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ForumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumMaxAggregateInputType
  }

  export type GetForumAggregateType<T extends ForumAggregateArgs> = {
        [P in keyof T & keyof AggregateForum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForum[P]>
      : GetScalarType<T[P], AggregateForum[P]>
  }




  export type ForumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumWhereInput
    orderBy?: ForumOrderByWithAggregationInput | ForumOrderByWithAggregationInput[]
    by: ForumScalarFieldEnum[] | ForumScalarFieldEnum
    having?: ForumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCountAggregateInputType | true
    _avg?: ForumAvgAggregateInputType
    _sum?: ForumSumAggregateInputType
    _min?: ForumMinAggregateInputType
    _max?: ForumMaxAggregateInputType
  }

  export type ForumGroupByOutputType = {
    ForumID: number
    Title: string
    CreatedDate: Date
    Status: string | null
    UserID: number
    CourseID: number
    _count: ForumCountAggregateOutputType | null
    _avg: ForumAvgAggregateOutputType | null
    _sum: ForumSumAggregateOutputType | null
    _min: ForumMinAggregateOutputType | null
    _max: ForumMaxAggregateOutputType | null
  }

  type GetForumGroupByPayload<T extends ForumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumGroupByOutputType[P]>
            : GetScalarType<T[P], ForumGroupByOutputType[P]>
        }
      >
    >


  export type ForumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ForumID?: boolean
    Title?: boolean
    CreatedDate?: boolean
    Status?: boolean
    UserID?: boolean
    CourseID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    discussions?: boolean | Forum$discussionsArgs<ExtArgs>
    _count?: boolean | ForumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forum"]>

  export type ForumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ForumID?: boolean
    Title?: boolean
    CreatedDate?: boolean
    Status?: boolean
    UserID?: boolean
    CourseID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forum"]>

  export type ForumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ForumID?: boolean
    Title?: boolean
    CreatedDate?: boolean
    Status?: boolean
    UserID?: boolean
    CourseID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forum"]>

  export type ForumSelectScalar = {
    ForumID?: boolean
    Title?: boolean
    CreatedDate?: boolean
    Status?: boolean
    UserID?: boolean
    CourseID?: boolean
  }

  export type ForumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ForumID" | "Title" | "CreatedDate" | "Status" | "UserID" | "CourseID", ExtArgs["result"]["forum"]>
  export type ForumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    discussions?: boolean | Forum$discussionsArgs<ExtArgs>
    _count?: boolean | ForumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ForumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ForumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Forum"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
      discussions: Prisma.$DiscussionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ForumID: number
      Title: string
      CreatedDate: Date
      Status: string | null
      UserID: number
      CourseID: number
    }, ExtArgs["result"]["forum"]>
    composites: {}
  }

  type ForumGetPayload<S extends boolean | null | undefined | ForumDefaultArgs> = $Result.GetResult<Prisma.$ForumPayload, S>

  type ForumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCountAggregateInputType | true
    }

  export interface ForumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Forum'], meta: { name: 'Forum' } }
    /**
     * Find zero or one Forum that matches the filter.
     * @param {ForumFindUniqueArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumFindUniqueArgs>(args: SelectSubset<T, ForumFindUniqueArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Forum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumFindUniqueOrThrowArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindFirstArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumFindFirstArgs>(args?: SelectSubset<T, ForumFindFirstArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindFirstOrThrowArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forums
     * const forums = await prisma.forum.findMany()
     * 
     * // Get first 10 Forums
     * const forums = await prisma.forum.findMany({ take: 10 })
     * 
     * // Only select the `ForumID`
     * const forumWithForumIDOnly = await prisma.forum.findMany({ select: { ForumID: true } })
     * 
     */
    findMany<T extends ForumFindManyArgs>(args?: SelectSubset<T, ForumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Forum.
     * @param {ForumCreateArgs} args - Arguments to create a Forum.
     * @example
     * // Create one Forum
     * const Forum = await prisma.forum.create({
     *   data: {
     *     // ... data to create a Forum
     *   }
     * })
     * 
     */
    create<T extends ForumCreateArgs>(args: SelectSubset<T, ForumCreateArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forums.
     * @param {ForumCreateManyArgs} args - Arguments to create many Forums.
     * @example
     * // Create many Forums
     * const forum = await prisma.forum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCreateManyArgs>(args?: SelectSubset<T, ForumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forums and returns the data saved in the database.
     * @param {ForumCreateManyAndReturnArgs} args - Arguments to create many Forums.
     * @example
     * // Create many Forums
     * const forum = await prisma.forum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forums and only return the `ForumID`
     * const forumWithForumIDOnly = await prisma.forum.createManyAndReturn({
     *   select: { ForumID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Forum.
     * @param {ForumDeleteArgs} args - Arguments to delete one Forum.
     * @example
     * // Delete one Forum
     * const Forum = await prisma.forum.delete({
     *   where: {
     *     // ... filter to delete one Forum
     *   }
     * })
     * 
     */
    delete<T extends ForumDeleteArgs>(args: SelectSubset<T, ForumDeleteArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Forum.
     * @param {ForumUpdateArgs} args - Arguments to update one Forum.
     * @example
     * // Update one Forum
     * const forum = await prisma.forum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumUpdateArgs>(args: SelectSubset<T, ForumUpdateArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forums.
     * @param {ForumDeleteManyArgs} args - Arguments to filter Forums to delete.
     * @example
     * // Delete a few Forums
     * const { count } = await prisma.forum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumDeleteManyArgs>(args?: SelectSubset<T, ForumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forums
     * const forum = await prisma.forum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumUpdateManyArgs>(args: SelectSubset<T, ForumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forums and returns the data updated in the database.
     * @param {ForumUpdateManyAndReturnArgs} args - Arguments to update many Forums.
     * @example
     * // Update many Forums
     * const forum = await prisma.forum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forums and only return the `ForumID`
     * const forumWithForumIDOnly = await prisma.forum.updateManyAndReturn({
     *   select: { ForumID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Forum.
     * @param {ForumUpsertArgs} args - Arguments to update or create a Forum.
     * @example
     * // Update or create a Forum
     * const forum = await prisma.forum.upsert({
     *   create: {
     *     // ... data to create a Forum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Forum we want to update
     *   }
     * })
     */
    upsert<T extends ForumUpsertArgs>(args: SelectSubset<T, ForumUpsertArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCountArgs} args - Arguments to filter Forums to count.
     * @example
     * // Count the number of Forums
     * const count = await prisma.forum.count({
     *   where: {
     *     // ... the filter for the Forums we want to count
     *   }
     * })
    **/
    count<T extends ForumCountArgs>(
      args?: Subset<T, ForumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Forum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ForumAggregateArgs>(args: Subset<T, ForumAggregateArgs>): Prisma.PrismaPromise<GetForumAggregateType<T>>

    /**
     * Group by Forum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumGroupByArgs} args - Group by arguments.
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
      T extends ForumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumGroupByArgs['orderBy'] }
        : { orderBy?: ForumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ForumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Forum model
   */
  readonly fields: ForumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Forum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    discussions<T extends Forum$discussionsArgs<ExtArgs> = {}>(args?: Subset<T, Forum$discussionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Forum model
   */
  interface ForumFieldRefs {
    readonly ForumID: FieldRef<"Forum", 'Int'>
    readonly Title: FieldRef<"Forum", 'String'>
    readonly CreatedDate: FieldRef<"Forum", 'DateTime'>
    readonly Status: FieldRef<"Forum", 'String'>
    readonly UserID: FieldRef<"Forum", 'Int'>
    readonly CourseID: FieldRef<"Forum", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Forum findUnique
   */
  export type ForumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum findUniqueOrThrow
   */
  export type ForumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum findFirst
   */
  export type ForumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forums.
     */
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum findFirstOrThrow
   */
  export type ForumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forums.
     */
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum findMany
   */
  export type ForumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forums to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum create
   */
  export type ForumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The data needed to create a Forum.
     */
    data: XOR<ForumCreateInput, ForumUncheckedCreateInput>
  }

  /**
   * Forum createMany
   */
  export type ForumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forums.
     */
    data: ForumCreateManyInput | ForumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Forum createManyAndReturn
   */
  export type ForumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * The data used to create many Forums.
     */
    data: ForumCreateManyInput | ForumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Forum update
   */
  export type ForumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The data needed to update a Forum.
     */
    data: XOR<ForumUpdateInput, ForumUncheckedUpdateInput>
    /**
     * Choose, which Forum to update.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum updateMany
   */
  export type ForumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forums.
     */
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyInput>
    /**
     * Filter which Forums to update
     */
    where?: ForumWhereInput
    /**
     * Limit how many Forums to update.
     */
    limit?: number
  }

  /**
   * Forum updateManyAndReturn
   */
  export type ForumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * The data used to update Forums.
     */
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyInput>
    /**
     * Filter which Forums to update
     */
    where?: ForumWhereInput
    /**
     * Limit how many Forums to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Forum upsert
   */
  export type ForumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The filter to search for the Forum to update in case it exists.
     */
    where: ForumWhereUniqueInput
    /**
     * In case the Forum found by the `where` argument doesn't exist, create a new Forum with this data.
     */
    create: XOR<ForumCreateInput, ForumUncheckedCreateInput>
    /**
     * In case the Forum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumUpdateInput, ForumUncheckedUpdateInput>
  }

  /**
   * Forum delete
   */
  export type ForumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter which Forum to delete.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum deleteMany
   */
  export type ForumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forums to delete
     */
    where?: ForumWhereInput
    /**
     * Limit how many Forums to delete.
     */
    limit?: number
  }

  /**
   * Forum.discussions
   */
  export type Forum$discussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    cursor?: DiscussionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Forum without action
   */
  export type ForumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
  }


  /**
   * Model Discussion
   */

  export type AggregateDiscussion = {
    _count: DiscussionCountAggregateOutputType | null
    _avg: DiscussionAvgAggregateOutputType | null
    _sum: DiscussionSumAggregateOutputType | null
    _min: DiscussionMinAggregateOutputType | null
    _max: DiscussionMaxAggregateOutputType | null
  }

  export type DiscussionAvgAggregateOutputType = {
    DiscussionID: number | null
    UserID: number | null
    ForumID: number | null
  }

  export type DiscussionSumAggregateOutputType = {
    DiscussionID: number | null
    UserID: number | null
    ForumID: number | null
  }

  export type DiscussionMinAggregateOutputType = {
    DiscussionID: number | null
    Content: string | null
    Attachment: string | null
    Timestamp: Date | null
    Status: string | null
    UserID: number | null
    ForumID: number | null
  }

  export type DiscussionMaxAggregateOutputType = {
    DiscussionID: number | null
    Content: string | null
    Attachment: string | null
    Timestamp: Date | null
    Status: string | null
    UserID: number | null
    ForumID: number | null
  }

  export type DiscussionCountAggregateOutputType = {
    DiscussionID: number
    Content: number
    Attachment: number
    Timestamp: number
    Status: number
    UserID: number
    ForumID: number
    _all: number
  }


  export type DiscussionAvgAggregateInputType = {
    DiscussionID?: true
    UserID?: true
    ForumID?: true
  }

  export type DiscussionSumAggregateInputType = {
    DiscussionID?: true
    UserID?: true
    ForumID?: true
  }

  export type DiscussionMinAggregateInputType = {
    DiscussionID?: true
    Content?: true
    Attachment?: true
    Timestamp?: true
    Status?: true
    UserID?: true
    ForumID?: true
  }

  export type DiscussionMaxAggregateInputType = {
    DiscussionID?: true
    Content?: true
    Attachment?: true
    Timestamp?: true
    Status?: true
    UserID?: true
    ForumID?: true
  }

  export type DiscussionCountAggregateInputType = {
    DiscussionID?: true
    Content?: true
    Attachment?: true
    Timestamp?: true
    Status?: true
    UserID?: true
    ForumID?: true
    _all?: true
  }

  export type DiscussionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussion to aggregate.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discussions
    **/
    _count?: true | DiscussionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscussionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscussionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscussionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscussionMaxAggregateInputType
  }

  export type GetDiscussionAggregateType<T extends DiscussionAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscussion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscussion[P]>
      : GetScalarType<T[P], AggregateDiscussion[P]>
  }




  export type DiscussionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithAggregationInput | DiscussionOrderByWithAggregationInput[]
    by: DiscussionScalarFieldEnum[] | DiscussionScalarFieldEnum
    having?: DiscussionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscussionCountAggregateInputType | true
    _avg?: DiscussionAvgAggregateInputType
    _sum?: DiscussionSumAggregateInputType
    _min?: DiscussionMinAggregateInputType
    _max?: DiscussionMaxAggregateInputType
  }

  export type DiscussionGroupByOutputType = {
    DiscussionID: number
    Content: string
    Attachment: string | null
    Timestamp: Date
    Status: string | null
    UserID: number
    ForumID: number
    _count: DiscussionCountAggregateOutputType | null
    _avg: DiscussionAvgAggregateOutputType | null
    _sum: DiscussionSumAggregateOutputType | null
    _min: DiscussionMinAggregateOutputType | null
    _max: DiscussionMaxAggregateOutputType | null
  }

  type GetDiscussionGroupByPayload<T extends DiscussionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscussionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscussionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscussionGroupByOutputType[P]>
            : GetScalarType<T[P], DiscussionGroupByOutputType[P]>
        }
      >
    >


  export type DiscussionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DiscussionID?: boolean
    Content?: boolean
    Attachment?: boolean
    Timestamp?: boolean
    Status?: boolean
    UserID?: boolean
    ForumID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DiscussionID?: boolean
    Content?: boolean
    Attachment?: boolean
    Timestamp?: boolean
    Status?: boolean
    UserID?: boolean
    ForumID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DiscussionID?: boolean
    Content?: boolean
    Attachment?: boolean
    Timestamp?: boolean
    Status?: boolean
    UserID?: boolean
    ForumID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectScalar = {
    DiscussionID?: boolean
    Content?: boolean
    Attachment?: boolean
    Timestamp?: boolean
    Status?: boolean
    UserID?: boolean
    ForumID?: boolean
  }

  export type DiscussionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DiscussionID" | "Content" | "Attachment" | "Timestamp" | "Status" | "UserID" | "ForumID", ExtArgs["result"]["discussion"]>
  export type DiscussionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }
  export type DiscussionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }
  export type DiscussionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }

  export type $DiscussionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discussion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      forum: Prisma.$ForumPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      DiscussionID: number
      Content: string
      Attachment: string | null
      Timestamp: Date
      Status: string | null
      UserID: number
      ForumID: number
    }, ExtArgs["result"]["discussion"]>
    composites: {}
  }

  type DiscussionGetPayload<S extends boolean | null | undefined | DiscussionDefaultArgs> = $Result.GetResult<Prisma.$DiscussionPayload, S>

  type DiscussionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscussionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscussionCountAggregateInputType | true
    }

  export interface DiscussionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discussion'], meta: { name: 'Discussion' } }
    /**
     * Find zero or one Discussion that matches the filter.
     * @param {DiscussionFindUniqueArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscussionFindUniqueArgs>(args: SelectSubset<T, DiscussionFindUniqueArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discussion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscussionFindUniqueOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscussionFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscussionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscussionFindFirstArgs>(args?: SelectSubset<T, DiscussionFindFirstArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscussionFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscussionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discussions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discussions
     * const discussions = await prisma.discussion.findMany()
     * 
     * // Get first 10 Discussions
     * const discussions = await prisma.discussion.findMany({ take: 10 })
     * 
     * // Only select the `DiscussionID`
     * const discussionWithDiscussionIDOnly = await prisma.discussion.findMany({ select: { DiscussionID: true } })
     * 
     */
    findMany<T extends DiscussionFindManyArgs>(args?: SelectSubset<T, DiscussionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discussion.
     * @param {DiscussionCreateArgs} args - Arguments to create a Discussion.
     * @example
     * // Create one Discussion
     * const Discussion = await prisma.discussion.create({
     *   data: {
     *     // ... data to create a Discussion
     *   }
     * })
     * 
     */
    create<T extends DiscussionCreateArgs>(args: SelectSubset<T, DiscussionCreateArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discussions.
     * @param {DiscussionCreateManyArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussion = await prisma.discussion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscussionCreateManyArgs>(args?: SelectSubset<T, DiscussionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discussions and returns the data saved in the database.
     * @param {DiscussionCreateManyAndReturnArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussion = await prisma.discussion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discussions and only return the `DiscussionID`
     * const discussionWithDiscussionIDOnly = await prisma.discussion.createManyAndReturn({
     *   select: { DiscussionID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscussionCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscussionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discussion.
     * @param {DiscussionDeleteArgs} args - Arguments to delete one Discussion.
     * @example
     * // Delete one Discussion
     * const Discussion = await prisma.discussion.delete({
     *   where: {
     *     // ... filter to delete one Discussion
     *   }
     * })
     * 
     */
    delete<T extends DiscussionDeleteArgs>(args: SelectSubset<T, DiscussionDeleteArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discussion.
     * @param {DiscussionUpdateArgs} args - Arguments to update one Discussion.
     * @example
     * // Update one Discussion
     * const discussion = await prisma.discussion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscussionUpdateArgs>(args: SelectSubset<T, DiscussionUpdateArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discussions.
     * @param {DiscussionDeleteManyArgs} args - Arguments to filter Discussions to delete.
     * @example
     * // Delete a few Discussions
     * const { count } = await prisma.discussion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscussionDeleteManyArgs>(args?: SelectSubset<T, DiscussionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discussions
     * const discussion = await prisma.discussion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscussionUpdateManyArgs>(args: SelectSubset<T, DiscussionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions and returns the data updated in the database.
     * @param {DiscussionUpdateManyAndReturnArgs} args - Arguments to update many Discussions.
     * @example
     * // Update many Discussions
     * const discussion = await prisma.discussion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Discussions and only return the `DiscussionID`
     * const discussionWithDiscussionIDOnly = await prisma.discussion.updateManyAndReturn({
     *   select: { DiscussionID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscussionUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscussionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discussion.
     * @param {DiscussionUpsertArgs} args - Arguments to update or create a Discussion.
     * @example
     * // Update or create a Discussion
     * const discussion = await prisma.discussion.upsert({
     *   create: {
     *     // ... data to create a Discussion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discussion we want to update
     *   }
     * })
     */
    upsert<T extends DiscussionUpsertArgs>(args: SelectSubset<T, DiscussionUpsertArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionCountArgs} args - Arguments to filter Discussions to count.
     * @example
     * // Count the number of Discussions
     * const count = await prisma.discussion.count({
     *   where: {
     *     // ... the filter for the Discussions we want to count
     *   }
     * })
    **/
    count<T extends DiscussionCountArgs>(
      args?: Subset<T, DiscussionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscussionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscussionAggregateArgs>(args: Subset<T, DiscussionAggregateArgs>): Prisma.PrismaPromise<GetDiscussionAggregateType<T>>

    /**
     * Group by Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionGroupByArgs} args - Group by arguments.
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
      T extends DiscussionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscussionGroupByArgs['orderBy'] }
        : { orderBy?: DiscussionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscussionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscussionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discussion model
   */
  readonly fields: DiscussionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discussion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscussionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    forum<T extends ForumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumDefaultArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Discussion model
   */
  interface DiscussionFieldRefs {
    readonly DiscussionID: FieldRef<"Discussion", 'Int'>
    readonly Content: FieldRef<"Discussion", 'String'>
    readonly Attachment: FieldRef<"Discussion", 'String'>
    readonly Timestamp: FieldRef<"Discussion", 'DateTime'>
    readonly Status: FieldRef<"Discussion", 'String'>
    readonly UserID: FieldRef<"Discussion", 'Int'>
    readonly ForumID: FieldRef<"Discussion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Discussion findUnique
   */
  export type DiscussionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion findUniqueOrThrow
   */
  export type DiscussionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion findFirst
   */
  export type DiscussionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion findFirstOrThrow
   */
  export type DiscussionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion findMany
   */
  export type DiscussionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussions to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion create
   */
  export type DiscussionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The data needed to create a Discussion.
     */
    data: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>
  }

  /**
   * Discussion createMany
   */
  export type DiscussionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionCreateManyInput | DiscussionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discussion createManyAndReturn
   */
  export type DiscussionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionCreateManyInput | DiscussionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discussion update
   */
  export type DiscussionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The data needed to update a Discussion.
     */
    data: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>
    /**
     * Choose, which Discussion to update.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion updateMany
   */
  export type DiscussionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discussions.
     */
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyInput>
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to update.
     */
    limit?: number
  }

  /**
   * Discussion updateManyAndReturn
   */
  export type DiscussionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * The data used to update Discussions.
     */
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyInput>
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discussion upsert
   */
  export type DiscussionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The filter to search for the Discussion to update in case it exists.
     */
    where: DiscussionWhereUniqueInput
    /**
     * In case the Discussion found by the `where` argument doesn't exist, create a new Discussion with this data.
     */
    create: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>
    /**
     * In case the Discussion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>
  }

  /**
   * Discussion delete
   */
  export type DiscussionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter which Discussion to delete.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion deleteMany
   */
  export type DiscussionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussions to delete
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to delete.
     */
    limit?: number
  }

  /**
   * Discussion without action
   */
  export type DiscussionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestAvgAggregateOutputType = {
    RequestID: number | null
    UserID: number | null
    CourseID: number | null
  }

  export type RequestSumAggregateOutputType = {
    RequestID: number | null
    UserID: number | null
    CourseID: number | null
  }

  export type RequestMinAggregateOutputType = {
    RequestID: number | null
    Description: string | null
    Status: string | null
    CreatedDate: Date | null
    FulfilledDate: Date | null
    UserID: number | null
    CourseID: number | null
  }

  export type RequestMaxAggregateOutputType = {
    RequestID: number | null
    Description: string | null
    Status: string | null
    CreatedDate: Date | null
    FulfilledDate: Date | null
    UserID: number | null
    CourseID: number | null
  }

  export type RequestCountAggregateOutputType = {
    RequestID: number
    Description: number
    Status: number
    CreatedDate: number
    FulfilledDate: number
    UserID: number
    CourseID: number
    _all: number
  }


  export type RequestAvgAggregateInputType = {
    RequestID?: true
    UserID?: true
    CourseID?: true
  }

  export type RequestSumAggregateInputType = {
    RequestID?: true
    UserID?: true
    CourseID?: true
  }

  export type RequestMinAggregateInputType = {
    RequestID?: true
    Description?: true
    Status?: true
    CreatedDate?: true
    FulfilledDate?: true
    UserID?: true
    CourseID?: true
  }

  export type RequestMaxAggregateInputType = {
    RequestID?: true
    Description?: true
    Status?: true
    CreatedDate?: true
    FulfilledDate?: true
    UserID?: true
    CourseID?: true
  }

  export type RequestCountAggregateInputType = {
    RequestID?: true
    Description?: true
    Status?: true
    CreatedDate?: true
    FulfilledDate?: true
    UserID?: true
    CourseID?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _avg?: RequestAvgAggregateInputType
    _sum?: RequestSumAggregateInputType
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    RequestID: number
    Description: string
    Status: string | null
    CreatedDate: Date
    FulfilledDate: Date | null
    UserID: number
    CourseID: number
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RequestID?: boolean
    Description?: boolean
    Status?: boolean
    CreatedDate?: boolean
    FulfilledDate?: boolean
    UserID?: boolean
    CourseID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RequestID?: boolean
    Description?: boolean
    Status?: boolean
    CreatedDate?: boolean
    FulfilledDate?: boolean
    UserID?: boolean
    CourseID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    RequestID?: boolean
    Description?: boolean
    Status?: boolean
    CreatedDate?: boolean
    FulfilledDate?: boolean
    UserID?: boolean
    CourseID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    RequestID?: boolean
    Description?: boolean
    Status?: boolean
    CreatedDate?: boolean
    FulfilledDate?: boolean
    UserID?: boolean
    CourseID?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"RequestID" | "Description" | "Status" | "CreatedDate" | "FulfilledDate" | "UserID" | "CourseID", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      RequestID: number
      Description: string
      Status: string | null
      CreatedDate: Date
      FulfilledDate: Date | null
      UserID: number
      CourseID: number
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `RequestID`
     * const requestWithRequestIDOnly = await prisma.request.findMany({ select: { RequestID: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `RequestID`
     * const requestWithRequestIDOnly = await prisma.request.createManyAndReturn({
     *   select: { RequestID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `RequestID`
     * const requestWithRequestIDOnly = await prisma.request.updateManyAndReturn({
     *   select: { RequestID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
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
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly RequestID: FieldRef<"Request", 'Int'>
    readonly Description: FieldRef<"Request", 'String'>
    readonly Status: FieldRef<"Request", 'String'>
    readonly CreatedDate: FieldRef<"Request", 'DateTime'>
    readonly FulfilledDate: FieldRef<"Request", 'DateTime'>
    readonly UserID: FieldRef<"Request", 'Int'>
    readonly CourseID: FieldRef<"Request", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    UserID: number | null
    ResourceID: number | null
    RatingValue: number | null
  }

  export type RatingSumAggregateOutputType = {
    UserID: number | null
    ResourceID: number | null
    RatingValue: number | null
  }

  export type RatingMinAggregateOutputType = {
    UserID: number | null
    ResourceID: number | null
    RatingValue: number | null
    Comment: string | null
    Date: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    UserID: number | null
    ResourceID: number | null
    RatingValue: number | null
    Comment: string | null
    Date: Date | null
  }

  export type RatingCountAggregateOutputType = {
    UserID: number
    ResourceID: number
    RatingValue: number
    Comment: number
    Date: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    UserID?: true
    ResourceID?: true
    RatingValue?: true
  }

  export type RatingSumAggregateInputType = {
    UserID?: true
    ResourceID?: true
    RatingValue?: true
  }

  export type RatingMinAggregateInputType = {
    UserID?: true
    ResourceID?: true
    RatingValue?: true
    Comment?: true
    Date?: true
  }

  export type RatingMaxAggregateInputType = {
    UserID?: true
    ResourceID?: true
    RatingValue?: true
    Comment?: true
    Date?: true
  }

  export type RatingCountAggregateInputType = {
    UserID?: true
    ResourceID?: true
    RatingValue?: true
    Comment?: true
    Date?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    UserID: number
    ResourceID: number
    RatingValue: number
    Comment: string | null
    Date: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    ResourceID?: boolean
    RatingValue?: boolean
    Comment?: boolean
    Date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    ResourceID?: boolean
    RatingValue?: boolean
    Comment?: boolean
    Date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    ResourceID?: boolean
    RatingValue?: boolean
    Comment?: boolean
    Date?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    UserID?: boolean
    ResourceID?: boolean
    RatingValue?: boolean
    Comment?: boolean
    Date?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserID" | "ResourceID" | "RatingValue" | "Comment" | "Date", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resource: Prisma.$ResourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: number
      ResourceID: number
      RatingValue: number
      Comment: string | null
      Date: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const ratingWithUserIDOnly = await prisma.rating.findMany({ select: { UserID: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `UserID`
     * const ratingWithUserIDOnly = await prisma.rating.createManyAndReturn({
     *   select: { UserID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `UserID`
     * const ratingWithUserIDOnly = await prisma.rating.updateManyAndReturn({
     *   select: { UserID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resource<T extends ResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDefaultArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly UserID: FieldRef<"Rating", 'Int'>
    readonly ResourceID: FieldRef<"Rating", 'Int'>
    readonly RatingValue: FieldRef<"Rating", 'Int'>
    readonly Comment: FieldRef<"Rating", 'String'>
    readonly Date: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model Flag
   */

  export type AggregateFlag = {
    _count: FlagCountAggregateOutputType | null
    _avg: FlagAvgAggregateOutputType | null
    _sum: FlagSumAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  export type FlagAvgAggregateOutputType = {
    FlagID: number | null
    UserID: number | null
    ResourceID: number | null
  }

  export type FlagSumAggregateOutputType = {
    FlagID: number | null
    UserID: number | null
    ResourceID: number | null
  }

  export type FlagMinAggregateOutputType = {
    FlagID: number | null
    Reason: string | null
    Status: string | null
    Date: Date | null
    UserID: number | null
    ResourceID: number | null
  }

  export type FlagMaxAggregateOutputType = {
    FlagID: number | null
    Reason: string | null
    Status: string | null
    Date: Date | null
    UserID: number | null
    ResourceID: number | null
  }

  export type FlagCountAggregateOutputType = {
    FlagID: number
    Reason: number
    Status: number
    Date: number
    UserID: number
    ResourceID: number
    _all: number
  }


  export type FlagAvgAggregateInputType = {
    FlagID?: true
    UserID?: true
    ResourceID?: true
  }

  export type FlagSumAggregateInputType = {
    FlagID?: true
    UserID?: true
    ResourceID?: true
  }

  export type FlagMinAggregateInputType = {
    FlagID?: true
    Reason?: true
    Status?: true
    Date?: true
    UserID?: true
    ResourceID?: true
  }

  export type FlagMaxAggregateInputType = {
    FlagID?: true
    Reason?: true
    Status?: true
    Date?: true
    UserID?: true
    ResourceID?: true
  }

  export type FlagCountAggregateInputType = {
    FlagID?: true
    Reason?: true
    Status?: true
    Date?: true
    UserID?: true
    ResourceID?: true
    _all?: true
  }

  export type FlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flag to aggregate.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flags
    **/
    _count?: true | FlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlagMaxAggregateInputType
  }

  export type GetFlagAggregateType<T extends FlagAggregateArgs> = {
        [P in keyof T & keyof AggregateFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlag[P]>
      : GetScalarType<T[P], AggregateFlag[P]>
  }




  export type FlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlagWhereInput
    orderBy?: FlagOrderByWithAggregationInput | FlagOrderByWithAggregationInput[]
    by: FlagScalarFieldEnum[] | FlagScalarFieldEnum
    having?: FlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlagCountAggregateInputType | true
    _avg?: FlagAvgAggregateInputType
    _sum?: FlagSumAggregateInputType
    _min?: FlagMinAggregateInputType
    _max?: FlagMaxAggregateInputType
  }

  export type FlagGroupByOutputType = {
    FlagID: number
    Reason: string
    Status: string | null
    Date: Date
    UserID: number
    ResourceID: number
    _count: FlagCountAggregateOutputType | null
    _avg: FlagAvgAggregateOutputType | null
    _sum: FlagSumAggregateOutputType | null
    _min: FlagMinAggregateOutputType | null
    _max: FlagMaxAggregateOutputType | null
  }

  type GetFlagGroupByPayload<T extends FlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlagGroupByOutputType[P]>
            : GetScalarType<T[P], FlagGroupByOutputType[P]>
        }
      >
    >


  export type FlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FlagID?: boolean
    Reason?: boolean
    Status?: boolean
    Date?: boolean
    UserID?: boolean
    ResourceID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flag"]>

  export type FlagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FlagID?: boolean
    Reason?: boolean
    Status?: boolean
    Date?: boolean
    UserID?: boolean
    ResourceID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flag"]>

  export type FlagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FlagID?: boolean
    Reason?: boolean
    Status?: boolean
    Date?: boolean
    UserID?: boolean
    ResourceID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flag"]>

  export type FlagSelectScalar = {
    FlagID?: boolean
    Reason?: boolean
    Status?: boolean
    Date?: boolean
    UserID?: boolean
    ResourceID?: boolean
  }

  export type FlagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"FlagID" | "Reason" | "Status" | "Date" | "UserID" | "ResourceID", ExtArgs["result"]["flag"]>
  export type FlagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type FlagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }
  export type FlagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    resource?: boolean | ResourceDefaultArgs<ExtArgs>
  }

  export type $FlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flag"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      resource: Prisma.$ResourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      FlagID: number
      Reason: string
      Status: string | null
      Date: Date
      UserID: number
      ResourceID: number
    }, ExtArgs["result"]["flag"]>
    composites: {}
  }

  type FlagGetPayload<S extends boolean | null | undefined | FlagDefaultArgs> = $Result.GetResult<Prisma.$FlagPayload, S>

  type FlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlagCountAggregateInputType | true
    }

  export interface FlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flag'], meta: { name: 'Flag' } }
    /**
     * Find zero or one Flag that matches the filter.
     * @param {FlagFindUniqueArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlagFindUniqueArgs>(args: SelectSubset<T, FlagFindUniqueArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlagFindUniqueOrThrowArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlagFindUniqueOrThrowArgs>(args: SelectSubset<T, FlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindFirstArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlagFindFirstArgs>(args?: SelectSubset<T, FlagFindFirstArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindFirstOrThrowArgs} args - Arguments to find a Flag
     * @example
     * // Get one Flag
     * const flag = await prisma.flag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlagFindFirstOrThrowArgs>(args?: SelectSubset<T, FlagFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flags
     * const flags = await prisma.flag.findMany()
     * 
     * // Get first 10 Flags
     * const flags = await prisma.flag.findMany({ take: 10 })
     * 
     * // Only select the `FlagID`
     * const flagWithFlagIDOnly = await prisma.flag.findMany({ select: { FlagID: true } })
     * 
     */
    findMany<T extends FlagFindManyArgs>(args?: SelectSubset<T, FlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flag.
     * @param {FlagCreateArgs} args - Arguments to create a Flag.
     * @example
     * // Create one Flag
     * const Flag = await prisma.flag.create({
     *   data: {
     *     // ... data to create a Flag
     *   }
     * })
     * 
     */
    create<T extends FlagCreateArgs>(args: SelectSubset<T, FlagCreateArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flags.
     * @param {FlagCreateManyArgs} args - Arguments to create many Flags.
     * @example
     * // Create many Flags
     * const flag = await prisma.flag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlagCreateManyArgs>(args?: SelectSubset<T, FlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flags and returns the data saved in the database.
     * @param {FlagCreateManyAndReturnArgs} args - Arguments to create many Flags.
     * @example
     * // Create many Flags
     * const flag = await prisma.flag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flags and only return the `FlagID`
     * const flagWithFlagIDOnly = await prisma.flag.createManyAndReturn({
     *   select: { FlagID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlagCreateManyAndReturnArgs>(args?: SelectSubset<T, FlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flag.
     * @param {FlagDeleteArgs} args - Arguments to delete one Flag.
     * @example
     * // Delete one Flag
     * const Flag = await prisma.flag.delete({
     *   where: {
     *     // ... filter to delete one Flag
     *   }
     * })
     * 
     */
    delete<T extends FlagDeleteArgs>(args: SelectSubset<T, FlagDeleteArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flag.
     * @param {FlagUpdateArgs} args - Arguments to update one Flag.
     * @example
     * // Update one Flag
     * const flag = await prisma.flag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlagUpdateArgs>(args: SelectSubset<T, FlagUpdateArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flags.
     * @param {FlagDeleteManyArgs} args - Arguments to filter Flags to delete.
     * @example
     * // Delete a few Flags
     * const { count } = await prisma.flag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlagDeleteManyArgs>(args?: SelectSubset<T, FlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flags
     * const flag = await prisma.flag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlagUpdateManyArgs>(args: SelectSubset<T, FlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flags and returns the data updated in the database.
     * @param {FlagUpdateManyAndReturnArgs} args - Arguments to update many Flags.
     * @example
     * // Update many Flags
     * const flag = await prisma.flag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flags and only return the `FlagID`
     * const flagWithFlagIDOnly = await prisma.flag.updateManyAndReturn({
     *   select: { FlagID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlagUpdateManyAndReturnArgs>(args: SelectSubset<T, FlagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flag.
     * @param {FlagUpsertArgs} args - Arguments to update or create a Flag.
     * @example
     * // Update or create a Flag
     * const flag = await prisma.flag.upsert({
     *   create: {
     *     // ... data to create a Flag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flag we want to update
     *   }
     * })
     */
    upsert<T extends FlagUpsertArgs>(args: SelectSubset<T, FlagUpsertArgs<ExtArgs>>): Prisma__FlagClient<$Result.GetResult<Prisma.$FlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagCountArgs} args - Arguments to filter Flags to count.
     * @example
     * // Count the number of Flags
     * const count = await prisma.flag.count({
     *   where: {
     *     // ... the filter for the Flags we want to count
     *   }
     * })
    **/
    count<T extends FlagCountArgs>(
      args?: Subset<T, FlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlagAggregateArgs>(args: Subset<T, FlagAggregateArgs>): Prisma.PrismaPromise<GetFlagAggregateType<T>>

    /**
     * Group by Flag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlagGroupByArgs} args - Group by arguments.
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
      T extends FlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlagGroupByArgs['orderBy'] }
        : { orderBy?: FlagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flag model
   */
  readonly fields: FlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resource<T extends ResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ResourceDefaultArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Flag model
   */
  interface FlagFieldRefs {
    readonly FlagID: FieldRef<"Flag", 'Int'>
    readonly Reason: FieldRef<"Flag", 'String'>
    readonly Status: FieldRef<"Flag", 'String'>
    readonly Date: FieldRef<"Flag", 'DateTime'>
    readonly UserID: FieldRef<"Flag", 'Int'>
    readonly ResourceID: FieldRef<"Flag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Flag findUnique
   */
  export type FlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag findUniqueOrThrow
   */
  export type FlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag findFirst
   */
  export type FlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flags.
     */
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * Flag findFirstOrThrow
   */
  export type FlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flag to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flags.
     */
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * Flag findMany
   */
  export type FlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter, which Flags to fetch.
     */
    where?: FlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flags to fetch.
     */
    orderBy?: FlagOrderByWithRelationInput | FlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flags.
     */
    cursor?: FlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flags.
     */
    skip?: number
    distinct?: FlagScalarFieldEnum | FlagScalarFieldEnum[]
  }

  /**
   * Flag create
   */
  export type FlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The data needed to create a Flag.
     */
    data: XOR<FlagCreateInput, FlagUncheckedCreateInput>
  }

  /**
   * Flag createMany
   */
  export type FlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flags.
     */
    data: FlagCreateManyInput | FlagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flag createManyAndReturn
   */
  export type FlagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * The data used to create many Flags.
     */
    data: FlagCreateManyInput | FlagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flag update
   */
  export type FlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The data needed to update a Flag.
     */
    data: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
    /**
     * Choose, which Flag to update.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag updateMany
   */
  export type FlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flags.
     */
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyInput>
    /**
     * Filter which Flags to update
     */
    where?: FlagWhereInput
    /**
     * Limit how many Flags to update.
     */
    limit?: number
  }

  /**
   * Flag updateManyAndReturn
   */
  export type FlagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * The data used to update Flags.
     */
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyInput>
    /**
     * Filter which Flags to update
     */
    where?: FlagWhereInput
    /**
     * Limit how many Flags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flag upsert
   */
  export type FlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * The filter to search for the Flag to update in case it exists.
     */
    where: FlagWhereUniqueInput
    /**
     * In case the Flag found by the `where` argument doesn't exist, create a new Flag with this data.
     */
    create: XOR<FlagCreateInput, FlagUncheckedCreateInput>
    /**
     * In case the Flag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlagUpdateInput, FlagUncheckedUpdateInput>
  }

  /**
   * Flag delete
   */
  export type FlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
    /**
     * Filter which Flag to delete.
     */
    where: FlagWhereUniqueInput
  }

  /**
   * Flag deleteMany
   */
  export type FlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flags to delete
     */
    where?: FlagWhereInput
    /**
     * Limit how many Flags to delete.
     */
    limit?: number
  }

  /**
   * Flag without action
   */
  export type FlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flag
     */
    select?: FlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flag
     */
    omit?: FlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlagInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    UserID: 'UserID',
    Name: 'Name',
    Email: 'Email',
    PasswordHash: 'PasswordHash',
    Role: 'Role',
    Year: 'Year',
    Department: 'Department',
    ProfilePicture: 'ProfilePicture',
    Bio: 'Bio',
    JoinedDate: 'JoinedDate',
    LastLogin: 'LastLogin',
    ContributionScore: 'ContributionScore',
    Status: 'Status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    CourseID: 'CourseID',
    CourseName: 'CourseName',
    CourseCode: 'CourseCode',
    Department: 'Department',
    Year: 'Year',
    Semester: 'Semester',
    Description: 'Description',
    Instructor: 'Instructor',
    Status: 'Status'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    ResourceID: 'ResourceID',
    Title: 'Title',
    Description: 'Description',
    FilePath: 'FilePath',
    FileType: 'FileType',
    FileSize: 'FileSize',
    UploadDate: 'UploadDate',
    Version: 'Version',
    DownloadCount: 'DownloadCount',
    Status: 'Status',
    LastModified: 'LastModified',
    UserID: 'UserID',
    CourseID: 'CourseID'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const ResourceTagScalarFieldEnum: {
    ResourceID: 'ResourceID',
    Tag: 'Tag'
  };

  export type ResourceTagScalarFieldEnum = (typeof ResourceTagScalarFieldEnum)[keyof typeof ResourceTagScalarFieldEnum]


  export const BookScalarFieldEnum: {
    BookID: 'BookID',
    Title: 'Title',
    Author: 'Author',
    Edition: 'Edition',
    Condition: 'Condition',
    AvailabilityStatus: 'AvailabilityStatus',
    ListedDate: 'ListedDate',
    UserID: 'UserID'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BookTransactionScalarFieldEnum: {
    TransactionID: 'TransactionID',
    Status: 'Status',
    RequestDate: 'RequestDate',
    ApprovalDate: 'ApprovalDate',
    ReturnDate: 'ReturnDate',
    TransactionType: 'TransactionType',
    UserID: 'UserID',
    BookID: 'BookID'
  };

  export type BookTransactionScalarFieldEnum = (typeof BookTransactionScalarFieldEnum)[keyof typeof BookTransactionScalarFieldEnum]


  export const ForumScalarFieldEnum: {
    ForumID: 'ForumID',
    Title: 'Title',
    CreatedDate: 'CreatedDate',
    Status: 'Status',
    UserID: 'UserID',
    CourseID: 'CourseID'
  };

  export type ForumScalarFieldEnum = (typeof ForumScalarFieldEnum)[keyof typeof ForumScalarFieldEnum]


  export const DiscussionScalarFieldEnum: {
    DiscussionID: 'DiscussionID',
    Content: 'Content',
    Attachment: 'Attachment',
    Timestamp: 'Timestamp',
    Status: 'Status',
    UserID: 'UserID',
    ForumID: 'ForumID'
  };

  export type DiscussionScalarFieldEnum = (typeof DiscussionScalarFieldEnum)[keyof typeof DiscussionScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    RequestID: 'RequestID',
    Description: 'Description',
    Status: 'Status',
    CreatedDate: 'CreatedDate',
    FulfilledDate: 'FulfilledDate',
    UserID: 'UserID',
    CourseID: 'CourseID'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    UserID: 'UserID',
    ResourceID: 'ResourceID',
    RatingValue: 'RatingValue',
    Comment: 'Comment',
    Date: 'Date'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const FlagScalarFieldEnum: {
    FlagID: 'FlagID',
    Reason: 'Reason',
    Status: 'Status',
    Date: 'Date',
    UserID: 'UserID',
    ResourceID: 'ResourceID'
  };

  export type FlagScalarFieldEnum = (typeof FlagScalarFieldEnum)[keyof typeof FlagScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    UserID?: IntFilter<"User"> | number
    Name?: StringFilter<"User"> | string
    Email?: StringFilter<"User"> | string
    PasswordHash?: StringFilter<"User"> | string
    Role?: StringFilter<"User"> | string
    Year?: IntNullableFilter<"User"> | number | null
    Department?: StringNullableFilter<"User"> | string | null
    ProfilePicture?: StringNullableFilter<"User"> | string | null
    Bio?: StringNullableFilter<"User"> | string | null
    JoinedDate?: DateTimeFilter<"User"> | Date | string
    LastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    ContributionScore?: IntFilter<"User"> | number
    Status?: StringNullableFilter<"User"> | string | null
    resources?: ResourceListRelationFilter
    books?: BookListRelationFilter
    transactions?: BookTransactionListRelationFilter
    forums?: ForumListRelationFilter
    discussions?: DiscussionListRelationFilter
    requests?: RequestListRelationFilter
    ratings?: RatingListRelationFilter
    flags?: FlagListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    UserID?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    Role?: SortOrder
    Year?: SortOrderInput | SortOrder
    Department?: SortOrderInput | SortOrder
    ProfilePicture?: SortOrderInput | SortOrder
    Bio?: SortOrderInput | SortOrder
    JoinedDate?: SortOrder
    LastLogin?: SortOrderInput | SortOrder
    ContributionScore?: SortOrder
    Status?: SortOrderInput | SortOrder
    resources?: ResourceOrderByRelationAggregateInput
    books?: BookOrderByRelationAggregateInput
    transactions?: BookTransactionOrderByRelationAggregateInput
    forums?: ForumOrderByRelationAggregateInput
    discussions?: DiscussionOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    flags?: FlagOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    UserID?: number
    Email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Name?: StringFilter<"User"> | string
    PasswordHash?: StringFilter<"User"> | string
    Role?: StringFilter<"User"> | string
    Year?: IntNullableFilter<"User"> | number | null
    Department?: StringNullableFilter<"User"> | string | null
    ProfilePicture?: StringNullableFilter<"User"> | string | null
    Bio?: StringNullableFilter<"User"> | string | null
    JoinedDate?: DateTimeFilter<"User"> | Date | string
    LastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    ContributionScore?: IntFilter<"User"> | number
    Status?: StringNullableFilter<"User"> | string | null
    resources?: ResourceListRelationFilter
    books?: BookListRelationFilter
    transactions?: BookTransactionListRelationFilter
    forums?: ForumListRelationFilter
    discussions?: DiscussionListRelationFilter
    requests?: RequestListRelationFilter
    ratings?: RatingListRelationFilter
    flags?: FlagListRelationFilter
  }, "UserID" | "Email">

  export type UserOrderByWithAggregationInput = {
    UserID?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    Role?: SortOrder
    Year?: SortOrderInput | SortOrder
    Department?: SortOrderInput | SortOrder
    ProfilePicture?: SortOrderInput | SortOrder
    Bio?: SortOrderInput | SortOrder
    JoinedDate?: SortOrder
    LastLogin?: SortOrderInput | SortOrder
    ContributionScore?: SortOrder
    Status?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    UserID?: IntWithAggregatesFilter<"User"> | number
    Name?: StringWithAggregatesFilter<"User"> | string
    Email?: StringWithAggregatesFilter<"User"> | string
    PasswordHash?: StringWithAggregatesFilter<"User"> | string
    Role?: StringWithAggregatesFilter<"User"> | string
    Year?: IntNullableWithAggregatesFilter<"User"> | number | null
    Department?: StringNullableWithAggregatesFilter<"User"> | string | null
    ProfilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    Bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    JoinedDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    LastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    ContributionScore?: IntWithAggregatesFilter<"User"> | number
    Status?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    CourseID?: IntFilter<"Course"> | number
    CourseName?: StringFilter<"Course"> | string
    CourseCode?: StringFilter<"Course"> | string
    Department?: StringNullableFilter<"Course"> | string | null
    Year?: IntNullableFilter<"Course"> | number | null
    Semester?: IntNullableFilter<"Course"> | number | null
    Description?: StringNullableFilter<"Course"> | string | null
    Instructor?: StringNullableFilter<"Course"> | string | null
    Status?: StringNullableFilter<"Course"> | string | null
    resources?: ResourceListRelationFilter
    forums?: ForumListRelationFilter
    requests?: RequestListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    CourseID?: SortOrder
    CourseName?: SortOrder
    CourseCode?: SortOrder
    Department?: SortOrderInput | SortOrder
    Year?: SortOrderInput | SortOrder
    Semester?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Instructor?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    resources?: ResourceOrderByRelationAggregateInput
    forums?: ForumOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    CourseID?: number
    CourseCode?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    CourseName?: StringFilter<"Course"> | string
    Department?: StringNullableFilter<"Course"> | string | null
    Year?: IntNullableFilter<"Course"> | number | null
    Semester?: IntNullableFilter<"Course"> | number | null
    Description?: StringNullableFilter<"Course"> | string | null
    Instructor?: StringNullableFilter<"Course"> | string | null
    Status?: StringNullableFilter<"Course"> | string | null
    resources?: ResourceListRelationFilter
    forums?: ForumListRelationFilter
    requests?: RequestListRelationFilter
  }, "CourseID" | "CourseCode">

  export type CourseOrderByWithAggregationInput = {
    CourseID?: SortOrder
    CourseName?: SortOrder
    CourseCode?: SortOrder
    Department?: SortOrderInput | SortOrder
    Year?: SortOrderInput | SortOrder
    Semester?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Instructor?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    CourseID?: IntWithAggregatesFilter<"Course"> | number
    CourseName?: StringWithAggregatesFilter<"Course"> | string
    CourseCode?: StringWithAggregatesFilter<"Course"> | string
    Department?: StringNullableWithAggregatesFilter<"Course"> | string | null
    Year?: IntNullableWithAggregatesFilter<"Course"> | number | null
    Semester?: IntNullableWithAggregatesFilter<"Course"> | number | null
    Description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    Instructor?: StringNullableWithAggregatesFilter<"Course"> | string | null
    Status?: StringNullableWithAggregatesFilter<"Course"> | string | null
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    ResourceID?: IntFilter<"Resource"> | number
    Title?: StringFilter<"Resource"> | string
    Description?: StringNullableFilter<"Resource"> | string | null
    FilePath?: StringFilter<"Resource"> | string
    FileType?: StringNullableFilter<"Resource"> | string | null
    FileSize?: IntNullableFilter<"Resource"> | number | null
    UploadDate?: DateTimeFilter<"Resource"> | Date | string
    Version?: IntNullableFilter<"Resource"> | number | null
    DownloadCount?: IntNullableFilter<"Resource"> | number | null
    Status?: StringNullableFilter<"Resource"> | string | null
    LastModified?: DateTimeNullableFilter<"Resource"> | Date | string | null
    UserID?: IntFilter<"Resource"> | number
    CourseID?: IntFilter<"Resource"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    tags?: ResourceTagListRelationFilter
    ratings?: RatingListRelationFilter
    flags?: FlagListRelationFilter
  }

  export type ResourceOrderByWithRelationInput = {
    ResourceID?: SortOrder
    Title?: SortOrder
    Description?: SortOrderInput | SortOrder
    FilePath?: SortOrder
    FileType?: SortOrderInput | SortOrder
    FileSize?: SortOrderInput | SortOrder
    UploadDate?: SortOrder
    Version?: SortOrderInput | SortOrder
    DownloadCount?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    LastModified?: SortOrderInput | SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    tags?: ResourceTagOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    flags?: FlagOrderByRelationAggregateInput
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    ResourceID?: number
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    Title?: StringFilter<"Resource"> | string
    Description?: StringNullableFilter<"Resource"> | string | null
    FilePath?: StringFilter<"Resource"> | string
    FileType?: StringNullableFilter<"Resource"> | string | null
    FileSize?: IntNullableFilter<"Resource"> | number | null
    UploadDate?: DateTimeFilter<"Resource"> | Date | string
    Version?: IntNullableFilter<"Resource"> | number | null
    DownloadCount?: IntNullableFilter<"Resource"> | number | null
    Status?: StringNullableFilter<"Resource"> | string | null
    LastModified?: DateTimeNullableFilter<"Resource"> | Date | string | null
    UserID?: IntFilter<"Resource"> | number
    CourseID?: IntFilter<"Resource"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    tags?: ResourceTagListRelationFilter
    ratings?: RatingListRelationFilter
    flags?: FlagListRelationFilter
  }, "ResourceID">

  export type ResourceOrderByWithAggregationInput = {
    ResourceID?: SortOrder
    Title?: SortOrder
    Description?: SortOrderInput | SortOrder
    FilePath?: SortOrder
    FileType?: SortOrderInput | SortOrder
    FileSize?: SortOrderInput | SortOrder
    UploadDate?: SortOrder
    Version?: SortOrderInput | SortOrder
    DownloadCount?: SortOrderInput | SortOrder
    Status?: SortOrderInput | SortOrder
    LastModified?: SortOrderInput | SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _avg?: ResourceAvgOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
    _sum?: ResourceSumOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    ResourceID?: IntWithAggregatesFilter<"Resource"> | number
    Title?: StringWithAggregatesFilter<"Resource"> | string
    Description?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    FilePath?: StringWithAggregatesFilter<"Resource"> | string
    FileType?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    FileSize?: IntNullableWithAggregatesFilter<"Resource"> | number | null
    UploadDate?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
    Version?: IntNullableWithAggregatesFilter<"Resource"> | number | null
    DownloadCount?: IntNullableWithAggregatesFilter<"Resource"> | number | null
    Status?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    LastModified?: DateTimeNullableWithAggregatesFilter<"Resource"> | Date | string | null
    UserID?: IntWithAggregatesFilter<"Resource"> | number
    CourseID?: IntWithAggregatesFilter<"Resource"> | number
  }

  export type ResourceTagWhereInput = {
    AND?: ResourceTagWhereInput | ResourceTagWhereInput[]
    OR?: ResourceTagWhereInput[]
    NOT?: ResourceTagWhereInput | ResourceTagWhereInput[]
    ResourceID?: IntFilter<"ResourceTag"> | number
    Tag?: StringFilter<"ResourceTag"> | string
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }

  export type ResourceTagOrderByWithRelationInput = {
    ResourceID?: SortOrder
    Tag?: SortOrder
    resource?: ResourceOrderByWithRelationInput
  }

  export type ResourceTagWhereUniqueInput = Prisma.AtLeast<{
    ResourceID_Tag?: ResourceTagResourceIDTagCompoundUniqueInput
    AND?: ResourceTagWhereInput | ResourceTagWhereInput[]
    OR?: ResourceTagWhereInput[]
    NOT?: ResourceTagWhereInput | ResourceTagWhereInput[]
    ResourceID?: IntFilter<"ResourceTag"> | number
    Tag?: StringFilter<"ResourceTag"> | string
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }, "ResourceID_Tag">

  export type ResourceTagOrderByWithAggregationInput = {
    ResourceID?: SortOrder
    Tag?: SortOrder
    _count?: ResourceTagCountOrderByAggregateInput
    _avg?: ResourceTagAvgOrderByAggregateInput
    _max?: ResourceTagMaxOrderByAggregateInput
    _min?: ResourceTagMinOrderByAggregateInput
    _sum?: ResourceTagSumOrderByAggregateInput
  }

  export type ResourceTagScalarWhereWithAggregatesInput = {
    AND?: ResourceTagScalarWhereWithAggregatesInput | ResourceTagScalarWhereWithAggregatesInput[]
    OR?: ResourceTagScalarWhereWithAggregatesInput[]
    NOT?: ResourceTagScalarWhereWithAggregatesInput | ResourceTagScalarWhereWithAggregatesInput[]
    ResourceID?: IntWithAggregatesFilter<"ResourceTag"> | number
    Tag?: StringWithAggregatesFilter<"ResourceTag"> | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    BookID?: IntFilter<"Book"> | number
    Title?: StringFilter<"Book"> | string
    Author?: StringFilter<"Book"> | string
    Edition?: StringNullableFilter<"Book"> | string | null
    Condition?: StringNullableFilter<"Book"> | string | null
    AvailabilityStatus?: StringNullableFilter<"Book"> | string | null
    ListedDate?: DateTimeFilter<"Book"> | Date | string
    UserID?: IntFilter<"Book"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: BookTransactionListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    BookID?: SortOrder
    Title?: SortOrder
    Author?: SortOrder
    Edition?: SortOrderInput | SortOrder
    Condition?: SortOrderInput | SortOrder
    AvailabilityStatus?: SortOrderInput | SortOrder
    ListedDate?: SortOrder
    UserID?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: BookTransactionOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    BookID?: number
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    Title?: StringFilter<"Book"> | string
    Author?: StringFilter<"Book"> | string
    Edition?: StringNullableFilter<"Book"> | string | null
    Condition?: StringNullableFilter<"Book"> | string | null
    AvailabilityStatus?: StringNullableFilter<"Book"> | string | null
    ListedDate?: DateTimeFilter<"Book"> | Date | string
    UserID?: IntFilter<"Book"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: BookTransactionListRelationFilter
  }, "BookID">

  export type BookOrderByWithAggregationInput = {
    BookID?: SortOrder
    Title?: SortOrder
    Author?: SortOrder
    Edition?: SortOrderInput | SortOrder
    Condition?: SortOrderInput | SortOrder
    AvailabilityStatus?: SortOrderInput | SortOrder
    ListedDate?: SortOrder
    UserID?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    BookID?: IntWithAggregatesFilter<"Book"> | number
    Title?: StringWithAggregatesFilter<"Book"> | string
    Author?: StringWithAggregatesFilter<"Book"> | string
    Edition?: StringNullableWithAggregatesFilter<"Book"> | string | null
    Condition?: StringNullableWithAggregatesFilter<"Book"> | string | null
    AvailabilityStatus?: StringNullableWithAggregatesFilter<"Book"> | string | null
    ListedDate?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    UserID?: IntWithAggregatesFilter<"Book"> | number
  }

  export type BookTransactionWhereInput = {
    AND?: BookTransactionWhereInput | BookTransactionWhereInput[]
    OR?: BookTransactionWhereInput[]
    NOT?: BookTransactionWhereInput | BookTransactionWhereInput[]
    TransactionID?: IntFilter<"BookTransaction"> | number
    Status?: StringNullableFilter<"BookTransaction"> | string | null
    RequestDate?: DateTimeFilter<"BookTransaction"> | Date | string
    ApprovalDate?: DateTimeNullableFilter<"BookTransaction"> | Date | string | null
    ReturnDate?: DateTimeNullableFilter<"BookTransaction"> | Date | string | null
    TransactionType?: StringNullableFilter<"BookTransaction"> | string | null
    UserID?: IntFilter<"BookTransaction"> | number
    BookID?: IntFilter<"BookTransaction"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookTransactionOrderByWithRelationInput = {
    TransactionID?: SortOrder
    Status?: SortOrderInput | SortOrder
    RequestDate?: SortOrder
    ApprovalDate?: SortOrderInput | SortOrder
    ReturnDate?: SortOrderInput | SortOrder
    TransactionType?: SortOrderInput | SortOrder
    UserID?: SortOrder
    BookID?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type BookTransactionWhereUniqueInput = Prisma.AtLeast<{
    TransactionID?: number
    AND?: BookTransactionWhereInput | BookTransactionWhereInput[]
    OR?: BookTransactionWhereInput[]
    NOT?: BookTransactionWhereInput | BookTransactionWhereInput[]
    Status?: StringNullableFilter<"BookTransaction"> | string | null
    RequestDate?: DateTimeFilter<"BookTransaction"> | Date | string
    ApprovalDate?: DateTimeNullableFilter<"BookTransaction"> | Date | string | null
    ReturnDate?: DateTimeNullableFilter<"BookTransaction"> | Date | string | null
    TransactionType?: StringNullableFilter<"BookTransaction"> | string | null
    UserID?: IntFilter<"BookTransaction"> | number
    BookID?: IntFilter<"BookTransaction"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "TransactionID">

  export type BookTransactionOrderByWithAggregationInput = {
    TransactionID?: SortOrder
    Status?: SortOrderInput | SortOrder
    RequestDate?: SortOrder
    ApprovalDate?: SortOrderInput | SortOrder
    ReturnDate?: SortOrderInput | SortOrder
    TransactionType?: SortOrderInput | SortOrder
    UserID?: SortOrder
    BookID?: SortOrder
    _count?: BookTransactionCountOrderByAggregateInput
    _avg?: BookTransactionAvgOrderByAggregateInput
    _max?: BookTransactionMaxOrderByAggregateInput
    _min?: BookTransactionMinOrderByAggregateInput
    _sum?: BookTransactionSumOrderByAggregateInput
  }

  export type BookTransactionScalarWhereWithAggregatesInput = {
    AND?: BookTransactionScalarWhereWithAggregatesInput | BookTransactionScalarWhereWithAggregatesInput[]
    OR?: BookTransactionScalarWhereWithAggregatesInput[]
    NOT?: BookTransactionScalarWhereWithAggregatesInput | BookTransactionScalarWhereWithAggregatesInput[]
    TransactionID?: IntWithAggregatesFilter<"BookTransaction"> | number
    Status?: StringNullableWithAggregatesFilter<"BookTransaction"> | string | null
    RequestDate?: DateTimeWithAggregatesFilter<"BookTransaction"> | Date | string
    ApprovalDate?: DateTimeNullableWithAggregatesFilter<"BookTransaction"> | Date | string | null
    ReturnDate?: DateTimeNullableWithAggregatesFilter<"BookTransaction"> | Date | string | null
    TransactionType?: StringNullableWithAggregatesFilter<"BookTransaction"> | string | null
    UserID?: IntWithAggregatesFilter<"BookTransaction"> | number
    BookID?: IntWithAggregatesFilter<"BookTransaction"> | number
  }

  export type ForumWhereInput = {
    AND?: ForumWhereInput | ForumWhereInput[]
    OR?: ForumWhereInput[]
    NOT?: ForumWhereInput | ForumWhereInput[]
    ForumID?: IntFilter<"Forum"> | number
    Title?: StringFilter<"Forum"> | string
    CreatedDate?: DateTimeFilter<"Forum"> | Date | string
    Status?: StringNullableFilter<"Forum"> | string | null
    UserID?: IntFilter<"Forum"> | number
    CourseID?: IntFilter<"Forum"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    discussions?: DiscussionListRelationFilter
  }

  export type ForumOrderByWithRelationInput = {
    ForumID?: SortOrder
    Title?: SortOrder
    CreatedDate?: SortOrder
    Status?: SortOrderInput | SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    discussions?: DiscussionOrderByRelationAggregateInput
  }

  export type ForumWhereUniqueInput = Prisma.AtLeast<{
    ForumID?: number
    AND?: ForumWhereInput | ForumWhereInput[]
    OR?: ForumWhereInput[]
    NOT?: ForumWhereInput | ForumWhereInput[]
    Title?: StringFilter<"Forum"> | string
    CreatedDate?: DateTimeFilter<"Forum"> | Date | string
    Status?: StringNullableFilter<"Forum"> | string | null
    UserID?: IntFilter<"Forum"> | number
    CourseID?: IntFilter<"Forum"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    discussions?: DiscussionListRelationFilter
  }, "ForumID">

  export type ForumOrderByWithAggregationInput = {
    ForumID?: SortOrder
    Title?: SortOrder
    CreatedDate?: SortOrder
    Status?: SortOrderInput | SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
    _count?: ForumCountOrderByAggregateInput
    _avg?: ForumAvgOrderByAggregateInput
    _max?: ForumMaxOrderByAggregateInput
    _min?: ForumMinOrderByAggregateInput
    _sum?: ForumSumOrderByAggregateInput
  }

  export type ForumScalarWhereWithAggregatesInput = {
    AND?: ForumScalarWhereWithAggregatesInput | ForumScalarWhereWithAggregatesInput[]
    OR?: ForumScalarWhereWithAggregatesInput[]
    NOT?: ForumScalarWhereWithAggregatesInput | ForumScalarWhereWithAggregatesInput[]
    ForumID?: IntWithAggregatesFilter<"Forum"> | number
    Title?: StringWithAggregatesFilter<"Forum"> | string
    CreatedDate?: DateTimeWithAggregatesFilter<"Forum"> | Date | string
    Status?: StringNullableWithAggregatesFilter<"Forum"> | string | null
    UserID?: IntWithAggregatesFilter<"Forum"> | number
    CourseID?: IntWithAggregatesFilter<"Forum"> | number
  }

  export type DiscussionWhereInput = {
    AND?: DiscussionWhereInput | DiscussionWhereInput[]
    OR?: DiscussionWhereInput[]
    NOT?: DiscussionWhereInput | DiscussionWhereInput[]
    DiscussionID?: IntFilter<"Discussion"> | number
    Content?: StringFilter<"Discussion"> | string
    Attachment?: StringNullableFilter<"Discussion"> | string | null
    Timestamp?: DateTimeFilter<"Discussion"> | Date | string
    Status?: StringNullableFilter<"Discussion"> | string | null
    UserID?: IntFilter<"Discussion"> | number
    ForumID?: IntFilter<"Discussion"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    forum?: XOR<ForumScalarRelationFilter, ForumWhereInput>
  }

  export type DiscussionOrderByWithRelationInput = {
    DiscussionID?: SortOrder
    Content?: SortOrder
    Attachment?: SortOrderInput | SortOrder
    Timestamp?: SortOrder
    Status?: SortOrderInput | SortOrder
    UserID?: SortOrder
    ForumID?: SortOrder
    user?: UserOrderByWithRelationInput
    forum?: ForumOrderByWithRelationInput
  }

  export type DiscussionWhereUniqueInput = Prisma.AtLeast<{
    DiscussionID?: number
    AND?: DiscussionWhereInput | DiscussionWhereInput[]
    OR?: DiscussionWhereInput[]
    NOT?: DiscussionWhereInput | DiscussionWhereInput[]
    Content?: StringFilter<"Discussion"> | string
    Attachment?: StringNullableFilter<"Discussion"> | string | null
    Timestamp?: DateTimeFilter<"Discussion"> | Date | string
    Status?: StringNullableFilter<"Discussion"> | string | null
    UserID?: IntFilter<"Discussion"> | number
    ForumID?: IntFilter<"Discussion"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    forum?: XOR<ForumScalarRelationFilter, ForumWhereInput>
  }, "DiscussionID">

  export type DiscussionOrderByWithAggregationInput = {
    DiscussionID?: SortOrder
    Content?: SortOrder
    Attachment?: SortOrderInput | SortOrder
    Timestamp?: SortOrder
    Status?: SortOrderInput | SortOrder
    UserID?: SortOrder
    ForumID?: SortOrder
    _count?: DiscussionCountOrderByAggregateInput
    _avg?: DiscussionAvgOrderByAggregateInput
    _max?: DiscussionMaxOrderByAggregateInput
    _min?: DiscussionMinOrderByAggregateInput
    _sum?: DiscussionSumOrderByAggregateInput
  }

  export type DiscussionScalarWhereWithAggregatesInput = {
    AND?: DiscussionScalarWhereWithAggregatesInput | DiscussionScalarWhereWithAggregatesInput[]
    OR?: DiscussionScalarWhereWithAggregatesInput[]
    NOT?: DiscussionScalarWhereWithAggregatesInput | DiscussionScalarWhereWithAggregatesInput[]
    DiscussionID?: IntWithAggregatesFilter<"Discussion"> | number
    Content?: StringWithAggregatesFilter<"Discussion"> | string
    Attachment?: StringNullableWithAggregatesFilter<"Discussion"> | string | null
    Timestamp?: DateTimeWithAggregatesFilter<"Discussion"> | Date | string
    Status?: StringNullableWithAggregatesFilter<"Discussion"> | string | null
    UserID?: IntWithAggregatesFilter<"Discussion"> | number
    ForumID?: IntWithAggregatesFilter<"Discussion"> | number
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    RequestID?: IntFilter<"Request"> | number
    Description?: StringFilter<"Request"> | string
    Status?: StringNullableFilter<"Request"> | string | null
    CreatedDate?: DateTimeFilter<"Request"> | Date | string
    FulfilledDate?: DateTimeNullableFilter<"Request"> | Date | string | null
    UserID?: IntFilter<"Request"> | number
    CourseID?: IntFilter<"Request"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type RequestOrderByWithRelationInput = {
    RequestID?: SortOrder
    Description?: SortOrder
    Status?: SortOrderInput | SortOrder
    CreatedDate?: SortOrder
    FulfilledDate?: SortOrderInput | SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    RequestID?: number
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    Description?: StringFilter<"Request"> | string
    Status?: StringNullableFilter<"Request"> | string | null
    CreatedDate?: DateTimeFilter<"Request"> | Date | string
    FulfilledDate?: DateTimeNullableFilter<"Request"> | Date | string | null
    UserID?: IntFilter<"Request"> | number
    CourseID?: IntFilter<"Request"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "RequestID">

  export type RequestOrderByWithAggregationInput = {
    RequestID?: SortOrder
    Description?: SortOrder
    Status?: SortOrderInput | SortOrder
    CreatedDate?: SortOrder
    FulfilledDate?: SortOrderInput | SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
    _count?: RequestCountOrderByAggregateInput
    _avg?: RequestAvgOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
    _sum?: RequestSumOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    RequestID?: IntWithAggregatesFilter<"Request"> | number
    Description?: StringWithAggregatesFilter<"Request"> | string
    Status?: StringNullableWithAggregatesFilter<"Request"> | string | null
    CreatedDate?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    FulfilledDate?: DateTimeNullableWithAggregatesFilter<"Request"> | Date | string | null
    UserID?: IntWithAggregatesFilter<"Request"> | number
    CourseID?: IntWithAggregatesFilter<"Request"> | number
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    UserID?: IntFilter<"Rating"> | number
    ResourceID?: IntFilter<"Rating"> | number
    RatingValue?: IntFilter<"Rating"> | number
    Comment?: StringNullableFilter<"Rating"> | string | null
    Date?: DateTimeFilter<"Rating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    UserID?: SortOrder
    ResourceID?: SortOrder
    RatingValue?: SortOrder
    Comment?: SortOrderInput | SortOrder
    Date?: SortOrder
    user?: UserOrderByWithRelationInput
    resource?: ResourceOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    UserID_ResourceID?: RatingUserIDResourceIDCompoundUniqueInput
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    UserID?: IntFilter<"Rating"> | number
    ResourceID?: IntFilter<"Rating"> | number
    RatingValue?: IntFilter<"Rating"> | number
    Comment?: StringNullableFilter<"Rating"> | string | null
    Date?: DateTimeFilter<"Rating"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }, "UserID_ResourceID">

  export type RatingOrderByWithAggregationInput = {
    UserID?: SortOrder
    ResourceID?: SortOrder
    RatingValue?: SortOrder
    Comment?: SortOrderInput | SortOrder
    Date?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    UserID?: IntWithAggregatesFilter<"Rating"> | number
    ResourceID?: IntWithAggregatesFilter<"Rating"> | number
    RatingValue?: IntWithAggregatesFilter<"Rating"> | number
    Comment?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    Date?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type FlagWhereInput = {
    AND?: FlagWhereInput | FlagWhereInput[]
    OR?: FlagWhereInput[]
    NOT?: FlagWhereInput | FlagWhereInput[]
    FlagID?: IntFilter<"Flag"> | number
    Reason?: StringFilter<"Flag"> | string
    Status?: StringNullableFilter<"Flag"> | string | null
    Date?: DateTimeFilter<"Flag"> | Date | string
    UserID?: IntFilter<"Flag"> | number
    ResourceID?: IntFilter<"Flag"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }

  export type FlagOrderByWithRelationInput = {
    FlagID?: SortOrder
    Reason?: SortOrder
    Status?: SortOrderInput | SortOrder
    Date?: SortOrder
    UserID?: SortOrder
    ResourceID?: SortOrder
    user?: UserOrderByWithRelationInput
    resource?: ResourceOrderByWithRelationInput
  }

  export type FlagWhereUniqueInput = Prisma.AtLeast<{
    FlagID?: number
    AND?: FlagWhereInput | FlagWhereInput[]
    OR?: FlagWhereInput[]
    NOT?: FlagWhereInput | FlagWhereInput[]
    Reason?: StringFilter<"Flag"> | string
    Status?: StringNullableFilter<"Flag"> | string | null
    Date?: DateTimeFilter<"Flag"> | Date | string
    UserID?: IntFilter<"Flag"> | number
    ResourceID?: IntFilter<"Flag"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    resource?: XOR<ResourceScalarRelationFilter, ResourceWhereInput>
  }, "FlagID">

  export type FlagOrderByWithAggregationInput = {
    FlagID?: SortOrder
    Reason?: SortOrder
    Status?: SortOrderInput | SortOrder
    Date?: SortOrder
    UserID?: SortOrder
    ResourceID?: SortOrder
    _count?: FlagCountOrderByAggregateInput
    _avg?: FlagAvgOrderByAggregateInput
    _max?: FlagMaxOrderByAggregateInput
    _min?: FlagMinOrderByAggregateInput
    _sum?: FlagSumOrderByAggregateInput
  }

  export type FlagScalarWhereWithAggregatesInput = {
    AND?: FlagScalarWhereWithAggregatesInput | FlagScalarWhereWithAggregatesInput[]
    OR?: FlagScalarWhereWithAggregatesInput[]
    NOT?: FlagScalarWhereWithAggregatesInput | FlagScalarWhereWithAggregatesInput[]
    FlagID?: IntWithAggregatesFilter<"Flag"> | number
    Reason?: StringWithAggregatesFilter<"Flag"> | string
    Status?: StringNullableWithAggregatesFilter<"Flag"> | string | null
    Date?: DateTimeWithAggregatesFilter<"Flag"> | Date | string
    UserID?: IntWithAggregatesFilter<"Flag"> | number
    ResourceID?: IntWithAggregatesFilter<"Flag"> | number
  }

  export type UserCreateInput = {
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    transactions?: BookTransactionCreateNestedManyWithoutUserInput
    forums?: ForumCreateNestedManyWithoutUserInput
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    UserID?: number
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    transactions?: BookTransactionUncheckedCreateNestedManyWithoutUserInput
    forums?: ForumUncheckedCreateNestedManyWithoutUserInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUpdateManyWithoutUserNestedInput
    forums?: ForumUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUncheckedUpdateManyWithoutUserNestedInput
    forums?: ForumUncheckedUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    UserID?: number
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
  }

  export type UserUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateInput = {
    CourseName: string
    CourseCode: string
    Department?: string | null
    Year?: number | null
    Semester?: number | null
    Description?: string | null
    Instructor?: string | null
    Status?: string | null
    resources?: ResourceCreateNestedManyWithoutCourseInput
    forums?: ForumCreateNestedManyWithoutCourseInput
    requests?: RequestCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    CourseID?: number
    CourseName: string
    CourseCode: string
    Department?: string | null
    Year?: number | null
    Semester?: number | null
    Description?: string | null
    Instructor?: string | null
    Status?: string | null
    resources?: ResourceUncheckedCreateNestedManyWithoutCourseInput
    forums?: ForumUncheckedCreateNestedManyWithoutCourseInput
    requests?: RequestUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    CourseName?: StringFieldUpdateOperationsInput | string
    CourseCode?: StringFieldUpdateOperationsInput | string
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUpdateManyWithoutCourseNestedInput
    forums?: ForumUpdateManyWithoutCourseNestedInput
    requests?: RequestUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    CourseID?: IntFieldUpdateOperationsInput | number
    CourseName?: StringFieldUpdateOperationsInput | string
    CourseCode?: StringFieldUpdateOperationsInput | string
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUncheckedUpdateManyWithoutCourseNestedInput
    forums?: ForumUncheckedUpdateManyWithoutCourseNestedInput
    requests?: RequestUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    CourseID?: number
    CourseName: string
    CourseCode: string
    Department?: string | null
    Year?: number | null
    Semester?: number | null
    Description?: string | null
    Instructor?: string | null
    Status?: string | null
  }

  export type CourseUpdateManyMutationInput = {
    CourseName?: StringFieldUpdateOperationsInput | string
    CourseCode?: StringFieldUpdateOperationsInput | string
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseUncheckedUpdateManyInput = {
    CourseID?: IntFieldUpdateOperationsInput | number
    CourseName?: StringFieldUpdateOperationsInput | string
    CourseCode?: StringFieldUpdateOperationsInput | string
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResourceCreateInput = {
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    user: UserCreateNestedOneWithoutResourcesInput
    course: CourseCreateNestedOneWithoutResourcesInput
    tags?: ResourceTagCreateNestedManyWithoutResourceInput
    ratings?: RatingCreateNestedManyWithoutResourceInput
    flags?: FlagCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateInput = {
    ResourceID?: number
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    UserID: number
    CourseID: number
    tags?: ResourceTagUncheckedCreateNestedManyWithoutResourceInput
    ratings?: RatingUncheckedCreateNestedManyWithoutResourceInput
    flags?: FlagUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceUpdateInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutResourcesNestedInput
    course?: CourseUpdateOneRequiredWithoutResourcesNestedInput
    tags?: ResourceTagUpdateManyWithoutResourceNestedInput
    ratings?: RatingUpdateManyWithoutResourceNestedInput
    flags?: FlagUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    CourseID?: IntFieldUpdateOperationsInput | number
    tags?: ResourceTagUncheckedUpdateManyWithoutResourceNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutResourceNestedInput
    flags?: FlagUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceCreateManyInput = {
    ResourceID?: number
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    UserID: number
    CourseID: number
  }

  export type ResourceUpdateManyMutationInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResourceUncheckedUpdateManyInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    CourseID?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceTagCreateInput = {
    Tag: string
    resource: ResourceCreateNestedOneWithoutTagsInput
  }

  export type ResourceTagUncheckedCreateInput = {
    ResourceID: number
    Tag: string
  }

  export type ResourceTagUpdateInput = {
    Tag?: StringFieldUpdateOperationsInput | string
    resource?: ResourceUpdateOneRequiredWithoutTagsNestedInput
  }

  export type ResourceTagUncheckedUpdateInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    Tag?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceTagCreateManyInput = {
    ResourceID: number
    Tag: string
  }

  export type ResourceTagUpdateManyMutationInput = {
    Tag?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceTagUncheckedUpdateManyInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    Tag?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateInput = {
    Title: string
    Author: string
    Edition?: string | null
    Condition?: string | null
    AvailabilityStatus?: string | null
    ListedDate?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    transactions?: BookTransactionCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    BookID?: number
    Title: string
    Author: string
    Edition?: string | null
    Condition?: string | null
    AvailabilityStatus?: string | null
    ListedDate?: Date | string
    UserID: number
    transactions?: BookTransactionUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Edition?: NullableStringFieldUpdateOperationsInput | string | null
    Condition?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ListedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    transactions?: BookTransactionUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    BookID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Edition?: NullableStringFieldUpdateOperationsInput | string | null
    Condition?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ListedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
    transactions?: BookTransactionUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    BookID?: number
    Title: string
    Author: string
    Edition?: string | null
    Condition?: string | null
    AvailabilityStatus?: string | null
    ListedDate?: Date | string
    UserID: number
  }

  export type BookUpdateManyMutationInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Edition?: NullableStringFieldUpdateOperationsInput | string | null
    Condition?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ListedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    BookID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Edition?: NullableStringFieldUpdateOperationsInput | string | null
    Condition?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ListedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type BookTransactionCreateInput = {
    Status?: string | null
    RequestDate?: Date | string
    ApprovalDate?: Date | string | null
    ReturnDate?: Date | string | null
    TransactionType?: string | null
    user: UserCreateNestedOneWithoutTransactionsInput
    book: BookCreateNestedOneWithoutTransactionsInput
  }

  export type BookTransactionUncheckedCreateInput = {
    TransactionID?: number
    Status?: string | null
    RequestDate?: Date | string
    ApprovalDate?: Date | string | null
    ReturnDate?: Date | string | null
    TransactionType?: string | null
    UserID: number
    BookID: number
  }

  export type BookTransactionUpdateInput = {
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    RequestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ApprovalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReturnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    book?: BookUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type BookTransactionUncheckedUpdateInput = {
    TransactionID?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    RequestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ApprovalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReturnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    BookID?: IntFieldUpdateOperationsInput | number
  }

  export type BookTransactionCreateManyInput = {
    TransactionID?: number
    Status?: string | null
    RequestDate?: Date | string
    ApprovalDate?: Date | string | null
    ReturnDate?: Date | string | null
    TransactionType?: string | null
    UserID: number
    BookID: number
  }

  export type BookTransactionUpdateManyMutationInput = {
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    RequestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ApprovalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReturnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TransactionType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookTransactionUncheckedUpdateManyInput = {
    TransactionID?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    RequestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ApprovalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReturnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    BookID?: IntFieldUpdateOperationsInput | number
  }

  export type ForumCreateInput = {
    Title: string
    CreatedDate?: Date | string
    Status?: string | null
    user: UserCreateNestedOneWithoutForumsInput
    course: CourseCreateNestedOneWithoutForumsInput
    discussions?: DiscussionCreateNestedManyWithoutForumInput
  }

  export type ForumUncheckedCreateInput = {
    ForumID?: number
    Title: string
    CreatedDate?: Date | string
    Status?: string | null
    UserID: number
    CourseID: number
    discussions?: DiscussionUncheckedCreateNestedManyWithoutForumInput
  }

  export type ForumUpdateInput = {
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutForumsNestedInput
    course?: CourseUpdateOneRequiredWithoutForumsNestedInput
    discussions?: DiscussionUpdateManyWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateInput = {
    ForumID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    CourseID?: IntFieldUpdateOperationsInput | number
    discussions?: DiscussionUncheckedUpdateManyWithoutForumNestedInput
  }

  export type ForumCreateManyInput = {
    ForumID?: number
    Title: string
    CreatedDate?: Date | string
    Status?: string | null
    UserID: number
    CourseID: number
  }

  export type ForumUpdateManyMutationInput = {
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ForumUncheckedUpdateManyInput = {
    ForumID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    CourseID?: IntFieldUpdateOperationsInput | number
  }

  export type DiscussionCreateInput = {
    Content: string
    Attachment?: string | null
    Timestamp?: Date | string
    Status?: string | null
    user: UserCreateNestedOneWithoutDiscussionsInput
    forum: ForumCreateNestedOneWithoutDiscussionsInput
  }

  export type DiscussionUncheckedCreateInput = {
    DiscussionID?: number
    Content: string
    Attachment?: string | null
    Timestamp?: Date | string
    Status?: string | null
    UserID: number
    ForumID: number
  }

  export type DiscussionUpdateInput = {
    Content?: StringFieldUpdateOperationsInput | string
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDiscussionsNestedInput
    forum?: ForumUpdateOneRequiredWithoutDiscussionsNestedInput
  }

  export type DiscussionUncheckedUpdateInput = {
    DiscussionID?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    ForumID?: IntFieldUpdateOperationsInput | number
  }

  export type DiscussionCreateManyInput = {
    DiscussionID?: number
    Content: string
    Attachment?: string | null
    Timestamp?: Date | string
    Status?: string | null
    UserID: number
    ForumID: number
  }

  export type DiscussionUpdateManyMutationInput = {
    Content?: StringFieldUpdateOperationsInput | string
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscussionUncheckedUpdateManyInput = {
    DiscussionID?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    ForumID?: IntFieldUpdateOperationsInput | number
  }

  export type RequestCreateInput = {
    Description: string
    Status?: string | null
    CreatedDate?: Date | string
    FulfilledDate?: Date | string | null
    user: UserCreateNestedOneWithoutRequestsInput
    course: CourseCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateInput = {
    RequestID?: number
    Description: string
    Status?: string | null
    CreatedDate?: Date | string
    FulfilledDate?: Date | string | null
    UserID: number
    CourseID: number
  }

  export type RequestUpdateInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FulfilledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    course?: CourseUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    RequestID?: IntFieldUpdateOperationsInput | number
    Description?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FulfilledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    CourseID?: IntFieldUpdateOperationsInput | number
  }

  export type RequestCreateManyInput = {
    RequestID?: number
    Description: string
    Status?: string | null
    CreatedDate?: Date | string
    FulfilledDate?: Date | string | null
    UserID: number
    CourseID: number
  }

  export type RequestUpdateManyMutationInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FulfilledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RequestUncheckedUpdateManyInput = {
    RequestID?: IntFieldUpdateOperationsInput | number
    Description?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FulfilledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    CourseID?: IntFieldUpdateOperationsInput | number
  }

  export type RatingCreateInput = {
    RatingValue: number
    Comment?: string | null
    Date?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
    resource: ResourceCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateInput = {
    UserID: number
    ResourceID: number
    RatingValue: number
    Comment?: string | null
    Date?: Date | string
  }

  export type RatingUpdateInput = {
    RatingValue?: IntFieldUpdateOperationsInput | number
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
    resource?: ResourceUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    ResourceID?: IntFieldUpdateOperationsInput | number
    RatingValue?: IntFieldUpdateOperationsInput | number
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    UserID: number
    ResourceID: number
    RatingValue: number
    Comment?: string | null
    Date?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    RatingValue?: IntFieldUpdateOperationsInput | number
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    ResourceID?: IntFieldUpdateOperationsInput | number
    RatingValue?: IntFieldUpdateOperationsInput | number
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagCreateInput = {
    Reason: string
    Status?: string | null
    Date?: Date | string
    user: UserCreateNestedOneWithoutFlagsInput
    resource: ResourceCreateNestedOneWithoutFlagsInput
  }

  export type FlagUncheckedCreateInput = {
    FlagID?: number
    Reason: string
    Status?: string | null
    Date?: Date | string
    UserID: number
    ResourceID: number
  }

  export type FlagUpdateInput = {
    Reason?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlagsNestedInput
    resource?: ResourceUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type FlagUncheckedUpdateInput = {
    FlagID?: IntFieldUpdateOperationsInput | number
    Reason?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
    ResourceID?: IntFieldUpdateOperationsInput | number
  }

  export type FlagCreateManyInput = {
    FlagID?: number
    Reason: string
    Status?: string | null
    Date?: Date | string
    UserID: number
    ResourceID: number
  }

  export type FlagUpdateManyMutationInput = {
    Reason?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagUncheckedUpdateManyInput = {
    FlagID?: IntFieldUpdateOperationsInput | number
    Reason?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
    ResourceID?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ResourceListRelationFilter = {
    every?: ResourceWhereInput
    some?: ResourceWhereInput
    none?: ResourceWhereInput
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type BookTransactionListRelationFilter = {
    every?: BookTransactionWhereInput
    some?: BookTransactionWhereInput
    none?: BookTransactionWhereInput
  }

  export type ForumListRelationFilter = {
    every?: ForumWhereInput
    some?: ForumWhereInput
    none?: ForumWhereInput
  }

  export type DiscussionListRelationFilter = {
    every?: DiscussionWhereInput
    some?: DiscussionWhereInput
    none?: DiscussionWhereInput
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type FlagListRelationFilter = {
    every?: FlagWhereInput
    some?: FlagWhereInput
    none?: FlagWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ForumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscussionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    UserID?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    Role?: SortOrder
    Year?: SortOrder
    Department?: SortOrder
    ProfilePicture?: SortOrder
    Bio?: SortOrder
    JoinedDate?: SortOrder
    LastLogin?: SortOrder
    ContributionScore?: SortOrder
    Status?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    UserID?: SortOrder
    Year?: SortOrder
    ContributionScore?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    UserID?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    Role?: SortOrder
    Year?: SortOrder
    Department?: SortOrder
    ProfilePicture?: SortOrder
    Bio?: SortOrder
    JoinedDate?: SortOrder
    LastLogin?: SortOrder
    ContributionScore?: SortOrder
    Status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    UserID?: SortOrder
    Name?: SortOrder
    Email?: SortOrder
    PasswordHash?: SortOrder
    Role?: SortOrder
    Year?: SortOrder
    Department?: SortOrder
    ProfilePicture?: SortOrder
    Bio?: SortOrder
    JoinedDate?: SortOrder
    LastLogin?: SortOrder
    ContributionScore?: SortOrder
    Status?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    UserID?: SortOrder
    Year?: SortOrder
    ContributionScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CourseCountOrderByAggregateInput = {
    CourseID?: SortOrder
    CourseName?: SortOrder
    CourseCode?: SortOrder
    Department?: SortOrder
    Year?: SortOrder
    Semester?: SortOrder
    Description?: SortOrder
    Instructor?: SortOrder
    Status?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    CourseID?: SortOrder
    Year?: SortOrder
    Semester?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    CourseID?: SortOrder
    CourseName?: SortOrder
    CourseCode?: SortOrder
    Department?: SortOrder
    Year?: SortOrder
    Semester?: SortOrder
    Description?: SortOrder
    Instructor?: SortOrder
    Status?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    CourseID?: SortOrder
    CourseName?: SortOrder
    CourseCode?: SortOrder
    Department?: SortOrder
    Year?: SortOrder
    Semester?: SortOrder
    Description?: SortOrder
    Instructor?: SortOrder
    Status?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    CourseID?: SortOrder
    Year?: SortOrder
    Semester?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type ResourceTagListRelationFilter = {
    every?: ResourceTagWhereInput
    some?: ResourceTagWhereInput
    none?: ResourceTagWhereInput
  }

  export type ResourceTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResourceCountOrderByAggregateInput = {
    ResourceID?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    FilePath?: SortOrder
    FileType?: SortOrder
    FileSize?: SortOrder
    UploadDate?: SortOrder
    Version?: SortOrder
    DownloadCount?: SortOrder
    Status?: SortOrder
    LastModified?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type ResourceAvgOrderByAggregateInput = {
    ResourceID?: SortOrder
    FileSize?: SortOrder
    Version?: SortOrder
    DownloadCount?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    ResourceID?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    FilePath?: SortOrder
    FileType?: SortOrder
    FileSize?: SortOrder
    UploadDate?: SortOrder
    Version?: SortOrder
    DownloadCount?: SortOrder
    Status?: SortOrder
    LastModified?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    ResourceID?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    FilePath?: SortOrder
    FileType?: SortOrder
    FileSize?: SortOrder
    UploadDate?: SortOrder
    Version?: SortOrder
    DownloadCount?: SortOrder
    Status?: SortOrder
    LastModified?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type ResourceSumOrderByAggregateInput = {
    ResourceID?: SortOrder
    FileSize?: SortOrder
    Version?: SortOrder
    DownloadCount?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type ResourceScalarRelationFilter = {
    is?: ResourceWhereInput
    isNot?: ResourceWhereInput
  }

  export type ResourceTagResourceIDTagCompoundUniqueInput = {
    ResourceID: number
    Tag: string
  }

  export type ResourceTagCountOrderByAggregateInput = {
    ResourceID?: SortOrder
    Tag?: SortOrder
  }

  export type ResourceTagAvgOrderByAggregateInput = {
    ResourceID?: SortOrder
  }

  export type ResourceTagMaxOrderByAggregateInput = {
    ResourceID?: SortOrder
    Tag?: SortOrder
  }

  export type ResourceTagMinOrderByAggregateInput = {
    ResourceID?: SortOrder
    Tag?: SortOrder
  }

  export type ResourceTagSumOrderByAggregateInput = {
    ResourceID?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    BookID?: SortOrder
    Title?: SortOrder
    Author?: SortOrder
    Edition?: SortOrder
    Condition?: SortOrder
    AvailabilityStatus?: SortOrder
    ListedDate?: SortOrder
    UserID?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    BookID?: SortOrder
    UserID?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    BookID?: SortOrder
    Title?: SortOrder
    Author?: SortOrder
    Edition?: SortOrder
    Condition?: SortOrder
    AvailabilityStatus?: SortOrder
    ListedDate?: SortOrder
    UserID?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    BookID?: SortOrder
    Title?: SortOrder
    Author?: SortOrder
    Edition?: SortOrder
    Condition?: SortOrder
    AvailabilityStatus?: SortOrder
    ListedDate?: SortOrder
    UserID?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    BookID?: SortOrder
    UserID?: SortOrder
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type BookTransactionCountOrderByAggregateInput = {
    TransactionID?: SortOrder
    Status?: SortOrder
    RequestDate?: SortOrder
    ApprovalDate?: SortOrder
    ReturnDate?: SortOrder
    TransactionType?: SortOrder
    UserID?: SortOrder
    BookID?: SortOrder
  }

  export type BookTransactionAvgOrderByAggregateInput = {
    TransactionID?: SortOrder
    UserID?: SortOrder
    BookID?: SortOrder
  }

  export type BookTransactionMaxOrderByAggregateInput = {
    TransactionID?: SortOrder
    Status?: SortOrder
    RequestDate?: SortOrder
    ApprovalDate?: SortOrder
    ReturnDate?: SortOrder
    TransactionType?: SortOrder
    UserID?: SortOrder
    BookID?: SortOrder
  }

  export type BookTransactionMinOrderByAggregateInput = {
    TransactionID?: SortOrder
    Status?: SortOrder
    RequestDate?: SortOrder
    ApprovalDate?: SortOrder
    ReturnDate?: SortOrder
    TransactionType?: SortOrder
    UserID?: SortOrder
    BookID?: SortOrder
  }

  export type BookTransactionSumOrderByAggregateInput = {
    TransactionID?: SortOrder
    UserID?: SortOrder
    BookID?: SortOrder
  }

  export type ForumCountOrderByAggregateInput = {
    ForumID?: SortOrder
    Title?: SortOrder
    CreatedDate?: SortOrder
    Status?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type ForumAvgOrderByAggregateInput = {
    ForumID?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type ForumMaxOrderByAggregateInput = {
    ForumID?: SortOrder
    Title?: SortOrder
    CreatedDate?: SortOrder
    Status?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type ForumMinOrderByAggregateInput = {
    ForumID?: SortOrder
    Title?: SortOrder
    CreatedDate?: SortOrder
    Status?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type ForumSumOrderByAggregateInput = {
    ForumID?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type ForumScalarRelationFilter = {
    is?: ForumWhereInput
    isNot?: ForumWhereInput
  }

  export type DiscussionCountOrderByAggregateInput = {
    DiscussionID?: SortOrder
    Content?: SortOrder
    Attachment?: SortOrder
    Timestamp?: SortOrder
    Status?: SortOrder
    UserID?: SortOrder
    ForumID?: SortOrder
  }

  export type DiscussionAvgOrderByAggregateInput = {
    DiscussionID?: SortOrder
    UserID?: SortOrder
    ForumID?: SortOrder
  }

  export type DiscussionMaxOrderByAggregateInput = {
    DiscussionID?: SortOrder
    Content?: SortOrder
    Attachment?: SortOrder
    Timestamp?: SortOrder
    Status?: SortOrder
    UserID?: SortOrder
    ForumID?: SortOrder
  }

  export type DiscussionMinOrderByAggregateInput = {
    DiscussionID?: SortOrder
    Content?: SortOrder
    Attachment?: SortOrder
    Timestamp?: SortOrder
    Status?: SortOrder
    UserID?: SortOrder
    ForumID?: SortOrder
  }

  export type DiscussionSumOrderByAggregateInput = {
    DiscussionID?: SortOrder
    UserID?: SortOrder
    ForumID?: SortOrder
  }

  export type RequestCountOrderByAggregateInput = {
    RequestID?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    CreatedDate?: SortOrder
    FulfilledDate?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type RequestAvgOrderByAggregateInput = {
    RequestID?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    RequestID?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    CreatedDate?: SortOrder
    FulfilledDate?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    RequestID?: SortOrder
    Description?: SortOrder
    Status?: SortOrder
    CreatedDate?: SortOrder
    FulfilledDate?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type RequestSumOrderByAggregateInput = {
    RequestID?: SortOrder
    UserID?: SortOrder
    CourseID?: SortOrder
  }

  export type RatingUserIDResourceIDCompoundUniqueInput = {
    UserID: number
    ResourceID: number
  }

  export type RatingCountOrderByAggregateInput = {
    UserID?: SortOrder
    ResourceID?: SortOrder
    RatingValue?: SortOrder
    Comment?: SortOrder
    Date?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    UserID?: SortOrder
    ResourceID?: SortOrder
    RatingValue?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    UserID?: SortOrder
    ResourceID?: SortOrder
    RatingValue?: SortOrder
    Comment?: SortOrder
    Date?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    UserID?: SortOrder
    ResourceID?: SortOrder
    RatingValue?: SortOrder
    Comment?: SortOrder
    Date?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    UserID?: SortOrder
    ResourceID?: SortOrder
    RatingValue?: SortOrder
  }

  export type FlagCountOrderByAggregateInput = {
    FlagID?: SortOrder
    Reason?: SortOrder
    Status?: SortOrder
    Date?: SortOrder
    UserID?: SortOrder
    ResourceID?: SortOrder
  }

  export type FlagAvgOrderByAggregateInput = {
    FlagID?: SortOrder
    UserID?: SortOrder
    ResourceID?: SortOrder
  }

  export type FlagMaxOrderByAggregateInput = {
    FlagID?: SortOrder
    Reason?: SortOrder
    Status?: SortOrder
    Date?: SortOrder
    UserID?: SortOrder
    ResourceID?: SortOrder
  }

  export type FlagMinOrderByAggregateInput = {
    FlagID?: SortOrder
    Reason?: SortOrder
    Status?: SortOrder
    Date?: SortOrder
    UserID?: SortOrder
    ResourceID?: SortOrder
  }

  export type FlagSumOrderByAggregateInput = {
    FlagID?: SortOrder
    UserID?: SortOrder
    ResourceID?: SortOrder
  }

  export type ResourceCreateNestedManyWithoutUserInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type BookCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<BookTransactionCreateWithoutUserInput, BookTransactionUncheckedCreateWithoutUserInput> | BookTransactionCreateWithoutUserInput[] | BookTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookTransactionCreateOrConnectWithoutUserInput | BookTransactionCreateOrConnectWithoutUserInput[]
    createMany?: BookTransactionCreateManyUserInputEnvelope
    connect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
  }

  export type ForumCreateNestedManyWithoutUserInput = {
    create?: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput> | ForumCreateWithoutUserInput[] | ForumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUserInput | ForumCreateOrConnectWithoutUserInput[]
    createMany?: ForumCreateManyUserInputEnvelope
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
  }

  export type DiscussionCreateNestedManyWithoutUserInput = {
    create?: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput> | DiscussionCreateWithoutUserInput[] | DiscussionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutUserInput | DiscussionCreateOrConnectWithoutUserInput[]
    createMany?: DiscussionCreateManyUserInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type FlagCreateNestedManyWithoutUserInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type BookTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookTransactionCreateWithoutUserInput, BookTransactionUncheckedCreateWithoutUserInput> | BookTransactionCreateWithoutUserInput[] | BookTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookTransactionCreateOrConnectWithoutUserInput | BookTransactionCreateOrConnectWithoutUserInput[]
    createMany?: BookTransactionCreateManyUserInputEnvelope
    connect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
  }

  export type ForumUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput> | ForumCreateWithoutUserInput[] | ForumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUserInput | ForumCreateOrConnectWithoutUserInput[]
    createMany?: ForumCreateManyUserInputEnvelope
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
  }

  export type DiscussionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput> | DiscussionCreateWithoutUserInput[] | DiscussionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutUserInput | DiscussionCreateOrConnectWithoutUserInput[]
    createMany?: DiscussionCreateManyUserInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type FlagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResourceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutUserInput | ResourceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutUserInput | ResourceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutUserInput | ResourceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type BookUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookTransactionCreateWithoutUserInput, BookTransactionUncheckedCreateWithoutUserInput> | BookTransactionCreateWithoutUserInput[] | BookTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookTransactionCreateOrConnectWithoutUserInput | BookTransactionCreateOrConnectWithoutUserInput[]
    upsert?: BookTransactionUpsertWithWhereUniqueWithoutUserInput | BookTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookTransactionCreateManyUserInputEnvelope
    set?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    disconnect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    delete?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    connect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    update?: BookTransactionUpdateWithWhereUniqueWithoutUserInput | BookTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookTransactionUpdateManyWithWhereWithoutUserInput | BookTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookTransactionScalarWhereInput | BookTransactionScalarWhereInput[]
  }

  export type ForumUpdateManyWithoutUserNestedInput = {
    create?: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput> | ForumCreateWithoutUserInput[] | ForumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUserInput | ForumCreateOrConnectWithoutUserInput[]
    upsert?: ForumUpsertWithWhereUniqueWithoutUserInput | ForumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ForumCreateManyUserInputEnvelope
    set?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    disconnect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    delete?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    update?: ForumUpdateWithWhereUniqueWithoutUserInput | ForumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ForumUpdateManyWithWhereWithoutUserInput | ForumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ForumScalarWhereInput | ForumScalarWhereInput[]
  }

  export type DiscussionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput> | DiscussionCreateWithoutUserInput[] | DiscussionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutUserInput | DiscussionCreateOrConnectWithoutUserInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutUserInput | DiscussionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiscussionCreateManyUserInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutUserInput | DiscussionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutUserInput | DiscussionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type FlagUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutUserInput | FlagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutUserInput | FlagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutUserInput | FlagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput> | ResourceCreateWithoutUserInput[] | ResourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutUserInput | ResourceCreateOrConnectWithoutUserInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutUserInput | ResourceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResourceCreateManyUserInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutUserInput | ResourceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutUserInput | ResourceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type BookTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookTransactionCreateWithoutUserInput, BookTransactionUncheckedCreateWithoutUserInput> | BookTransactionCreateWithoutUserInput[] | BookTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookTransactionCreateOrConnectWithoutUserInput | BookTransactionCreateOrConnectWithoutUserInput[]
    upsert?: BookTransactionUpsertWithWhereUniqueWithoutUserInput | BookTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookTransactionCreateManyUserInputEnvelope
    set?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    disconnect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    delete?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    connect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    update?: BookTransactionUpdateWithWhereUniqueWithoutUserInput | BookTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookTransactionUpdateManyWithWhereWithoutUserInput | BookTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookTransactionScalarWhereInput | BookTransactionScalarWhereInput[]
  }

  export type ForumUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput> | ForumCreateWithoutUserInput[] | ForumUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutUserInput | ForumCreateOrConnectWithoutUserInput[]
    upsert?: ForumUpsertWithWhereUniqueWithoutUserInput | ForumUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ForumCreateManyUserInputEnvelope
    set?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    disconnect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    delete?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    update?: ForumUpdateWithWhereUniqueWithoutUserInput | ForumUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ForumUpdateManyWithWhereWithoutUserInput | ForumUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ForumScalarWhereInput | ForumScalarWhereInput[]
  }

  export type DiscussionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput> | DiscussionCreateWithoutUserInput[] | DiscussionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutUserInput | DiscussionCreateOrConnectWithoutUserInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutUserInput | DiscussionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DiscussionCreateManyUserInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutUserInput | DiscussionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutUserInput | DiscussionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput> | RequestCreateWithoutUserInput[] | RequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutUserInput | RequestCreateOrConnectWithoutUserInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutUserInput | RequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RequestCreateManyUserInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutUserInput | RequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutUserInput | RequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type FlagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput> | FlagCreateWithoutUserInput[] | FlagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutUserInput | FlagCreateOrConnectWithoutUserInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutUserInput | FlagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlagCreateManyUserInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutUserInput | FlagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutUserInput | FlagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type ResourceCreateNestedManyWithoutCourseInput = {
    create?: XOR<ResourceCreateWithoutCourseInput, ResourceUncheckedCreateWithoutCourseInput> | ResourceCreateWithoutCourseInput[] | ResourceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCourseInput | ResourceCreateOrConnectWithoutCourseInput[]
    createMany?: ResourceCreateManyCourseInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type ForumCreateNestedManyWithoutCourseInput = {
    create?: XOR<ForumCreateWithoutCourseInput, ForumUncheckedCreateWithoutCourseInput> | ForumCreateWithoutCourseInput[] | ForumUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutCourseInput | ForumCreateOrConnectWithoutCourseInput[]
    createMany?: ForumCreateManyCourseInputEnvelope
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutCourseInput = {
    create?: XOR<RequestCreateWithoutCourseInput, RequestUncheckedCreateWithoutCourseInput> | RequestCreateWithoutCourseInput[] | RequestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutCourseInput | RequestCreateOrConnectWithoutCourseInput[]
    createMany?: RequestCreateManyCourseInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type ResourceUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ResourceCreateWithoutCourseInput, ResourceUncheckedCreateWithoutCourseInput> | ResourceCreateWithoutCourseInput[] | ResourceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCourseInput | ResourceCreateOrConnectWithoutCourseInput[]
    createMany?: ResourceCreateManyCourseInputEnvelope
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
  }

  export type ForumUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ForumCreateWithoutCourseInput, ForumUncheckedCreateWithoutCourseInput> | ForumCreateWithoutCourseInput[] | ForumUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutCourseInput | ForumCreateOrConnectWithoutCourseInput[]
    createMany?: ForumCreateManyCourseInputEnvelope
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<RequestCreateWithoutCourseInput, RequestUncheckedCreateWithoutCourseInput> | RequestCreateWithoutCourseInput[] | RequestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutCourseInput | RequestCreateOrConnectWithoutCourseInput[]
    createMany?: RequestCreateManyCourseInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type ResourceUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ResourceCreateWithoutCourseInput, ResourceUncheckedCreateWithoutCourseInput> | ResourceCreateWithoutCourseInput[] | ResourceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCourseInput | ResourceCreateOrConnectWithoutCourseInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutCourseInput | ResourceUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ResourceCreateManyCourseInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutCourseInput | ResourceUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutCourseInput | ResourceUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type ForumUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ForumCreateWithoutCourseInput, ForumUncheckedCreateWithoutCourseInput> | ForumCreateWithoutCourseInput[] | ForumUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutCourseInput | ForumCreateOrConnectWithoutCourseInput[]
    upsert?: ForumUpsertWithWhereUniqueWithoutCourseInput | ForumUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ForumCreateManyCourseInputEnvelope
    set?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    disconnect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    delete?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    update?: ForumUpdateWithWhereUniqueWithoutCourseInput | ForumUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ForumUpdateManyWithWhereWithoutCourseInput | ForumUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ForumScalarWhereInput | ForumScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RequestCreateWithoutCourseInput, RequestUncheckedCreateWithoutCourseInput> | RequestCreateWithoutCourseInput[] | RequestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutCourseInput | RequestCreateOrConnectWithoutCourseInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutCourseInput | RequestUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RequestCreateManyCourseInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutCourseInput | RequestUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutCourseInput | RequestUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ResourceUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ResourceCreateWithoutCourseInput, ResourceUncheckedCreateWithoutCourseInput> | ResourceCreateWithoutCourseInput[] | ResourceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ResourceCreateOrConnectWithoutCourseInput | ResourceCreateOrConnectWithoutCourseInput[]
    upsert?: ResourceUpsertWithWhereUniqueWithoutCourseInput | ResourceUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ResourceCreateManyCourseInputEnvelope
    set?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    disconnect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    delete?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    connect?: ResourceWhereUniqueInput | ResourceWhereUniqueInput[]
    update?: ResourceUpdateWithWhereUniqueWithoutCourseInput | ResourceUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ResourceUpdateManyWithWhereWithoutCourseInput | ResourceUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
  }

  export type ForumUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ForumCreateWithoutCourseInput, ForumUncheckedCreateWithoutCourseInput> | ForumCreateWithoutCourseInput[] | ForumUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ForumCreateOrConnectWithoutCourseInput | ForumCreateOrConnectWithoutCourseInput[]
    upsert?: ForumUpsertWithWhereUniqueWithoutCourseInput | ForumUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ForumCreateManyCourseInputEnvelope
    set?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    disconnect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    delete?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    connect?: ForumWhereUniqueInput | ForumWhereUniqueInput[]
    update?: ForumUpdateWithWhereUniqueWithoutCourseInput | ForumUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ForumUpdateManyWithWhereWithoutCourseInput | ForumUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ForumScalarWhereInput | ForumScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RequestCreateWithoutCourseInput, RequestUncheckedCreateWithoutCourseInput> | RequestCreateWithoutCourseInput[] | RequestUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutCourseInput | RequestCreateOrConnectWithoutCourseInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutCourseInput | RequestUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RequestCreateManyCourseInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutCourseInput | RequestUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutCourseInput | RequestUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResourcesInput = {
    create?: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResourcesInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutResourcesInput = {
    create?: XOR<CourseCreateWithoutResourcesInput, CourseUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutResourcesInput
    connect?: CourseWhereUniqueInput
  }

  export type ResourceTagCreateNestedManyWithoutResourceInput = {
    create?: XOR<ResourceTagCreateWithoutResourceInput, ResourceTagUncheckedCreateWithoutResourceInput> | ResourceTagCreateWithoutResourceInput[] | ResourceTagUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceTagCreateOrConnectWithoutResourceInput | ResourceTagCreateOrConnectWithoutResourceInput[]
    createMany?: ResourceTagCreateManyResourceInputEnvelope
    connect?: ResourceTagWhereUniqueInput | ResourceTagWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutResourceInput = {
    create?: XOR<RatingCreateWithoutResourceInput, RatingUncheckedCreateWithoutResourceInput> | RatingCreateWithoutResourceInput[] | RatingUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutResourceInput | RatingCreateOrConnectWithoutResourceInput[]
    createMany?: RatingCreateManyResourceInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type FlagCreateNestedManyWithoutResourceInput = {
    create?: XOR<FlagCreateWithoutResourceInput, FlagUncheckedCreateWithoutResourceInput> | FlagCreateWithoutResourceInput[] | FlagUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutResourceInput | FlagCreateOrConnectWithoutResourceInput[]
    createMany?: FlagCreateManyResourceInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type ResourceTagUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<ResourceTagCreateWithoutResourceInput, ResourceTagUncheckedCreateWithoutResourceInput> | ResourceTagCreateWithoutResourceInput[] | ResourceTagUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceTagCreateOrConnectWithoutResourceInput | ResourceTagCreateOrConnectWithoutResourceInput[]
    createMany?: ResourceTagCreateManyResourceInputEnvelope
    connect?: ResourceTagWhereUniqueInput | ResourceTagWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<RatingCreateWithoutResourceInput, RatingUncheckedCreateWithoutResourceInput> | RatingCreateWithoutResourceInput[] | RatingUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutResourceInput | RatingCreateOrConnectWithoutResourceInput[]
    createMany?: RatingCreateManyResourceInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type FlagUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<FlagCreateWithoutResourceInput, FlagUncheckedCreateWithoutResourceInput> | FlagCreateWithoutResourceInput[] | FlagUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutResourceInput | FlagCreateOrConnectWithoutResourceInput[]
    createMany?: FlagCreateManyResourceInputEnvelope
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResourcesInput
    upsert?: UserUpsertWithoutResourcesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResourcesInput, UserUpdateWithoutResourcesInput>, UserUncheckedUpdateWithoutResourcesInput>
  }

  export type CourseUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<CourseCreateWithoutResourcesInput, CourseUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutResourcesInput
    upsert?: CourseUpsertWithoutResourcesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutResourcesInput, CourseUpdateWithoutResourcesInput>, CourseUncheckedUpdateWithoutResourcesInput>
  }

  export type ResourceTagUpdateManyWithoutResourceNestedInput = {
    create?: XOR<ResourceTagCreateWithoutResourceInput, ResourceTagUncheckedCreateWithoutResourceInput> | ResourceTagCreateWithoutResourceInput[] | ResourceTagUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceTagCreateOrConnectWithoutResourceInput | ResourceTagCreateOrConnectWithoutResourceInput[]
    upsert?: ResourceTagUpsertWithWhereUniqueWithoutResourceInput | ResourceTagUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: ResourceTagCreateManyResourceInputEnvelope
    set?: ResourceTagWhereUniqueInput | ResourceTagWhereUniqueInput[]
    disconnect?: ResourceTagWhereUniqueInput | ResourceTagWhereUniqueInput[]
    delete?: ResourceTagWhereUniqueInput | ResourceTagWhereUniqueInput[]
    connect?: ResourceTagWhereUniqueInput | ResourceTagWhereUniqueInput[]
    update?: ResourceTagUpdateWithWhereUniqueWithoutResourceInput | ResourceTagUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: ResourceTagUpdateManyWithWhereWithoutResourceInput | ResourceTagUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: ResourceTagScalarWhereInput | ResourceTagScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutResourceNestedInput = {
    create?: XOR<RatingCreateWithoutResourceInput, RatingUncheckedCreateWithoutResourceInput> | RatingCreateWithoutResourceInput[] | RatingUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutResourceInput | RatingCreateOrConnectWithoutResourceInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutResourceInput | RatingUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: RatingCreateManyResourceInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutResourceInput | RatingUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutResourceInput | RatingUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type FlagUpdateManyWithoutResourceNestedInput = {
    create?: XOR<FlagCreateWithoutResourceInput, FlagUncheckedCreateWithoutResourceInput> | FlagCreateWithoutResourceInput[] | FlagUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutResourceInput | FlagCreateOrConnectWithoutResourceInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutResourceInput | FlagUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: FlagCreateManyResourceInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutResourceInput | FlagUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutResourceInput | FlagUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type ResourceTagUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<ResourceTagCreateWithoutResourceInput, ResourceTagUncheckedCreateWithoutResourceInput> | ResourceTagCreateWithoutResourceInput[] | ResourceTagUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: ResourceTagCreateOrConnectWithoutResourceInput | ResourceTagCreateOrConnectWithoutResourceInput[]
    upsert?: ResourceTagUpsertWithWhereUniqueWithoutResourceInput | ResourceTagUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: ResourceTagCreateManyResourceInputEnvelope
    set?: ResourceTagWhereUniqueInput | ResourceTagWhereUniqueInput[]
    disconnect?: ResourceTagWhereUniqueInput | ResourceTagWhereUniqueInput[]
    delete?: ResourceTagWhereUniqueInput | ResourceTagWhereUniqueInput[]
    connect?: ResourceTagWhereUniqueInput | ResourceTagWhereUniqueInput[]
    update?: ResourceTagUpdateWithWhereUniqueWithoutResourceInput | ResourceTagUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: ResourceTagUpdateManyWithWhereWithoutResourceInput | ResourceTagUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: ResourceTagScalarWhereInput | ResourceTagScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<RatingCreateWithoutResourceInput, RatingUncheckedCreateWithoutResourceInput> | RatingCreateWithoutResourceInput[] | RatingUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutResourceInput | RatingCreateOrConnectWithoutResourceInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutResourceInput | RatingUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: RatingCreateManyResourceInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutResourceInput | RatingUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutResourceInput | RatingUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type FlagUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<FlagCreateWithoutResourceInput, FlagUncheckedCreateWithoutResourceInput> | FlagCreateWithoutResourceInput[] | FlagUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: FlagCreateOrConnectWithoutResourceInput | FlagCreateOrConnectWithoutResourceInput[]
    upsert?: FlagUpsertWithWhereUniqueWithoutResourceInput | FlagUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: FlagCreateManyResourceInputEnvelope
    set?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    disconnect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    delete?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    connect?: FlagWhereUniqueInput | FlagWhereUniqueInput[]
    update?: FlagUpdateWithWhereUniqueWithoutResourceInput | FlagUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: FlagUpdateManyWithWhereWithoutResourceInput | FlagUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: FlagScalarWhereInput | FlagScalarWhereInput[]
  }

  export type ResourceCreateNestedOneWithoutTagsInput = {
    create?: XOR<ResourceCreateWithoutTagsInput, ResourceUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutTagsInput
    connect?: ResourceWhereUniqueInput
  }

  export type ResourceUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<ResourceCreateWithoutTagsInput, ResourceUncheckedCreateWithoutTagsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutTagsInput
    upsert?: ResourceUpsertWithoutTagsInput
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutTagsInput, ResourceUpdateWithoutTagsInput>, ResourceUncheckedUpdateWithoutTagsInput>
  }

  export type UserCreateNestedOneWithoutBooksInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    connect?: UserWhereUniqueInput
  }

  export type BookTransactionCreateNestedManyWithoutBookInput = {
    create?: XOR<BookTransactionCreateWithoutBookInput, BookTransactionUncheckedCreateWithoutBookInput> | BookTransactionCreateWithoutBookInput[] | BookTransactionUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTransactionCreateOrConnectWithoutBookInput | BookTransactionCreateOrConnectWithoutBookInput[]
    createMany?: BookTransactionCreateManyBookInputEnvelope
    connect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
  }

  export type BookTransactionUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookTransactionCreateWithoutBookInput, BookTransactionUncheckedCreateWithoutBookInput> | BookTransactionCreateWithoutBookInput[] | BookTransactionUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTransactionCreateOrConnectWithoutBookInput | BookTransactionCreateOrConnectWithoutBookInput[]
    createMany?: BookTransactionCreateManyBookInputEnvelope
    connect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    upsert?: UserUpsertWithoutBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBooksInput, UserUpdateWithoutBooksInput>, UserUncheckedUpdateWithoutBooksInput>
  }

  export type BookTransactionUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookTransactionCreateWithoutBookInput, BookTransactionUncheckedCreateWithoutBookInput> | BookTransactionCreateWithoutBookInput[] | BookTransactionUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTransactionCreateOrConnectWithoutBookInput | BookTransactionCreateOrConnectWithoutBookInput[]
    upsert?: BookTransactionUpsertWithWhereUniqueWithoutBookInput | BookTransactionUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookTransactionCreateManyBookInputEnvelope
    set?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    disconnect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    delete?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    connect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    update?: BookTransactionUpdateWithWhereUniqueWithoutBookInput | BookTransactionUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookTransactionUpdateManyWithWhereWithoutBookInput | BookTransactionUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookTransactionScalarWhereInput | BookTransactionScalarWhereInput[]
  }

  export type BookTransactionUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookTransactionCreateWithoutBookInput, BookTransactionUncheckedCreateWithoutBookInput> | BookTransactionCreateWithoutBookInput[] | BookTransactionUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookTransactionCreateOrConnectWithoutBookInput | BookTransactionCreateOrConnectWithoutBookInput[]
    upsert?: BookTransactionUpsertWithWhereUniqueWithoutBookInput | BookTransactionUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookTransactionCreateManyBookInputEnvelope
    set?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    disconnect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    delete?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    connect?: BookTransactionWhereUniqueInput | BookTransactionWhereUniqueInput[]
    update?: BookTransactionUpdateWithWhereUniqueWithoutBookInput | BookTransactionUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookTransactionUpdateManyWithWhereWithoutBookInput | BookTransactionUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookTransactionScalarWhereInput | BookTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<BookCreateWithoutTransactionsInput, BookUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BookCreateOrConnectWithoutTransactionsInput
    connect?: BookWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type BookUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<BookCreateWithoutTransactionsInput, BookUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: BookCreateOrConnectWithoutTransactionsInput
    upsert?: BookUpsertWithoutTransactionsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutTransactionsInput, BookUpdateWithoutTransactionsInput>, BookUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutForumsInput = {
    create?: XOR<UserCreateWithoutForumsInput, UserUncheckedCreateWithoutForumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutForumsInput = {
    create?: XOR<CourseCreateWithoutForumsInput, CourseUncheckedCreateWithoutForumsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutForumsInput
    connect?: CourseWhereUniqueInput
  }

  export type DiscussionCreateNestedManyWithoutForumInput = {
    create?: XOR<DiscussionCreateWithoutForumInput, DiscussionUncheckedCreateWithoutForumInput> | DiscussionCreateWithoutForumInput[] | DiscussionUncheckedCreateWithoutForumInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutForumInput | DiscussionCreateOrConnectWithoutForumInput[]
    createMany?: DiscussionCreateManyForumInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type DiscussionUncheckedCreateNestedManyWithoutForumInput = {
    create?: XOR<DiscussionCreateWithoutForumInput, DiscussionUncheckedCreateWithoutForumInput> | DiscussionCreateWithoutForumInput[] | DiscussionUncheckedCreateWithoutForumInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutForumInput | DiscussionCreateOrConnectWithoutForumInput[]
    createMany?: DiscussionCreateManyForumInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutForumsNestedInput = {
    create?: XOR<UserCreateWithoutForumsInput, UserUncheckedCreateWithoutForumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutForumsInput
    upsert?: UserUpsertWithoutForumsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutForumsInput, UserUpdateWithoutForumsInput>, UserUncheckedUpdateWithoutForumsInput>
  }

  export type CourseUpdateOneRequiredWithoutForumsNestedInput = {
    create?: XOR<CourseCreateWithoutForumsInput, CourseUncheckedCreateWithoutForumsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutForumsInput
    upsert?: CourseUpsertWithoutForumsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutForumsInput, CourseUpdateWithoutForumsInput>, CourseUncheckedUpdateWithoutForumsInput>
  }

  export type DiscussionUpdateManyWithoutForumNestedInput = {
    create?: XOR<DiscussionCreateWithoutForumInput, DiscussionUncheckedCreateWithoutForumInput> | DiscussionCreateWithoutForumInput[] | DiscussionUncheckedCreateWithoutForumInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutForumInput | DiscussionCreateOrConnectWithoutForumInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutForumInput | DiscussionUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: DiscussionCreateManyForumInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutForumInput | DiscussionUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutForumInput | DiscussionUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type DiscussionUncheckedUpdateManyWithoutForumNestedInput = {
    create?: XOR<DiscussionCreateWithoutForumInput, DiscussionUncheckedCreateWithoutForumInput> | DiscussionCreateWithoutForumInput[] | DiscussionUncheckedCreateWithoutForumInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutForumInput | DiscussionCreateOrConnectWithoutForumInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutForumInput | DiscussionUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: DiscussionCreateManyForumInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutForumInput | DiscussionUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutForumInput | DiscussionUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDiscussionsInput = {
    create?: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiscussionsInput
    connect?: UserWhereUniqueInput
  }

  export type ForumCreateNestedOneWithoutDiscussionsInput = {
    create?: XOR<ForumCreateWithoutDiscussionsInput, ForumUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: ForumCreateOrConnectWithoutDiscussionsInput
    connect?: ForumWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDiscussionsNestedInput = {
    create?: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiscussionsInput
    upsert?: UserUpsertWithoutDiscussionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDiscussionsInput, UserUpdateWithoutDiscussionsInput>, UserUncheckedUpdateWithoutDiscussionsInput>
  }

  export type ForumUpdateOneRequiredWithoutDiscussionsNestedInput = {
    create?: XOR<ForumCreateWithoutDiscussionsInput, ForumUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: ForumCreateOrConnectWithoutDiscussionsInput
    upsert?: ForumUpsertWithoutDiscussionsInput
    connect?: ForumWhereUniqueInput
    update?: XOR<XOR<ForumUpdateToOneWithWhereWithoutDiscussionsInput, ForumUpdateWithoutDiscussionsInput>, ForumUncheckedUpdateWithoutDiscussionsInput>
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutRequestsInput = {
    create?: XOR<CourseCreateWithoutRequestsInput, CourseUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRequestsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type CourseUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<CourseCreateWithoutRequestsInput, CourseUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRequestsInput
    upsert?: CourseUpsertWithoutRequestsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutRequestsInput, CourseUpdateWithoutRequestsInput>, CourseUncheckedUpdateWithoutRequestsInput>
  }

  export type UserCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type ResourceCreateNestedOneWithoutRatingsInput = {
    create?: XOR<ResourceCreateWithoutRatingsInput, ResourceUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutRatingsInput
    connect?: ResourceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    upsert?: UserUpsertWithoutRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsInput, UserUpdateWithoutRatingsInput>, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type ResourceUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<ResourceCreateWithoutRatingsInput, ResourceUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutRatingsInput
    upsert?: ResourceUpsertWithoutRatingsInput
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutRatingsInput, ResourceUpdateWithoutRatingsInput>, ResourceUncheckedUpdateWithoutRatingsInput>
  }

  export type UserCreateNestedOneWithoutFlagsInput = {
    create?: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlagsInput
    connect?: UserWhereUniqueInput
  }

  export type ResourceCreateNestedOneWithoutFlagsInput = {
    create?: XOR<ResourceCreateWithoutFlagsInput, ResourceUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutFlagsInput
    connect?: ResourceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFlagsNestedInput = {
    create?: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlagsInput
    upsert?: UserUpsertWithoutFlagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlagsInput, UserUpdateWithoutFlagsInput>, UserUncheckedUpdateWithoutFlagsInput>
  }

  export type ResourceUpdateOneRequiredWithoutFlagsNestedInput = {
    create?: XOR<ResourceCreateWithoutFlagsInput, ResourceUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutFlagsInput
    upsert?: ResourceUpsertWithoutFlagsInput
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutFlagsInput, ResourceUpdateWithoutFlagsInput>, ResourceUncheckedUpdateWithoutFlagsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ResourceCreateWithoutUserInput = {
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    course: CourseCreateNestedOneWithoutResourcesInput
    tags?: ResourceTagCreateNestedManyWithoutResourceInput
    ratings?: RatingCreateNestedManyWithoutResourceInput
    flags?: FlagCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutUserInput = {
    ResourceID?: number
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    CourseID: number
    tags?: ResourceTagUncheckedCreateNestedManyWithoutResourceInput
    ratings?: RatingUncheckedCreateNestedManyWithoutResourceInput
    flags?: FlagUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutUserInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput>
  }

  export type ResourceCreateManyUserInputEnvelope = {
    data: ResourceCreateManyUserInput | ResourceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutUserInput = {
    Title: string
    Author: string
    Edition?: string | null
    Condition?: string | null
    AvailabilityStatus?: string | null
    ListedDate?: Date | string
    transactions?: BookTransactionCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutUserInput = {
    BookID?: number
    Title: string
    Author: string
    Edition?: string | null
    Condition?: string | null
    AvailabilityStatus?: string | null
    ListedDate?: Date | string
    transactions?: BookTransactionUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutUserInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookCreateManyUserInputEnvelope = {
    data: BookCreateManyUserInput | BookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookTransactionCreateWithoutUserInput = {
    Status?: string | null
    RequestDate?: Date | string
    ApprovalDate?: Date | string | null
    ReturnDate?: Date | string | null
    TransactionType?: string | null
    book: BookCreateNestedOneWithoutTransactionsInput
  }

  export type BookTransactionUncheckedCreateWithoutUserInput = {
    TransactionID?: number
    Status?: string | null
    RequestDate?: Date | string
    ApprovalDate?: Date | string | null
    ReturnDate?: Date | string | null
    TransactionType?: string | null
    BookID: number
  }

  export type BookTransactionCreateOrConnectWithoutUserInput = {
    where: BookTransactionWhereUniqueInput
    create: XOR<BookTransactionCreateWithoutUserInput, BookTransactionUncheckedCreateWithoutUserInput>
  }

  export type BookTransactionCreateManyUserInputEnvelope = {
    data: BookTransactionCreateManyUserInput | BookTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ForumCreateWithoutUserInput = {
    Title: string
    CreatedDate?: Date | string
    Status?: string | null
    course: CourseCreateNestedOneWithoutForumsInput
    discussions?: DiscussionCreateNestedManyWithoutForumInput
  }

  export type ForumUncheckedCreateWithoutUserInput = {
    ForumID?: number
    Title: string
    CreatedDate?: Date | string
    Status?: string | null
    CourseID: number
    discussions?: DiscussionUncheckedCreateNestedManyWithoutForumInput
  }

  export type ForumCreateOrConnectWithoutUserInput = {
    where: ForumWhereUniqueInput
    create: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput>
  }

  export type ForumCreateManyUserInputEnvelope = {
    data: ForumCreateManyUserInput | ForumCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DiscussionCreateWithoutUserInput = {
    Content: string
    Attachment?: string | null
    Timestamp?: Date | string
    Status?: string | null
    forum: ForumCreateNestedOneWithoutDiscussionsInput
  }

  export type DiscussionUncheckedCreateWithoutUserInput = {
    DiscussionID?: number
    Content: string
    Attachment?: string | null
    Timestamp?: Date | string
    Status?: string | null
    ForumID: number
  }

  export type DiscussionCreateOrConnectWithoutUserInput = {
    where: DiscussionWhereUniqueInput
    create: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput>
  }

  export type DiscussionCreateManyUserInputEnvelope = {
    data: DiscussionCreateManyUserInput | DiscussionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutUserInput = {
    Description: string
    Status?: string | null
    CreatedDate?: Date | string
    FulfilledDate?: Date | string | null
    course: CourseCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateWithoutUserInput = {
    RequestID?: number
    Description: string
    Status?: string | null
    CreatedDate?: Date | string
    FulfilledDate?: Date | string | null
    CourseID: number
  }

  export type RequestCreateOrConnectWithoutUserInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestCreateManyUserInputEnvelope = {
    data: RequestCreateManyUserInput | RequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutUserInput = {
    RatingValue: number
    Comment?: string | null
    Date?: Date | string
    resource: ResourceCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutUserInput = {
    ResourceID: number
    RatingValue: number
    Comment?: string | null
    Date?: Date | string
  }

  export type RatingCreateOrConnectWithoutUserInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingCreateManyUserInputEnvelope = {
    data: RatingCreateManyUserInput | RatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FlagCreateWithoutUserInput = {
    Reason: string
    Status?: string | null
    Date?: Date | string
    resource: ResourceCreateNestedOneWithoutFlagsInput
  }

  export type FlagUncheckedCreateWithoutUserInput = {
    FlagID?: number
    Reason: string
    Status?: string | null
    Date?: Date | string
    ResourceID: number
  }

  export type FlagCreateOrConnectWithoutUserInput = {
    where: FlagWhereUniqueInput
    create: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput>
  }

  export type FlagCreateManyUserInputEnvelope = {
    data: FlagCreateManyUserInput | FlagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResourceUpsertWithWhereUniqueWithoutUserInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutUserInput, ResourceUncheckedUpdateWithoutUserInput>
    create: XOR<ResourceCreateWithoutUserInput, ResourceUncheckedCreateWithoutUserInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutUserInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutUserInput, ResourceUncheckedUpdateWithoutUserInput>
  }

  export type ResourceUpdateManyWithWhereWithoutUserInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutUserInput>
  }

  export type ResourceScalarWhereInput = {
    AND?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    OR?: ResourceScalarWhereInput[]
    NOT?: ResourceScalarWhereInput | ResourceScalarWhereInput[]
    ResourceID?: IntFilter<"Resource"> | number
    Title?: StringFilter<"Resource"> | string
    Description?: StringNullableFilter<"Resource"> | string | null
    FilePath?: StringFilter<"Resource"> | string
    FileType?: StringNullableFilter<"Resource"> | string | null
    FileSize?: IntNullableFilter<"Resource"> | number | null
    UploadDate?: DateTimeFilter<"Resource"> | Date | string
    Version?: IntNullableFilter<"Resource"> | number | null
    DownloadCount?: IntNullableFilter<"Resource"> | number | null
    Status?: StringNullableFilter<"Resource"> | string | null
    LastModified?: DateTimeNullableFilter<"Resource"> | Date | string | null
    UserID?: IntFilter<"Resource"> | number
    CourseID?: IntFilter<"Resource"> | number
  }

  export type BookUpsertWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookUpdateWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
  }

  export type BookUpdateManyWithWhereWithoutUserInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutUserInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    BookID?: IntFilter<"Book"> | number
    Title?: StringFilter<"Book"> | string
    Author?: StringFilter<"Book"> | string
    Edition?: StringNullableFilter<"Book"> | string | null
    Condition?: StringNullableFilter<"Book"> | string | null
    AvailabilityStatus?: StringNullableFilter<"Book"> | string | null
    ListedDate?: DateTimeFilter<"Book"> | Date | string
    UserID?: IntFilter<"Book"> | number
  }

  export type BookTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: BookTransactionWhereUniqueInput
    update: XOR<BookTransactionUpdateWithoutUserInput, BookTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<BookTransactionCreateWithoutUserInput, BookTransactionUncheckedCreateWithoutUserInput>
  }

  export type BookTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: BookTransactionWhereUniqueInput
    data: XOR<BookTransactionUpdateWithoutUserInput, BookTransactionUncheckedUpdateWithoutUserInput>
  }

  export type BookTransactionUpdateManyWithWhereWithoutUserInput = {
    where: BookTransactionScalarWhereInput
    data: XOR<BookTransactionUpdateManyMutationInput, BookTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type BookTransactionScalarWhereInput = {
    AND?: BookTransactionScalarWhereInput | BookTransactionScalarWhereInput[]
    OR?: BookTransactionScalarWhereInput[]
    NOT?: BookTransactionScalarWhereInput | BookTransactionScalarWhereInput[]
    TransactionID?: IntFilter<"BookTransaction"> | number
    Status?: StringNullableFilter<"BookTransaction"> | string | null
    RequestDate?: DateTimeFilter<"BookTransaction"> | Date | string
    ApprovalDate?: DateTimeNullableFilter<"BookTransaction"> | Date | string | null
    ReturnDate?: DateTimeNullableFilter<"BookTransaction"> | Date | string | null
    TransactionType?: StringNullableFilter<"BookTransaction"> | string | null
    UserID?: IntFilter<"BookTransaction"> | number
    BookID?: IntFilter<"BookTransaction"> | number
  }

  export type ForumUpsertWithWhereUniqueWithoutUserInput = {
    where: ForumWhereUniqueInput
    update: XOR<ForumUpdateWithoutUserInput, ForumUncheckedUpdateWithoutUserInput>
    create: XOR<ForumCreateWithoutUserInput, ForumUncheckedCreateWithoutUserInput>
  }

  export type ForumUpdateWithWhereUniqueWithoutUserInput = {
    where: ForumWhereUniqueInput
    data: XOR<ForumUpdateWithoutUserInput, ForumUncheckedUpdateWithoutUserInput>
  }

  export type ForumUpdateManyWithWhereWithoutUserInput = {
    where: ForumScalarWhereInput
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyWithoutUserInput>
  }

  export type ForumScalarWhereInput = {
    AND?: ForumScalarWhereInput | ForumScalarWhereInput[]
    OR?: ForumScalarWhereInput[]
    NOT?: ForumScalarWhereInput | ForumScalarWhereInput[]
    ForumID?: IntFilter<"Forum"> | number
    Title?: StringFilter<"Forum"> | string
    CreatedDate?: DateTimeFilter<"Forum"> | Date | string
    Status?: StringNullableFilter<"Forum"> | string | null
    UserID?: IntFilter<"Forum"> | number
    CourseID?: IntFilter<"Forum"> | number
  }

  export type DiscussionUpsertWithWhereUniqueWithoutUserInput = {
    where: DiscussionWhereUniqueInput
    update: XOR<DiscussionUpdateWithoutUserInput, DiscussionUncheckedUpdateWithoutUserInput>
    create: XOR<DiscussionCreateWithoutUserInput, DiscussionUncheckedCreateWithoutUserInput>
  }

  export type DiscussionUpdateWithWhereUniqueWithoutUserInput = {
    where: DiscussionWhereUniqueInput
    data: XOR<DiscussionUpdateWithoutUserInput, DiscussionUncheckedUpdateWithoutUserInput>
  }

  export type DiscussionUpdateManyWithWhereWithoutUserInput = {
    where: DiscussionScalarWhereInput
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyWithoutUserInput>
  }

  export type DiscussionScalarWhereInput = {
    AND?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
    OR?: DiscussionScalarWhereInput[]
    NOT?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
    DiscussionID?: IntFilter<"Discussion"> | number
    Content?: StringFilter<"Discussion"> | string
    Attachment?: StringNullableFilter<"Discussion"> | string | null
    Timestamp?: DateTimeFilter<"Discussion"> | Date | string
    Status?: StringNullableFilter<"Discussion"> | string | null
    UserID?: IntFilter<"Discussion"> | number
    ForumID?: IntFilter<"Discussion"> | number
  }

  export type RequestUpsertWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
    create: XOR<RequestCreateWithoutUserInput, RequestUncheckedCreateWithoutUserInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutUserInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutUserInput, RequestUncheckedUpdateWithoutUserInput>
  }

  export type RequestUpdateManyWithWhereWithoutUserInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutUserInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    RequestID?: IntFilter<"Request"> | number
    Description?: StringFilter<"Request"> | string
    Status?: StringNullableFilter<"Request"> | string | null
    CreatedDate?: DateTimeFilter<"Request"> | Date | string
    FulfilledDate?: DateTimeNullableFilter<"Request"> | Date | string | null
    UserID?: IntFilter<"Request"> | number
    CourseID?: IntFilter<"Request"> | number
  }

  export type RatingUpsertWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
  }

  export type RatingUpdateManyWithWhereWithoutUserInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutUserInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    UserID?: IntFilter<"Rating"> | number
    ResourceID?: IntFilter<"Rating"> | number
    RatingValue?: IntFilter<"Rating"> | number
    Comment?: StringNullableFilter<"Rating"> | string | null
    Date?: DateTimeFilter<"Rating"> | Date | string
  }

  export type FlagUpsertWithWhereUniqueWithoutUserInput = {
    where: FlagWhereUniqueInput
    update: XOR<FlagUpdateWithoutUserInput, FlagUncheckedUpdateWithoutUserInput>
    create: XOR<FlagCreateWithoutUserInput, FlagUncheckedCreateWithoutUserInput>
  }

  export type FlagUpdateWithWhereUniqueWithoutUserInput = {
    where: FlagWhereUniqueInput
    data: XOR<FlagUpdateWithoutUserInput, FlagUncheckedUpdateWithoutUserInput>
  }

  export type FlagUpdateManyWithWhereWithoutUserInput = {
    where: FlagScalarWhereInput
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyWithoutUserInput>
  }

  export type FlagScalarWhereInput = {
    AND?: FlagScalarWhereInput | FlagScalarWhereInput[]
    OR?: FlagScalarWhereInput[]
    NOT?: FlagScalarWhereInput | FlagScalarWhereInput[]
    FlagID?: IntFilter<"Flag"> | number
    Reason?: StringFilter<"Flag"> | string
    Status?: StringNullableFilter<"Flag"> | string | null
    Date?: DateTimeFilter<"Flag"> | Date | string
    UserID?: IntFilter<"Flag"> | number
    ResourceID?: IntFilter<"Flag"> | number
  }

  export type ResourceCreateWithoutCourseInput = {
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    user: UserCreateNestedOneWithoutResourcesInput
    tags?: ResourceTagCreateNestedManyWithoutResourceInput
    ratings?: RatingCreateNestedManyWithoutResourceInput
    flags?: FlagCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutCourseInput = {
    ResourceID?: number
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    UserID: number
    tags?: ResourceTagUncheckedCreateNestedManyWithoutResourceInput
    ratings?: RatingUncheckedCreateNestedManyWithoutResourceInput
    flags?: FlagUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutCourseInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutCourseInput, ResourceUncheckedCreateWithoutCourseInput>
  }

  export type ResourceCreateManyCourseInputEnvelope = {
    data: ResourceCreateManyCourseInput | ResourceCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type ForumCreateWithoutCourseInput = {
    Title: string
    CreatedDate?: Date | string
    Status?: string | null
    user: UserCreateNestedOneWithoutForumsInput
    discussions?: DiscussionCreateNestedManyWithoutForumInput
  }

  export type ForumUncheckedCreateWithoutCourseInput = {
    ForumID?: number
    Title: string
    CreatedDate?: Date | string
    Status?: string | null
    UserID: number
    discussions?: DiscussionUncheckedCreateNestedManyWithoutForumInput
  }

  export type ForumCreateOrConnectWithoutCourseInput = {
    where: ForumWhereUniqueInput
    create: XOR<ForumCreateWithoutCourseInput, ForumUncheckedCreateWithoutCourseInput>
  }

  export type ForumCreateManyCourseInputEnvelope = {
    data: ForumCreateManyCourseInput | ForumCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutCourseInput = {
    Description: string
    Status?: string | null
    CreatedDate?: Date | string
    FulfilledDate?: Date | string | null
    user: UserCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateWithoutCourseInput = {
    RequestID?: number
    Description: string
    Status?: string | null
    CreatedDate?: Date | string
    FulfilledDate?: Date | string | null
    UserID: number
  }

  export type RequestCreateOrConnectWithoutCourseInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutCourseInput, RequestUncheckedCreateWithoutCourseInput>
  }

  export type RequestCreateManyCourseInputEnvelope = {
    data: RequestCreateManyCourseInput | RequestCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type ResourceUpsertWithWhereUniqueWithoutCourseInput = {
    where: ResourceWhereUniqueInput
    update: XOR<ResourceUpdateWithoutCourseInput, ResourceUncheckedUpdateWithoutCourseInput>
    create: XOR<ResourceCreateWithoutCourseInput, ResourceUncheckedCreateWithoutCourseInput>
  }

  export type ResourceUpdateWithWhereUniqueWithoutCourseInput = {
    where: ResourceWhereUniqueInput
    data: XOR<ResourceUpdateWithoutCourseInput, ResourceUncheckedUpdateWithoutCourseInput>
  }

  export type ResourceUpdateManyWithWhereWithoutCourseInput = {
    where: ResourceScalarWhereInput
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyWithoutCourseInput>
  }

  export type ForumUpsertWithWhereUniqueWithoutCourseInput = {
    where: ForumWhereUniqueInput
    update: XOR<ForumUpdateWithoutCourseInput, ForumUncheckedUpdateWithoutCourseInput>
    create: XOR<ForumCreateWithoutCourseInput, ForumUncheckedCreateWithoutCourseInput>
  }

  export type ForumUpdateWithWhereUniqueWithoutCourseInput = {
    where: ForumWhereUniqueInput
    data: XOR<ForumUpdateWithoutCourseInput, ForumUncheckedUpdateWithoutCourseInput>
  }

  export type ForumUpdateManyWithWhereWithoutCourseInput = {
    where: ForumScalarWhereInput
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyWithoutCourseInput>
  }

  export type RequestUpsertWithWhereUniqueWithoutCourseInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutCourseInput, RequestUncheckedUpdateWithoutCourseInput>
    create: XOR<RequestCreateWithoutCourseInput, RequestUncheckedCreateWithoutCourseInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutCourseInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutCourseInput, RequestUncheckedUpdateWithoutCourseInput>
  }

  export type RequestUpdateManyWithWhereWithoutCourseInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutCourseInput>
  }

  export type UserCreateWithoutResourcesInput = {
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    books?: BookCreateNestedManyWithoutUserInput
    transactions?: BookTransactionCreateNestedManyWithoutUserInput
    forums?: ForumCreateNestedManyWithoutUserInput
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResourcesInput = {
    UserID?: number
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    transactions?: BookTransactionUncheckedCreateNestedManyWithoutUserInput
    forums?: ForumUncheckedCreateNestedManyWithoutUserInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResourcesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
  }

  export type CourseCreateWithoutResourcesInput = {
    CourseName: string
    CourseCode: string
    Department?: string | null
    Year?: number | null
    Semester?: number | null
    Description?: string | null
    Instructor?: string | null
    Status?: string | null
    forums?: ForumCreateNestedManyWithoutCourseInput
    requests?: RequestCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutResourcesInput = {
    CourseID?: number
    CourseName: string
    CourseCode: string
    Department?: string | null
    Year?: number | null
    Semester?: number | null
    Description?: string | null
    Instructor?: string | null
    Status?: string | null
    forums?: ForumUncheckedCreateNestedManyWithoutCourseInput
    requests?: RequestUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutResourcesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutResourcesInput, CourseUncheckedCreateWithoutResourcesInput>
  }

  export type ResourceTagCreateWithoutResourceInput = {
    Tag: string
  }

  export type ResourceTagUncheckedCreateWithoutResourceInput = {
    Tag: string
  }

  export type ResourceTagCreateOrConnectWithoutResourceInput = {
    where: ResourceTagWhereUniqueInput
    create: XOR<ResourceTagCreateWithoutResourceInput, ResourceTagUncheckedCreateWithoutResourceInput>
  }

  export type ResourceTagCreateManyResourceInputEnvelope = {
    data: ResourceTagCreateManyResourceInput | ResourceTagCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutResourceInput = {
    RatingValue: number
    Comment?: string | null
    Date?: Date | string
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutResourceInput = {
    UserID: number
    RatingValue: number
    Comment?: string | null
    Date?: Date | string
  }

  export type RatingCreateOrConnectWithoutResourceInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutResourceInput, RatingUncheckedCreateWithoutResourceInput>
  }

  export type RatingCreateManyResourceInputEnvelope = {
    data: RatingCreateManyResourceInput | RatingCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type FlagCreateWithoutResourceInput = {
    Reason: string
    Status?: string | null
    Date?: Date | string
    user: UserCreateNestedOneWithoutFlagsInput
  }

  export type FlagUncheckedCreateWithoutResourceInput = {
    FlagID?: number
    Reason: string
    Status?: string | null
    Date?: Date | string
    UserID: number
  }

  export type FlagCreateOrConnectWithoutResourceInput = {
    where: FlagWhereUniqueInput
    create: XOR<FlagCreateWithoutResourceInput, FlagUncheckedCreateWithoutResourceInput>
  }

  export type FlagCreateManyResourceInputEnvelope = {
    data: FlagCreateManyResourceInput | FlagCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutResourcesInput = {
    update: XOR<UserUpdateWithoutResourcesInput, UserUncheckedUpdateWithoutResourcesInput>
    create: XOR<UserCreateWithoutResourcesInput, UserUncheckedCreateWithoutResourcesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResourcesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResourcesInput, UserUncheckedUpdateWithoutResourcesInput>
  }

  export type UserUpdateWithoutResourcesInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    books?: BookUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUpdateManyWithoutUserNestedInput
    forums?: ForumUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResourcesInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUncheckedUpdateManyWithoutUserNestedInput
    forums?: ForumUncheckedUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutResourcesInput = {
    update: XOR<CourseUpdateWithoutResourcesInput, CourseUncheckedUpdateWithoutResourcesInput>
    create: XOR<CourseCreateWithoutResourcesInput, CourseUncheckedCreateWithoutResourcesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutResourcesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutResourcesInput, CourseUncheckedUpdateWithoutResourcesInput>
  }

  export type CourseUpdateWithoutResourcesInput = {
    CourseName?: StringFieldUpdateOperationsInput | string
    CourseCode?: StringFieldUpdateOperationsInput | string
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    forums?: ForumUpdateManyWithoutCourseNestedInput
    requests?: RequestUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutResourcesInput = {
    CourseID?: IntFieldUpdateOperationsInput | number
    CourseName?: StringFieldUpdateOperationsInput | string
    CourseCode?: StringFieldUpdateOperationsInput | string
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    forums?: ForumUncheckedUpdateManyWithoutCourseNestedInput
    requests?: RequestUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type ResourceTagUpsertWithWhereUniqueWithoutResourceInput = {
    where: ResourceTagWhereUniqueInput
    update: XOR<ResourceTagUpdateWithoutResourceInput, ResourceTagUncheckedUpdateWithoutResourceInput>
    create: XOR<ResourceTagCreateWithoutResourceInput, ResourceTagUncheckedCreateWithoutResourceInput>
  }

  export type ResourceTagUpdateWithWhereUniqueWithoutResourceInput = {
    where: ResourceTagWhereUniqueInput
    data: XOR<ResourceTagUpdateWithoutResourceInput, ResourceTagUncheckedUpdateWithoutResourceInput>
  }

  export type ResourceTagUpdateManyWithWhereWithoutResourceInput = {
    where: ResourceTagScalarWhereInput
    data: XOR<ResourceTagUpdateManyMutationInput, ResourceTagUncheckedUpdateManyWithoutResourceInput>
  }

  export type ResourceTagScalarWhereInput = {
    AND?: ResourceTagScalarWhereInput | ResourceTagScalarWhereInput[]
    OR?: ResourceTagScalarWhereInput[]
    NOT?: ResourceTagScalarWhereInput | ResourceTagScalarWhereInput[]
    ResourceID?: IntFilter<"ResourceTag"> | number
    Tag?: StringFilter<"ResourceTag"> | string
  }

  export type RatingUpsertWithWhereUniqueWithoutResourceInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutResourceInput, RatingUncheckedUpdateWithoutResourceInput>
    create: XOR<RatingCreateWithoutResourceInput, RatingUncheckedCreateWithoutResourceInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutResourceInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutResourceInput, RatingUncheckedUpdateWithoutResourceInput>
  }

  export type RatingUpdateManyWithWhereWithoutResourceInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutResourceInput>
  }

  export type FlagUpsertWithWhereUniqueWithoutResourceInput = {
    where: FlagWhereUniqueInput
    update: XOR<FlagUpdateWithoutResourceInput, FlagUncheckedUpdateWithoutResourceInput>
    create: XOR<FlagCreateWithoutResourceInput, FlagUncheckedCreateWithoutResourceInput>
  }

  export type FlagUpdateWithWhereUniqueWithoutResourceInput = {
    where: FlagWhereUniqueInput
    data: XOR<FlagUpdateWithoutResourceInput, FlagUncheckedUpdateWithoutResourceInput>
  }

  export type FlagUpdateManyWithWhereWithoutResourceInput = {
    where: FlagScalarWhereInput
    data: XOR<FlagUpdateManyMutationInput, FlagUncheckedUpdateManyWithoutResourceInput>
  }

  export type ResourceCreateWithoutTagsInput = {
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    user: UserCreateNestedOneWithoutResourcesInput
    course: CourseCreateNestedOneWithoutResourcesInput
    ratings?: RatingCreateNestedManyWithoutResourceInput
    flags?: FlagCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutTagsInput = {
    ResourceID?: number
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    UserID: number
    CourseID: number
    ratings?: RatingUncheckedCreateNestedManyWithoutResourceInput
    flags?: FlagUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutTagsInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutTagsInput, ResourceUncheckedCreateWithoutTagsInput>
  }

  export type ResourceUpsertWithoutTagsInput = {
    update: XOR<ResourceUpdateWithoutTagsInput, ResourceUncheckedUpdateWithoutTagsInput>
    create: XOR<ResourceCreateWithoutTagsInput, ResourceUncheckedCreateWithoutTagsInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutTagsInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutTagsInput, ResourceUncheckedUpdateWithoutTagsInput>
  }

  export type ResourceUpdateWithoutTagsInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutResourcesNestedInput
    course?: CourseUpdateOneRequiredWithoutResourcesNestedInput
    ratings?: RatingUpdateManyWithoutResourceNestedInput
    flags?: FlagUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutTagsInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    CourseID?: IntFieldUpdateOperationsInput | number
    ratings?: RatingUncheckedUpdateManyWithoutResourceNestedInput
    flags?: FlagUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type UserCreateWithoutBooksInput = {
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceCreateNestedManyWithoutUserInput
    transactions?: BookTransactionCreateNestedManyWithoutUserInput
    forums?: ForumCreateNestedManyWithoutUserInput
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBooksInput = {
    UserID?: number
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    transactions?: BookTransactionUncheckedCreateNestedManyWithoutUserInput
    forums?: ForumUncheckedCreateNestedManyWithoutUserInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
  }

  export type BookTransactionCreateWithoutBookInput = {
    Status?: string | null
    RequestDate?: Date | string
    ApprovalDate?: Date | string | null
    ReturnDate?: Date | string | null
    TransactionType?: string | null
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type BookTransactionUncheckedCreateWithoutBookInput = {
    TransactionID?: number
    Status?: string | null
    RequestDate?: Date | string
    ApprovalDate?: Date | string | null
    ReturnDate?: Date | string | null
    TransactionType?: string | null
    UserID: number
  }

  export type BookTransactionCreateOrConnectWithoutBookInput = {
    where: BookTransactionWhereUniqueInput
    create: XOR<BookTransactionCreateWithoutBookInput, BookTransactionUncheckedCreateWithoutBookInput>
  }

  export type BookTransactionCreateManyBookInputEnvelope = {
    data: BookTransactionCreateManyBookInput | BookTransactionCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBooksInput = {
    update: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
  }

  export type UserUpdateWithoutBooksInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUpdateManyWithoutUserNestedInput
    forums?: ForumUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBooksInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUncheckedUpdateManyWithoutUserNestedInput
    forums?: ForumUncheckedUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookTransactionUpsertWithWhereUniqueWithoutBookInput = {
    where: BookTransactionWhereUniqueInput
    update: XOR<BookTransactionUpdateWithoutBookInput, BookTransactionUncheckedUpdateWithoutBookInput>
    create: XOR<BookTransactionCreateWithoutBookInput, BookTransactionUncheckedCreateWithoutBookInput>
  }

  export type BookTransactionUpdateWithWhereUniqueWithoutBookInput = {
    where: BookTransactionWhereUniqueInput
    data: XOR<BookTransactionUpdateWithoutBookInput, BookTransactionUncheckedUpdateWithoutBookInput>
  }

  export type BookTransactionUpdateManyWithWhereWithoutBookInput = {
    where: BookTransactionScalarWhereInput
    data: XOR<BookTransactionUpdateManyMutationInput, BookTransactionUncheckedUpdateManyWithoutBookInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    forums?: ForumCreateNestedManyWithoutUserInput
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    UserID?: number
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    forums?: ForumUncheckedCreateNestedManyWithoutUserInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type BookCreateWithoutTransactionsInput = {
    Title: string
    Author: string
    Edition?: string | null
    Condition?: string | null
    AvailabilityStatus?: string | null
    ListedDate?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
  }

  export type BookUncheckedCreateWithoutTransactionsInput = {
    BookID?: number
    Title: string
    Author: string
    Edition?: string | null
    Condition?: string | null
    AvailabilityStatus?: string | null
    ListedDate?: Date | string
    UserID: number
  }

  export type BookCreateOrConnectWithoutTransactionsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutTransactionsInput, BookUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    forums?: ForumUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    forums?: ForumUncheckedUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutTransactionsInput = {
    update: XOR<BookUpdateWithoutTransactionsInput, BookUncheckedUpdateWithoutTransactionsInput>
    create: XOR<BookCreateWithoutTransactionsInput, BookUncheckedCreateWithoutTransactionsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutTransactionsInput, BookUncheckedUpdateWithoutTransactionsInput>
  }

  export type BookUpdateWithoutTransactionsInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Edition?: NullableStringFieldUpdateOperationsInput | string | null
    Condition?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ListedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateWithoutTransactionsInput = {
    BookID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Edition?: NullableStringFieldUpdateOperationsInput | string | null
    Condition?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ListedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutForumsInput = {
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    transactions?: BookTransactionCreateNestedManyWithoutUserInput
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutForumsInput = {
    UserID?: number
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    transactions?: BookTransactionUncheckedCreateNestedManyWithoutUserInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutForumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutForumsInput, UserUncheckedCreateWithoutForumsInput>
  }

  export type CourseCreateWithoutForumsInput = {
    CourseName: string
    CourseCode: string
    Department?: string | null
    Year?: number | null
    Semester?: number | null
    Description?: string | null
    Instructor?: string | null
    Status?: string | null
    resources?: ResourceCreateNestedManyWithoutCourseInput
    requests?: RequestCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutForumsInput = {
    CourseID?: number
    CourseName: string
    CourseCode: string
    Department?: string | null
    Year?: number | null
    Semester?: number | null
    Description?: string | null
    Instructor?: string | null
    Status?: string | null
    resources?: ResourceUncheckedCreateNestedManyWithoutCourseInput
    requests?: RequestUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutForumsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutForumsInput, CourseUncheckedCreateWithoutForumsInput>
  }

  export type DiscussionCreateWithoutForumInput = {
    Content: string
    Attachment?: string | null
    Timestamp?: Date | string
    Status?: string | null
    user: UserCreateNestedOneWithoutDiscussionsInput
  }

  export type DiscussionUncheckedCreateWithoutForumInput = {
    DiscussionID?: number
    Content: string
    Attachment?: string | null
    Timestamp?: Date | string
    Status?: string | null
    UserID: number
  }

  export type DiscussionCreateOrConnectWithoutForumInput = {
    where: DiscussionWhereUniqueInput
    create: XOR<DiscussionCreateWithoutForumInput, DiscussionUncheckedCreateWithoutForumInput>
  }

  export type DiscussionCreateManyForumInputEnvelope = {
    data: DiscussionCreateManyForumInput | DiscussionCreateManyForumInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutForumsInput = {
    update: XOR<UserUpdateWithoutForumsInput, UserUncheckedUpdateWithoutForumsInput>
    create: XOR<UserCreateWithoutForumsInput, UserUncheckedCreateWithoutForumsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutForumsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutForumsInput, UserUncheckedUpdateWithoutForumsInput>
  }

  export type UserUpdateWithoutForumsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutForumsInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUncheckedUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutForumsInput = {
    update: XOR<CourseUpdateWithoutForumsInput, CourseUncheckedUpdateWithoutForumsInput>
    create: XOR<CourseCreateWithoutForumsInput, CourseUncheckedCreateWithoutForumsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutForumsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutForumsInput, CourseUncheckedUpdateWithoutForumsInput>
  }

  export type CourseUpdateWithoutForumsInput = {
    CourseName?: StringFieldUpdateOperationsInput | string
    CourseCode?: StringFieldUpdateOperationsInput | string
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUpdateManyWithoutCourseNestedInput
    requests?: RequestUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutForumsInput = {
    CourseID?: IntFieldUpdateOperationsInput | number
    CourseName?: StringFieldUpdateOperationsInput | string
    CourseCode?: StringFieldUpdateOperationsInput | string
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUncheckedUpdateManyWithoutCourseNestedInput
    requests?: RequestUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type DiscussionUpsertWithWhereUniqueWithoutForumInput = {
    where: DiscussionWhereUniqueInput
    update: XOR<DiscussionUpdateWithoutForumInput, DiscussionUncheckedUpdateWithoutForumInput>
    create: XOR<DiscussionCreateWithoutForumInput, DiscussionUncheckedCreateWithoutForumInput>
  }

  export type DiscussionUpdateWithWhereUniqueWithoutForumInput = {
    where: DiscussionWhereUniqueInput
    data: XOR<DiscussionUpdateWithoutForumInput, DiscussionUncheckedUpdateWithoutForumInput>
  }

  export type DiscussionUpdateManyWithWhereWithoutForumInput = {
    where: DiscussionScalarWhereInput
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyWithoutForumInput>
  }

  export type UserCreateWithoutDiscussionsInput = {
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    transactions?: BookTransactionCreateNestedManyWithoutUserInput
    forums?: ForumCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDiscussionsInput = {
    UserID?: number
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    transactions?: BookTransactionUncheckedCreateNestedManyWithoutUserInput
    forums?: ForumUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDiscussionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
  }

  export type ForumCreateWithoutDiscussionsInput = {
    Title: string
    CreatedDate?: Date | string
    Status?: string | null
    user: UserCreateNestedOneWithoutForumsInput
    course: CourseCreateNestedOneWithoutForumsInput
  }

  export type ForumUncheckedCreateWithoutDiscussionsInput = {
    ForumID?: number
    Title: string
    CreatedDate?: Date | string
    Status?: string | null
    UserID: number
    CourseID: number
  }

  export type ForumCreateOrConnectWithoutDiscussionsInput = {
    where: ForumWhereUniqueInput
    create: XOR<ForumCreateWithoutDiscussionsInput, ForumUncheckedCreateWithoutDiscussionsInput>
  }

  export type UserUpsertWithoutDiscussionsInput = {
    update: XOR<UserUpdateWithoutDiscussionsInput, UserUncheckedUpdateWithoutDiscussionsInput>
    create: XOR<UserCreateWithoutDiscussionsInput, UserUncheckedCreateWithoutDiscussionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDiscussionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDiscussionsInput, UserUncheckedUpdateWithoutDiscussionsInput>
  }

  export type UserUpdateWithoutDiscussionsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUpdateManyWithoutUserNestedInput
    forums?: ForumUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDiscussionsInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUncheckedUpdateManyWithoutUserNestedInput
    forums?: ForumUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ForumUpsertWithoutDiscussionsInput = {
    update: XOR<ForumUpdateWithoutDiscussionsInput, ForumUncheckedUpdateWithoutDiscussionsInput>
    create: XOR<ForumCreateWithoutDiscussionsInput, ForumUncheckedCreateWithoutDiscussionsInput>
    where?: ForumWhereInput
  }

  export type ForumUpdateToOneWithWhereWithoutDiscussionsInput = {
    where?: ForumWhereInput
    data: XOR<ForumUpdateWithoutDiscussionsInput, ForumUncheckedUpdateWithoutDiscussionsInput>
  }

  export type ForumUpdateWithoutDiscussionsInput = {
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutForumsNestedInput
    course?: CourseUpdateOneRequiredWithoutForumsNestedInput
  }

  export type ForumUncheckedUpdateWithoutDiscussionsInput = {
    ForumID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    CourseID?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutRequestsInput = {
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    transactions?: BookTransactionCreateNestedManyWithoutUserInput
    forums?: ForumCreateNestedManyWithoutUserInput
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    UserID?: number
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    transactions?: BookTransactionUncheckedCreateNestedManyWithoutUserInput
    forums?: ForumUncheckedCreateNestedManyWithoutUserInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type CourseCreateWithoutRequestsInput = {
    CourseName: string
    CourseCode: string
    Department?: string | null
    Year?: number | null
    Semester?: number | null
    Description?: string | null
    Instructor?: string | null
    Status?: string | null
    resources?: ResourceCreateNestedManyWithoutCourseInput
    forums?: ForumCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutRequestsInput = {
    CourseID?: number
    CourseName: string
    CourseCode: string
    Department?: string | null
    Year?: number | null
    Semester?: number | null
    Description?: string | null
    Instructor?: string | null
    Status?: string | null
    resources?: ResourceUncheckedCreateNestedManyWithoutCourseInput
    forums?: ForumUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutRequestsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRequestsInput, CourseUncheckedCreateWithoutRequestsInput>
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUpdateManyWithoutUserNestedInput
    forums?: ForumUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUncheckedUpdateManyWithoutUserNestedInput
    forums?: ForumUncheckedUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutRequestsInput = {
    update: XOR<CourseUpdateWithoutRequestsInput, CourseUncheckedUpdateWithoutRequestsInput>
    create: XOR<CourseCreateWithoutRequestsInput, CourseUncheckedCreateWithoutRequestsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutRequestsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutRequestsInput, CourseUncheckedUpdateWithoutRequestsInput>
  }

  export type CourseUpdateWithoutRequestsInput = {
    CourseName?: StringFieldUpdateOperationsInput | string
    CourseCode?: StringFieldUpdateOperationsInput | string
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUpdateManyWithoutCourseNestedInput
    forums?: ForumUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutRequestsInput = {
    CourseID?: IntFieldUpdateOperationsInput | number
    CourseName?: StringFieldUpdateOperationsInput | string
    CourseCode?: StringFieldUpdateOperationsInput | string
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Semester?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Instructor?: NullableStringFieldUpdateOperationsInput | string | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUncheckedUpdateManyWithoutCourseNestedInput
    forums?: ForumUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutRatingsInput = {
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    transactions?: BookTransactionCreateNestedManyWithoutUserInput
    forums?: ForumCreateNestedManyWithoutUserInput
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    flags?: FlagCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatingsInput = {
    UserID?: number
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    transactions?: BookTransactionUncheckedCreateNestedManyWithoutUserInput
    forums?: ForumUncheckedCreateNestedManyWithoutUserInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
  }

  export type ResourceCreateWithoutRatingsInput = {
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    user: UserCreateNestedOneWithoutResourcesInput
    course: CourseCreateNestedOneWithoutResourcesInput
    tags?: ResourceTagCreateNestedManyWithoutResourceInput
    flags?: FlagCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutRatingsInput = {
    ResourceID?: number
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    UserID: number
    CourseID: number
    tags?: ResourceTagUncheckedCreateNestedManyWithoutResourceInput
    flags?: FlagUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutRatingsInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutRatingsInput, ResourceUncheckedCreateWithoutRatingsInput>
  }

  export type UserUpsertWithoutRatingsInput = {
    update: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateWithoutRatingsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUpdateManyWithoutUserNestedInput
    forums?: ForumUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    flags?: FlagUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUncheckedUpdateManyWithoutUserNestedInput
    forums?: ForumUncheckedUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResourceUpsertWithoutRatingsInput = {
    update: XOR<ResourceUpdateWithoutRatingsInput, ResourceUncheckedUpdateWithoutRatingsInput>
    create: XOR<ResourceCreateWithoutRatingsInput, ResourceUncheckedCreateWithoutRatingsInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutRatingsInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutRatingsInput, ResourceUncheckedUpdateWithoutRatingsInput>
  }

  export type ResourceUpdateWithoutRatingsInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutResourcesNestedInput
    course?: CourseUpdateOneRequiredWithoutResourcesNestedInput
    tags?: ResourceTagUpdateManyWithoutResourceNestedInput
    flags?: FlagUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutRatingsInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    CourseID?: IntFieldUpdateOperationsInput | number
    tags?: ResourceTagUncheckedUpdateManyWithoutResourceNestedInput
    flags?: FlagUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type UserCreateWithoutFlagsInput = {
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    transactions?: BookTransactionCreateNestedManyWithoutUserInput
    forums?: ForumCreateNestedManyWithoutUserInput
    discussions?: DiscussionCreateNestedManyWithoutUserInput
    requests?: RequestCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlagsInput = {
    UserID?: number
    Name: string
    Email: string
    PasswordHash: string
    Role: string
    Year?: number | null
    Department?: string | null
    ProfilePicture?: string | null
    Bio?: string | null
    JoinedDate?: Date | string
    LastLogin?: Date | string | null
    ContributionScore?: number
    Status?: string | null
    resources?: ResourceUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    transactions?: BookTransactionUncheckedCreateNestedManyWithoutUserInput
    forums?: ForumUncheckedCreateNestedManyWithoutUserInput
    discussions?: DiscussionUncheckedCreateNestedManyWithoutUserInput
    requests?: RequestUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
  }

  export type ResourceCreateWithoutFlagsInput = {
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    user: UserCreateNestedOneWithoutResourcesInput
    course: CourseCreateNestedOneWithoutResourcesInput
    tags?: ResourceTagCreateNestedManyWithoutResourceInput
    ratings?: RatingCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateWithoutFlagsInput = {
    ResourceID?: number
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    UserID: number
    CourseID: number
    tags?: ResourceTagUncheckedCreateNestedManyWithoutResourceInput
    ratings?: RatingUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceCreateOrConnectWithoutFlagsInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutFlagsInput, ResourceUncheckedCreateWithoutFlagsInput>
  }

  export type UserUpsertWithoutFlagsInput = {
    update: XOR<UserUpdateWithoutFlagsInput, UserUncheckedUpdateWithoutFlagsInput>
    create: XOR<UserCreateWithoutFlagsInput, UserUncheckedCreateWithoutFlagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlagsInput, UserUncheckedUpdateWithoutFlagsInput>
  }

  export type UserUpdateWithoutFlagsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUpdateManyWithoutUserNestedInput
    forums?: ForumUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUpdateManyWithoutUserNestedInput
    requests?: RequestUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlagsInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    PasswordHash?: StringFieldUpdateOperationsInput | string
    Role?: StringFieldUpdateOperationsInput | string
    Year?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: NullableStringFieldUpdateOperationsInput | string | null
    ProfilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    Bio?: NullableStringFieldUpdateOperationsInput | string | null
    JoinedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    LastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ContributionScore?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    resources?: ResourceUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    transactions?: BookTransactionUncheckedUpdateManyWithoutUserNestedInput
    forums?: ForumUncheckedUpdateManyWithoutUserNestedInput
    discussions?: DiscussionUncheckedUpdateManyWithoutUserNestedInput
    requests?: RequestUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ResourceUpsertWithoutFlagsInput = {
    update: XOR<ResourceUpdateWithoutFlagsInput, ResourceUncheckedUpdateWithoutFlagsInput>
    create: XOR<ResourceCreateWithoutFlagsInput, ResourceUncheckedCreateWithoutFlagsInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutFlagsInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutFlagsInput, ResourceUncheckedUpdateWithoutFlagsInput>
  }

  export type ResourceUpdateWithoutFlagsInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutResourcesNestedInput
    course?: CourseUpdateOneRequiredWithoutResourcesNestedInput
    tags?: ResourceTagUpdateManyWithoutResourceNestedInput
    ratings?: RatingUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutFlagsInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    CourseID?: IntFieldUpdateOperationsInput | number
    tags?: ResourceTagUncheckedUpdateManyWithoutResourceNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceCreateManyUserInput = {
    ResourceID?: number
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    CourseID: number
  }

  export type BookCreateManyUserInput = {
    BookID?: number
    Title: string
    Author: string
    Edition?: string | null
    Condition?: string | null
    AvailabilityStatus?: string | null
    ListedDate?: Date | string
  }

  export type BookTransactionCreateManyUserInput = {
    TransactionID?: number
    Status?: string | null
    RequestDate?: Date | string
    ApprovalDate?: Date | string | null
    ReturnDate?: Date | string | null
    TransactionType?: string | null
    BookID: number
  }

  export type ForumCreateManyUserInput = {
    ForumID?: number
    Title: string
    CreatedDate?: Date | string
    Status?: string | null
    CourseID: number
  }

  export type DiscussionCreateManyUserInput = {
    DiscussionID?: number
    Content: string
    Attachment?: string | null
    Timestamp?: Date | string
    Status?: string | null
    ForumID: number
  }

  export type RequestCreateManyUserInput = {
    RequestID?: number
    Description: string
    Status?: string | null
    CreatedDate?: Date | string
    FulfilledDate?: Date | string | null
    CourseID: number
  }

  export type RatingCreateManyUserInput = {
    ResourceID: number
    RatingValue: number
    Comment?: string | null
    Date?: Date | string
  }

  export type FlagCreateManyUserInput = {
    FlagID?: number
    Reason: string
    Status?: string | null
    Date?: Date | string
    ResourceID: number
  }

  export type ResourceUpdateWithoutUserInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: CourseUpdateOneRequiredWithoutResourcesNestedInput
    tags?: ResourceTagUpdateManyWithoutResourceNestedInput
    ratings?: RatingUpdateManyWithoutResourceNestedInput
    flags?: FlagUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutUserInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CourseID?: IntFieldUpdateOperationsInput | number
    tags?: ResourceTagUncheckedUpdateManyWithoutResourceNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutResourceNestedInput
    flags?: FlagUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateManyWithoutUserInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CourseID?: IntFieldUpdateOperationsInput | number
  }

  export type BookUpdateWithoutUserInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Edition?: NullableStringFieldUpdateOperationsInput | string | null
    Condition?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ListedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: BookTransactionUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutUserInput = {
    BookID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Edition?: NullableStringFieldUpdateOperationsInput | string | null
    Condition?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ListedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: BookTransactionUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutUserInput = {
    BookID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Author?: StringFieldUpdateOperationsInput | string
    Edition?: NullableStringFieldUpdateOperationsInput | string | null
    Condition?: NullableStringFieldUpdateOperationsInput | string | null
    AvailabilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    ListedDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookTransactionUpdateWithoutUserInput = {
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    RequestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ApprovalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReturnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    book?: BookUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type BookTransactionUncheckedUpdateWithoutUserInput = {
    TransactionID?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    RequestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ApprovalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReturnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    BookID?: IntFieldUpdateOperationsInput | number
  }

  export type BookTransactionUncheckedUpdateManyWithoutUserInput = {
    TransactionID?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    RequestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ApprovalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReturnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    BookID?: IntFieldUpdateOperationsInput | number
  }

  export type ForumUpdateWithoutUserInput = {
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    course?: CourseUpdateOneRequiredWithoutForumsNestedInput
    discussions?: DiscussionUpdateManyWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateWithoutUserInput = {
    ForumID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CourseID?: IntFieldUpdateOperationsInput | number
    discussions?: DiscussionUncheckedUpdateManyWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateManyWithoutUserInput = {
    ForumID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CourseID?: IntFieldUpdateOperationsInput | number
  }

  export type DiscussionUpdateWithoutUserInput = {
    Content?: StringFieldUpdateOperationsInput | string
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    forum?: ForumUpdateOneRequiredWithoutDiscussionsNestedInput
  }

  export type DiscussionUncheckedUpdateWithoutUserInput = {
    DiscussionID?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    ForumID?: IntFieldUpdateOperationsInput | number
  }

  export type DiscussionUncheckedUpdateManyWithoutUserInput = {
    DiscussionID?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    ForumID?: IntFieldUpdateOperationsInput | number
  }

  export type RequestUpdateWithoutUserInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FulfilledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: CourseUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutUserInput = {
    RequestID?: IntFieldUpdateOperationsInput | number
    Description?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FulfilledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CourseID?: IntFieldUpdateOperationsInput | number
  }

  export type RequestUncheckedUpdateManyWithoutUserInput = {
    RequestID?: IntFieldUpdateOperationsInput | number
    Description?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FulfilledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CourseID?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUpdateWithoutUserInput = {
    RatingValue?: IntFieldUpdateOperationsInput | number
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutUserInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    RatingValue?: IntFieldUpdateOperationsInput | number
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutUserInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    RatingValue?: IntFieldUpdateOperationsInput | number
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagUpdateWithoutUserInput = {
    Reason?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type FlagUncheckedUpdateWithoutUserInput = {
    FlagID?: IntFieldUpdateOperationsInput | number
    Reason?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ResourceID?: IntFieldUpdateOperationsInput | number
  }

  export type FlagUncheckedUpdateManyWithoutUserInput = {
    FlagID?: IntFieldUpdateOperationsInput | number
    Reason?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    ResourceID?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceCreateManyCourseInput = {
    ResourceID?: number
    Title: string
    Description?: string | null
    FilePath: string
    FileType?: string | null
    FileSize?: number | null
    UploadDate?: Date | string
    Version?: number | null
    DownloadCount?: number | null
    Status?: string | null
    LastModified?: Date | string | null
    UserID: number
  }

  export type ForumCreateManyCourseInput = {
    ForumID?: number
    Title: string
    CreatedDate?: Date | string
    Status?: string | null
    UserID: number
  }

  export type RequestCreateManyCourseInput = {
    RequestID?: number
    Description: string
    Status?: string | null
    CreatedDate?: Date | string
    FulfilledDate?: Date | string | null
    UserID: number
  }

  export type ResourceUpdateWithoutCourseInput = {
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutResourcesNestedInput
    tags?: ResourceTagUpdateManyWithoutResourceNestedInput
    ratings?: RatingUpdateManyWithoutResourceNestedInput
    flags?: FlagUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateWithoutCourseInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    tags?: ResourceTagUncheckedUpdateManyWithoutResourceNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutResourceNestedInput
    flags?: FlagUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateManyWithoutCourseInput = {
    ResourceID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    FilePath?: StringFieldUpdateOperationsInput | string
    FileType?: NullableStringFieldUpdateOperationsInput | string | null
    FileSize?: NullableIntFieldUpdateOperationsInput | number | null
    UploadDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Version?: NullableIntFieldUpdateOperationsInput | number | null
    DownloadCount?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    LastModified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type ForumUpdateWithoutCourseInput = {
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutForumsNestedInput
    discussions?: DiscussionUpdateManyWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateWithoutCourseInput = {
    ForumID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
    discussions?: DiscussionUncheckedUpdateManyWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateManyWithoutCourseInput = {
    ForumID?: IntFieldUpdateOperationsInput | number
    Title?: StringFieldUpdateOperationsInput | string
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type RequestUpdateWithoutCourseInput = {
    Description?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FulfilledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutCourseInput = {
    RequestID?: IntFieldUpdateOperationsInput | number
    Description?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FulfilledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type RequestUncheckedUpdateManyWithoutCourseInput = {
    RequestID?: IntFieldUpdateOperationsInput | number
    Description?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    CreatedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    FulfilledDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type ResourceTagCreateManyResourceInput = {
    Tag: string
  }

  export type RatingCreateManyResourceInput = {
    UserID: number
    RatingValue: number
    Comment?: string | null
    Date?: Date | string
  }

  export type FlagCreateManyResourceInput = {
    FlagID?: number
    Reason: string
    Status?: string | null
    Date?: Date | string
    UserID: number
  }

  export type ResourceTagUpdateWithoutResourceInput = {
    Tag?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceTagUncheckedUpdateWithoutResourceInput = {
    Tag?: StringFieldUpdateOperationsInput | string
  }

  export type ResourceTagUncheckedUpdateManyWithoutResourceInput = {
    Tag?: StringFieldUpdateOperationsInput | string
  }

  export type RatingUpdateWithoutResourceInput = {
    RatingValue?: IntFieldUpdateOperationsInput | number
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutResourceInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    RatingValue?: IntFieldUpdateOperationsInput | number
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutResourceInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    RatingValue?: IntFieldUpdateOperationsInput | number
    Comment?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlagUpdateWithoutResourceInput = {
    Reason?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type FlagUncheckedUpdateWithoutResourceInput = {
    FlagID?: IntFieldUpdateOperationsInput | number
    Reason?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type FlagUncheckedUpdateManyWithoutResourceInput = {
    FlagID?: IntFieldUpdateOperationsInput | number
    Reason?: StringFieldUpdateOperationsInput | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type BookTransactionCreateManyBookInput = {
    TransactionID?: number
    Status?: string | null
    RequestDate?: Date | string
    ApprovalDate?: Date | string | null
    ReturnDate?: Date | string | null
    TransactionType?: string | null
    UserID: number
  }

  export type BookTransactionUpdateWithoutBookInput = {
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    RequestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ApprovalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReturnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type BookTransactionUncheckedUpdateWithoutBookInput = {
    TransactionID?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    RequestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ApprovalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReturnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type BookTransactionUncheckedUpdateManyWithoutBookInput = {
    TransactionID?: IntFieldUpdateOperationsInput | number
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    RequestDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ApprovalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReturnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TransactionType?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type DiscussionCreateManyForumInput = {
    DiscussionID?: number
    Content: string
    Attachment?: string | null
    Timestamp?: Date | string
    Status?: string | null
    UserID: number
  }

  export type DiscussionUpdateWithoutForumInput = {
    Content?: StringFieldUpdateOperationsInput | string
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDiscussionsNestedInput
  }

  export type DiscussionUncheckedUpdateWithoutForumInput = {
    DiscussionID?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type DiscussionUncheckedUpdateManyWithoutForumInput = {
    DiscussionID?: IntFieldUpdateOperationsInput | number
    Content?: StringFieldUpdateOperationsInput | string
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    Timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Status?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: IntFieldUpdateOperationsInput | number
  }



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