
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Cotisation
 * 
 */
export type Cotisation = $Result.DefaultSelection<Prisma.$CotisationPayload>
/**
 * Model Membre
 * 
 */
export type Membre = $Result.DefaultSelection<Prisma.$MembrePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  OWNER: 'OWNER',
  MEMBER: 'MEMBER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
 * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.cotisation`: Exposes CRUD operations for the **Cotisation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cotisations
    * const cotisations = await prisma.cotisation.findMany()
    * ```
    */
  get cotisation(): Prisma.CotisationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membre`: Exposes CRUD operations for the **Membre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Membres
    * const membres = await prisma.membre.findMany()
    * ```
    */
  get membre(): Prisma.MembreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Cotisation: 'Cotisation',
    Membre: 'Membre',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cotisation" | "membre" | "payment"
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
      Cotisation: {
        payload: Prisma.$CotisationPayload<ExtArgs>
        fields: Prisma.CotisationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CotisationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CotisationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          findFirst: {
            args: Prisma.CotisationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CotisationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          findMany: {
            args: Prisma.CotisationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>[]
          }
          create: {
            args: Prisma.CotisationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          createMany: {
            args: Prisma.CotisationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CotisationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>[]
          }
          delete: {
            args: Prisma.CotisationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          update: {
            args: Prisma.CotisationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          deleteMany: {
            args: Prisma.CotisationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CotisationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CotisationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>[]
          }
          upsert: {
            args: Prisma.CotisationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotisationPayload>
          }
          aggregate: {
            args: Prisma.CotisationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCotisation>
          }
          groupBy: {
            args: Prisma.CotisationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CotisationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CotisationCountArgs<ExtArgs>
            result: $Utils.Optional<CotisationCountAggregateOutputType> | number
          }
        }
      }
      Membre: {
        payload: Prisma.$MembrePayload<ExtArgs>
        fields: Prisma.MembreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          findFirst: {
            args: Prisma.MembreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          findMany: {
            args: Prisma.MembreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>[]
          }
          create: {
            args: Prisma.MembreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          createMany: {
            args: Prisma.MembreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>[]
          }
          delete: {
            args: Prisma.MembreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          update: {
            args: Prisma.MembreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          deleteMany: {
            args: Prisma.MembreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>[]
          }
          upsert: {
            args: Prisma.MembreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembrePayload>
          }
          aggregate: {
            args: Prisma.MembreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembre>
          }
          groupBy: {
            args: Prisma.MembreGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembreGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembreCountArgs<ExtArgs>
            result: $Utils.Optional<MembreCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cotisation?: CotisationOmit
    membre?: MembreOmit
    payment?: PaymentOmit
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
    proprietaireCotisations: number
    membres: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proprietaireCotisations?: boolean | UserCountOutputTypeCountProprietaireCotisationsArgs
    membres?: boolean | UserCountOutputTypeCountMembresArgs
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
  export type UserCountOutputTypeCountProprietaireCotisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CotisationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreWhereInput
  }


  /**
   * Count Type CotisationCountOutputType
   */

  export type CotisationCountOutputType = {
    membres: number
    payments: number
  }

  export type CotisationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membres?: boolean | CotisationCountOutputTypeCountMembresArgs
    payments?: boolean | CotisationCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * CotisationCountOutputType without action
   */
  export type CotisationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CotisationCountOutputType
     */
    select?: CotisationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CotisationCountOutputType without action
   */
  export type CotisationCountOutputTypeCountMembresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreWhereInput
  }

  /**
   * CotisationCountOutputType without action
   */
  export type CotisationCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type MembreCountOutputType
   */

  export type MembreCountOutputType = {
    payments: number
  }

  export type MembreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | MembreCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * MembreCountOutputType without action
   */
  export type MembreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembreCountOutputType
     */
    select?: MembreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MembreCountOutputType without action
   */
  export type MembreCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    pushToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    pushToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    pushToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    pushToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    pushToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    pushToken?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    pushToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    pushToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    proprietaireCotisations?: boolean | User$proprietaireCotisationsArgs<ExtArgs>
    membres?: boolean | User$membresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    pushToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    pushToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    pushToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "pushToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proprietaireCotisations?: boolean | User$proprietaireCotisationsArgs<ExtArgs>
    membres?: boolean | User$membresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      proprietaireCotisations: Prisma.$CotisationPayload<ExtArgs>[]
      membres: Prisma.$MembrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      pushToken: string | null
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    proprietaireCotisations<T extends User$proprietaireCotisationsArgs<ExtArgs> = {}>(args?: Subset<T, User$proprietaireCotisationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    membres<T extends User$membresArgs<ExtArgs> = {}>(args?: Subset<T, User$membresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly pushToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.proprietaireCotisations
   */
  export type User$proprietaireCotisationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    where?: CotisationWhereInput
    orderBy?: CotisationOrderByWithRelationInput | CotisationOrderByWithRelationInput[]
    cursor?: CotisationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CotisationScalarFieldEnum | CotisationScalarFieldEnum[]
  }

  /**
   * User.membres
   */
  export type User$membresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    where?: MembreWhereInput
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    cursor?: MembreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
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
   * Model Cotisation
   */

  export type AggregateCotisation = {
    _count: CotisationCountAggregateOutputType | null
    _avg: CotisationAvgAggregateOutputType | null
    _sum: CotisationSumAggregateOutputType | null
    _min: CotisationMinAggregateOutputType | null
    _max: CotisationMaxAggregateOutputType | null
  }

  export type CotisationAvgAggregateOutputType = {
    montant: number | null
    frequenceJour: number | null
    totalePeriode: number | null
  }

  export type CotisationSumAggregateOutputType = {
    montant: number | null
    frequenceJour: number | null
    totalePeriode: number | null
  }

  export type CotisationMinAggregateOutputType = {
    id: string | null
    nom: string | null
    montant: number | null
    frequenceJour: number | null
    dateDebut: Date | null
    totalePeriode: number | null
    inviteCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    proprietaireId: string | null
  }

  export type CotisationMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    montant: number | null
    frequenceJour: number | null
    dateDebut: Date | null
    totalePeriode: number | null
    inviteCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    proprietaireId: string | null
  }

  export type CotisationCountAggregateOutputType = {
    id: number
    nom: number
    montant: number
    frequenceJour: number
    dateDebut: number
    totalePeriode: number
    inviteCode: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    proprietaireId: number
    _all: number
  }


  export type CotisationAvgAggregateInputType = {
    montant?: true
    frequenceJour?: true
    totalePeriode?: true
  }

  export type CotisationSumAggregateInputType = {
    montant?: true
    frequenceJour?: true
    totalePeriode?: true
  }

  export type CotisationMinAggregateInputType = {
    id?: true
    nom?: true
    montant?: true
    frequenceJour?: true
    dateDebut?: true
    totalePeriode?: true
    inviteCode?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    proprietaireId?: true
  }

  export type CotisationMaxAggregateInputType = {
    id?: true
    nom?: true
    montant?: true
    frequenceJour?: true
    dateDebut?: true
    totalePeriode?: true
    inviteCode?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    proprietaireId?: true
  }

  export type CotisationCountAggregateInputType = {
    id?: true
    nom?: true
    montant?: true
    frequenceJour?: true
    dateDebut?: true
    totalePeriode?: true
    inviteCode?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    proprietaireId?: true
    _all?: true
  }

  export type CotisationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cotisation to aggregate.
     */
    where?: CotisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotisations to fetch.
     */
    orderBy?: CotisationOrderByWithRelationInput | CotisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CotisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cotisations
    **/
    _count?: true | CotisationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CotisationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CotisationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CotisationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CotisationMaxAggregateInputType
  }

  export type GetCotisationAggregateType<T extends CotisationAggregateArgs> = {
        [P in keyof T & keyof AggregateCotisation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCotisation[P]>
      : GetScalarType<T[P], AggregateCotisation[P]>
  }




  export type CotisationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CotisationWhereInput
    orderBy?: CotisationOrderByWithAggregationInput | CotisationOrderByWithAggregationInput[]
    by: CotisationScalarFieldEnum[] | CotisationScalarFieldEnum
    having?: CotisationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CotisationCountAggregateInputType | true
    _avg?: CotisationAvgAggregateInputType
    _sum?: CotisationSumAggregateInputType
    _min?: CotisationMinAggregateInputType
    _max?: CotisationMaxAggregateInputType
  }

  export type CotisationGroupByOutputType = {
    id: string
    nom: string
    montant: number
    frequenceJour: number
    dateDebut: Date
    totalePeriode: number
    inviteCode: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    proprietaireId: string
    _count: CotisationCountAggregateOutputType | null
    _avg: CotisationAvgAggregateOutputType | null
    _sum: CotisationSumAggregateOutputType | null
    _min: CotisationMinAggregateOutputType | null
    _max: CotisationMaxAggregateOutputType | null
  }

  type GetCotisationGroupByPayload<T extends CotisationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CotisationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CotisationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CotisationGroupByOutputType[P]>
            : GetScalarType<T[P], CotisationGroupByOutputType[P]>
        }
      >
    >


  export type CotisationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    montant?: boolean
    frequenceJour?: boolean
    dateDebut?: boolean
    totalePeriode?: boolean
    inviteCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    proprietaireId?: boolean
    proprietaire?: boolean | UserDefaultArgs<ExtArgs>
    membres?: boolean | Cotisation$membresArgs<ExtArgs>
    payments?: boolean | Cotisation$paymentsArgs<ExtArgs>
    _count?: boolean | CotisationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cotisation"]>

  export type CotisationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    montant?: boolean
    frequenceJour?: boolean
    dateDebut?: boolean
    totalePeriode?: boolean
    inviteCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    proprietaireId?: boolean
    proprietaire?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cotisation"]>

  export type CotisationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    montant?: boolean
    frequenceJour?: boolean
    dateDebut?: boolean
    totalePeriode?: boolean
    inviteCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    proprietaireId?: boolean
    proprietaire?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cotisation"]>

  export type CotisationSelectScalar = {
    id?: boolean
    nom?: boolean
    montant?: boolean
    frequenceJour?: boolean
    dateDebut?: boolean
    totalePeriode?: boolean
    inviteCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    proprietaireId?: boolean
  }

  export type CotisationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "montant" | "frequenceJour" | "dateDebut" | "totalePeriode" | "inviteCode" | "createdAt" | "updatedAt" | "deletedAt" | "proprietaireId", ExtArgs["result"]["cotisation"]>
  export type CotisationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proprietaire?: boolean | UserDefaultArgs<ExtArgs>
    membres?: boolean | Cotisation$membresArgs<ExtArgs>
    payments?: boolean | Cotisation$paymentsArgs<ExtArgs>
    _count?: boolean | CotisationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CotisationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proprietaire?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CotisationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proprietaire?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CotisationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cotisation"
    objects: {
      proprietaire: Prisma.$UserPayload<ExtArgs>
      membres: Prisma.$MembrePayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      montant: number
      frequenceJour: number
      dateDebut: Date
      totalePeriode: number
      inviteCode: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      proprietaireId: string
    }, ExtArgs["result"]["cotisation"]>
    composites: {}
  }

  type CotisationGetPayload<S extends boolean | null | undefined | CotisationDefaultArgs> = $Result.GetResult<Prisma.$CotisationPayload, S>

  type CotisationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CotisationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CotisationCountAggregateInputType | true
    }

  export interface CotisationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cotisation'], meta: { name: 'Cotisation' } }
    /**
     * Find zero or one Cotisation that matches the filter.
     * @param {CotisationFindUniqueArgs} args - Arguments to find a Cotisation
     * @example
     * // Get one Cotisation
     * const cotisation = await prisma.cotisation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CotisationFindUniqueArgs>(args: SelectSubset<T, CotisationFindUniqueArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cotisation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CotisationFindUniqueOrThrowArgs} args - Arguments to find a Cotisation
     * @example
     * // Get one Cotisation
     * const cotisation = await prisma.cotisation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CotisationFindUniqueOrThrowArgs>(args: SelectSubset<T, CotisationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cotisation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationFindFirstArgs} args - Arguments to find a Cotisation
     * @example
     * // Get one Cotisation
     * const cotisation = await prisma.cotisation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CotisationFindFirstArgs>(args?: SelectSubset<T, CotisationFindFirstArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cotisation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationFindFirstOrThrowArgs} args - Arguments to find a Cotisation
     * @example
     * // Get one Cotisation
     * const cotisation = await prisma.cotisation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CotisationFindFirstOrThrowArgs>(args?: SelectSubset<T, CotisationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cotisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cotisations
     * const cotisations = await prisma.cotisation.findMany()
     * 
     * // Get first 10 Cotisations
     * const cotisations = await prisma.cotisation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cotisationWithIdOnly = await prisma.cotisation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CotisationFindManyArgs>(args?: SelectSubset<T, CotisationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cotisation.
     * @param {CotisationCreateArgs} args - Arguments to create a Cotisation.
     * @example
     * // Create one Cotisation
     * const Cotisation = await prisma.cotisation.create({
     *   data: {
     *     // ... data to create a Cotisation
     *   }
     * })
     * 
     */
    create<T extends CotisationCreateArgs>(args: SelectSubset<T, CotisationCreateArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cotisations.
     * @param {CotisationCreateManyArgs} args - Arguments to create many Cotisations.
     * @example
     * // Create many Cotisations
     * const cotisation = await prisma.cotisation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CotisationCreateManyArgs>(args?: SelectSubset<T, CotisationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cotisations and returns the data saved in the database.
     * @param {CotisationCreateManyAndReturnArgs} args - Arguments to create many Cotisations.
     * @example
     * // Create many Cotisations
     * const cotisation = await prisma.cotisation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cotisations and only return the `id`
     * const cotisationWithIdOnly = await prisma.cotisation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CotisationCreateManyAndReturnArgs>(args?: SelectSubset<T, CotisationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cotisation.
     * @param {CotisationDeleteArgs} args - Arguments to delete one Cotisation.
     * @example
     * // Delete one Cotisation
     * const Cotisation = await prisma.cotisation.delete({
     *   where: {
     *     // ... filter to delete one Cotisation
     *   }
     * })
     * 
     */
    delete<T extends CotisationDeleteArgs>(args: SelectSubset<T, CotisationDeleteArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cotisation.
     * @param {CotisationUpdateArgs} args - Arguments to update one Cotisation.
     * @example
     * // Update one Cotisation
     * const cotisation = await prisma.cotisation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CotisationUpdateArgs>(args: SelectSubset<T, CotisationUpdateArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cotisations.
     * @param {CotisationDeleteManyArgs} args - Arguments to filter Cotisations to delete.
     * @example
     * // Delete a few Cotisations
     * const { count } = await prisma.cotisation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CotisationDeleteManyArgs>(args?: SelectSubset<T, CotisationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cotisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cotisations
     * const cotisation = await prisma.cotisation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CotisationUpdateManyArgs>(args: SelectSubset<T, CotisationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cotisations and returns the data updated in the database.
     * @param {CotisationUpdateManyAndReturnArgs} args - Arguments to update many Cotisations.
     * @example
     * // Update many Cotisations
     * const cotisation = await prisma.cotisation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cotisations and only return the `id`
     * const cotisationWithIdOnly = await prisma.cotisation.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CotisationUpdateManyAndReturnArgs>(args: SelectSubset<T, CotisationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cotisation.
     * @param {CotisationUpsertArgs} args - Arguments to update or create a Cotisation.
     * @example
     * // Update or create a Cotisation
     * const cotisation = await prisma.cotisation.upsert({
     *   create: {
     *     // ... data to create a Cotisation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cotisation we want to update
     *   }
     * })
     */
    upsert<T extends CotisationUpsertArgs>(args: SelectSubset<T, CotisationUpsertArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cotisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationCountArgs} args - Arguments to filter Cotisations to count.
     * @example
     * // Count the number of Cotisations
     * const count = await prisma.cotisation.count({
     *   where: {
     *     // ... the filter for the Cotisations we want to count
     *   }
     * })
    **/
    count<T extends CotisationCountArgs>(
      args?: Subset<T, CotisationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CotisationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cotisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CotisationAggregateArgs>(args: Subset<T, CotisationAggregateArgs>): Prisma.PrismaPromise<GetCotisationAggregateType<T>>

    /**
     * Group by Cotisation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotisationGroupByArgs} args - Group by arguments.
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
      T extends CotisationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CotisationGroupByArgs['orderBy'] }
        : { orderBy?: CotisationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CotisationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCotisationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cotisation model
   */
  readonly fields: CotisationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cotisation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CotisationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proprietaire<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    membres<T extends Cotisation$membresArgs<ExtArgs> = {}>(args?: Subset<T, Cotisation$membresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Cotisation$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Cotisation$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cotisation model
   */
  interface CotisationFieldRefs {
    readonly id: FieldRef<"Cotisation", 'String'>
    readonly nom: FieldRef<"Cotisation", 'String'>
    readonly montant: FieldRef<"Cotisation", 'Int'>
    readonly frequenceJour: FieldRef<"Cotisation", 'Int'>
    readonly dateDebut: FieldRef<"Cotisation", 'DateTime'>
    readonly totalePeriode: FieldRef<"Cotisation", 'Int'>
    readonly inviteCode: FieldRef<"Cotisation", 'String'>
    readonly createdAt: FieldRef<"Cotisation", 'DateTime'>
    readonly updatedAt: FieldRef<"Cotisation", 'DateTime'>
    readonly deletedAt: FieldRef<"Cotisation", 'DateTime'>
    readonly proprietaireId: FieldRef<"Cotisation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cotisation findUnique
   */
  export type CotisationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter, which Cotisation to fetch.
     */
    where: CotisationWhereUniqueInput
  }

  /**
   * Cotisation findUniqueOrThrow
   */
  export type CotisationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter, which Cotisation to fetch.
     */
    where: CotisationWhereUniqueInput
  }

  /**
   * Cotisation findFirst
   */
  export type CotisationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter, which Cotisation to fetch.
     */
    where?: CotisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotisations to fetch.
     */
    orderBy?: CotisationOrderByWithRelationInput | CotisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cotisations.
     */
    cursor?: CotisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cotisations.
     */
    distinct?: CotisationScalarFieldEnum | CotisationScalarFieldEnum[]
  }

  /**
   * Cotisation findFirstOrThrow
   */
  export type CotisationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter, which Cotisation to fetch.
     */
    where?: CotisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotisations to fetch.
     */
    orderBy?: CotisationOrderByWithRelationInput | CotisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cotisations.
     */
    cursor?: CotisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotisations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cotisations.
     */
    distinct?: CotisationScalarFieldEnum | CotisationScalarFieldEnum[]
  }

  /**
   * Cotisation findMany
   */
  export type CotisationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter, which Cotisations to fetch.
     */
    where?: CotisationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotisations to fetch.
     */
    orderBy?: CotisationOrderByWithRelationInput | CotisationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cotisations.
     */
    cursor?: CotisationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotisations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotisations.
     */
    skip?: number
    distinct?: CotisationScalarFieldEnum | CotisationScalarFieldEnum[]
  }

  /**
   * Cotisation create
   */
  export type CotisationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * The data needed to create a Cotisation.
     */
    data: XOR<CotisationCreateInput, CotisationUncheckedCreateInput>
  }

  /**
   * Cotisation createMany
   */
  export type CotisationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cotisations.
     */
    data: CotisationCreateManyInput | CotisationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cotisation createManyAndReturn
   */
  export type CotisationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * The data used to create many Cotisations.
     */
    data: CotisationCreateManyInput | CotisationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cotisation update
   */
  export type CotisationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * The data needed to update a Cotisation.
     */
    data: XOR<CotisationUpdateInput, CotisationUncheckedUpdateInput>
    /**
     * Choose, which Cotisation to update.
     */
    where: CotisationWhereUniqueInput
  }

  /**
   * Cotisation updateMany
   */
  export type CotisationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cotisations.
     */
    data: XOR<CotisationUpdateManyMutationInput, CotisationUncheckedUpdateManyInput>
    /**
     * Filter which Cotisations to update
     */
    where?: CotisationWhereInput
    /**
     * Limit how many Cotisations to update.
     */
    limit?: number
  }

  /**
   * Cotisation updateManyAndReturn
   */
  export type CotisationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * The data used to update Cotisations.
     */
    data: XOR<CotisationUpdateManyMutationInput, CotisationUncheckedUpdateManyInput>
    /**
     * Filter which Cotisations to update
     */
    where?: CotisationWhereInput
    /**
     * Limit how many Cotisations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cotisation upsert
   */
  export type CotisationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * The filter to search for the Cotisation to update in case it exists.
     */
    where: CotisationWhereUniqueInput
    /**
     * In case the Cotisation found by the `where` argument doesn't exist, create a new Cotisation with this data.
     */
    create: XOR<CotisationCreateInput, CotisationUncheckedCreateInput>
    /**
     * In case the Cotisation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CotisationUpdateInput, CotisationUncheckedUpdateInput>
  }

  /**
   * Cotisation delete
   */
  export type CotisationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
    /**
     * Filter which Cotisation to delete.
     */
    where: CotisationWhereUniqueInput
  }

  /**
   * Cotisation deleteMany
   */
  export type CotisationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cotisations to delete
     */
    where?: CotisationWhereInput
    /**
     * Limit how many Cotisations to delete.
     */
    limit?: number
  }

  /**
   * Cotisation.membres
   */
  export type Cotisation$membresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    where?: MembreWhereInput
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    cursor?: MembreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
  }

  /**
   * Cotisation.payments
   */
  export type Cotisation$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Cotisation without action
   */
  export type CotisationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotisation
     */
    select?: CotisationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotisation
     */
    omit?: CotisationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotisationInclude<ExtArgs> | null
  }


  /**
   * Model Membre
   */

  export type AggregateMembre = {
    _count: MembreCountAggregateOutputType | null
    _min: MembreMinAggregateOutputType | null
    _max: MembreMaxAggregateOutputType | null
  }

  export type MembreMinAggregateOutputType = {
    id: string | null
    nom: string | null
    email: string | null
    joinedAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
    cotisationId: string | null
    role: $Enums.Role | null
  }

  export type MembreMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    email: string | null
    joinedAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: string | null
    cotisationId: string | null
    role: $Enums.Role | null
  }

  export type MembreCountAggregateOutputType = {
    id: number
    nom: number
    email: number
    joinedAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    cotisationId: number
    role: number
    _all: number
  }


  export type MembreMinAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    joinedAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    cotisationId?: true
    role?: true
  }

  export type MembreMaxAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    joinedAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    cotisationId?: true
    role?: true
  }

  export type MembreCountAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    joinedAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    cotisationId?: true
    role?: true
    _all?: true
  }

  export type MembreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membre to aggregate.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Membres
    **/
    _count?: true | MembreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembreMaxAggregateInputType
  }

  export type GetMembreAggregateType<T extends MembreAggregateArgs> = {
        [P in keyof T & keyof AggregateMembre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembre[P]>
      : GetScalarType<T[P], AggregateMembre[P]>
  }




  export type MembreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembreWhereInput
    orderBy?: MembreOrderByWithAggregationInput | MembreOrderByWithAggregationInput[]
    by: MembreScalarFieldEnum[] | MembreScalarFieldEnum
    having?: MembreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembreCountAggregateInputType | true
    _min?: MembreMinAggregateInputType
    _max?: MembreMaxAggregateInputType
  }

  export type MembreGroupByOutputType = {
    id: string
    nom: string
    email: string | null
    joinedAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: string | null
    cotisationId: string
    role: $Enums.Role
    _count: MembreCountAggregateOutputType | null
    _min: MembreMinAggregateOutputType | null
    _max: MembreMaxAggregateOutputType | null
  }

  type GetMembreGroupByPayload<T extends MembreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembreGroupByOutputType[P]>
            : GetScalarType<T[P], MembreGroupByOutputType[P]>
        }
      >
    >


  export type MembreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    cotisationId?: boolean
    role?: boolean
    user?: boolean | Membre$userArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
    payments?: boolean | Membre$paymentsArgs<ExtArgs>
    _count?: boolean | MembreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membre"]>

  export type MembreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    cotisationId?: boolean
    role?: boolean
    user?: boolean | Membre$userArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membre"]>

  export type MembreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    cotisationId?: boolean
    role?: boolean
    user?: boolean | Membre$userArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membre"]>

  export type MembreSelectScalar = {
    id?: boolean
    nom?: boolean
    email?: boolean
    joinedAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    cotisationId?: boolean
    role?: boolean
  }

  export type MembreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "email" | "joinedAt" | "updatedAt" | "deletedAt" | "userId" | "cotisationId" | "role", ExtArgs["result"]["membre"]>
  export type MembreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Membre$userArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
    payments?: boolean | Membre$paymentsArgs<ExtArgs>
    _count?: boolean | MembreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MembreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Membre$userArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
  }
  export type MembreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Membre$userArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
  }

  export type $MembrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membre"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      cotisation: Prisma.$CotisationPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      email: string | null
      joinedAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: string | null
      cotisationId: string
      role: $Enums.Role
    }, ExtArgs["result"]["membre"]>
    composites: {}
  }

  type MembreGetPayload<S extends boolean | null | undefined | MembreDefaultArgs> = $Result.GetResult<Prisma.$MembrePayload, S>

  type MembreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembreCountAggregateInputType | true
    }

  export interface MembreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membre'], meta: { name: 'Membre' } }
    /**
     * Find zero or one Membre that matches the filter.
     * @param {MembreFindUniqueArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembreFindUniqueArgs>(args: SelectSubset<T, MembreFindUniqueArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Membre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembreFindUniqueOrThrowArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembreFindUniqueOrThrowArgs>(args: SelectSubset<T, MembreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreFindFirstArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembreFindFirstArgs>(args?: SelectSubset<T, MembreFindFirstArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Membre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreFindFirstOrThrowArgs} args - Arguments to find a Membre
     * @example
     * // Get one Membre
     * const membre = await prisma.membre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembreFindFirstOrThrowArgs>(args?: SelectSubset<T, MembreFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Membres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Membres
     * const membres = await prisma.membre.findMany()
     * 
     * // Get first 10 Membres
     * const membres = await prisma.membre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membreWithIdOnly = await prisma.membre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembreFindManyArgs>(args?: SelectSubset<T, MembreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Membre.
     * @param {MembreCreateArgs} args - Arguments to create a Membre.
     * @example
     * // Create one Membre
     * const Membre = await prisma.membre.create({
     *   data: {
     *     // ... data to create a Membre
     *   }
     * })
     * 
     */
    create<T extends MembreCreateArgs>(args: SelectSubset<T, MembreCreateArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Membres.
     * @param {MembreCreateManyArgs} args - Arguments to create many Membres.
     * @example
     * // Create many Membres
     * const membre = await prisma.membre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembreCreateManyArgs>(args?: SelectSubset<T, MembreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Membres and returns the data saved in the database.
     * @param {MembreCreateManyAndReturnArgs} args - Arguments to create many Membres.
     * @example
     * // Create many Membres
     * const membre = await prisma.membre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Membres and only return the `id`
     * const membreWithIdOnly = await prisma.membre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembreCreateManyAndReturnArgs>(args?: SelectSubset<T, MembreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Membre.
     * @param {MembreDeleteArgs} args - Arguments to delete one Membre.
     * @example
     * // Delete one Membre
     * const Membre = await prisma.membre.delete({
     *   where: {
     *     // ... filter to delete one Membre
     *   }
     * })
     * 
     */
    delete<T extends MembreDeleteArgs>(args: SelectSubset<T, MembreDeleteArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Membre.
     * @param {MembreUpdateArgs} args - Arguments to update one Membre.
     * @example
     * // Update one Membre
     * const membre = await prisma.membre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembreUpdateArgs>(args: SelectSubset<T, MembreUpdateArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Membres.
     * @param {MembreDeleteManyArgs} args - Arguments to filter Membres to delete.
     * @example
     * // Delete a few Membres
     * const { count } = await prisma.membre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembreDeleteManyArgs>(args?: SelectSubset<T, MembreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Membres
     * const membre = await prisma.membre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembreUpdateManyArgs>(args: SelectSubset<T, MembreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Membres and returns the data updated in the database.
     * @param {MembreUpdateManyAndReturnArgs} args - Arguments to update many Membres.
     * @example
     * // Update many Membres
     * const membre = await prisma.membre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Membres and only return the `id`
     * const membreWithIdOnly = await prisma.membre.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MembreUpdateManyAndReturnArgs>(args: SelectSubset<T, MembreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Membre.
     * @param {MembreUpsertArgs} args - Arguments to update or create a Membre.
     * @example
     * // Update or create a Membre
     * const membre = await prisma.membre.upsert({
     *   create: {
     *     // ... data to create a Membre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membre we want to update
     *   }
     * })
     */
    upsert<T extends MembreUpsertArgs>(args: SelectSubset<T, MembreUpsertArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Membres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreCountArgs} args - Arguments to filter Membres to count.
     * @example
     * // Count the number of Membres
     * const count = await prisma.membre.count({
     *   where: {
     *     // ... the filter for the Membres we want to count
     *   }
     * })
    **/
    count<T extends MembreCountArgs>(
      args?: Subset<T, MembreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembreAggregateArgs>(args: Subset<T, MembreAggregateArgs>): Prisma.PrismaPromise<GetMembreAggregateType<T>>

    /**
     * Group by Membre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembreGroupByArgs} args - Group by arguments.
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
      T extends MembreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembreGroupByArgs['orderBy'] }
        : { orderBy?: MembreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membre model
   */
  readonly fields: MembreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Membre$userArgs<ExtArgs> = {}>(args?: Subset<T, Membre$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cotisation<T extends CotisationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CotisationDefaultArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Membre$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Membre$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Membre model
   */
  interface MembreFieldRefs {
    readonly id: FieldRef<"Membre", 'String'>
    readonly nom: FieldRef<"Membre", 'String'>
    readonly email: FieldRef<"Membre", 'String'>
    readonly joinedAt: FieldRef<"Membre", 'DateTime'>
    readonly updatedAt: FieldRef<"Membre", 'DateTime'>
    readonly deletedAt: FieldRef<"Membre", 'DateTime'>
    readonly userId: FieldRef<"Membre", 'String'>
    readonly cotisationId: FieldRef<"Membre", 'String'>
    readonly role: FieldRef<"Membre", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Membre findUnique
   */
  export type MembreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre findUniqueOrThrow
   */
  export type MembreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre findFirst
   */
  export type MembreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Membres.
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Membres.
     */
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
  }

  /**
   * Membre findFirstOrThrow
   */
  export type MembreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membre to fetch.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Membres.
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Membres.
     */
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
  }

  /**
   * Membre findMany
   */
  export type MembreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter, which Membres to fetch.
     */
    where?: MembreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Membres to fetch.
     */
    orderBy?: MembreOrderByWithRelationInput | MembreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Membres.
     */
    cursor?: MembreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Membres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Membres.
     */
    skip?: number
    distinct?: MembreScalarFieldEnum | MembreScalarFieldEnum[]
  }

  /**
   * Membre create
   */
  export type MembreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * The data needed to create a Membre.
     */
    data: XOR<MembreCreateInput, MembreUncheckedCreateInput>
  }

  /**
   * Membre createMany
   */
  export type MembreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Membres.
     */
    data: MembreCreateManyInput | MembreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Membre createManyAndReturn
   */
  export type MembreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * The data used to create many Membres.
     */
    data: MembreCreateManyInput | MembreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membre update
   */
  export type MembreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * The data needed to update a Membre.
     */
    data: XOR<MembreUpdateInput, MembreUncheckedUpdateInput>
    /**
     * Choose, which Membre to update.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre updateMany
   */
  export type MembreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Membres.
     */
    data: XOR<MembreUpdateManyMutationInput, MembreUncheckedUpdateManyInput>
    /**
     * Filter which Membres to update
     */
    where?: MembreWhereInput
    /**
     * Limit how many Membres to update.
     */
    limit?: number
  }

  /**
   * Membre updateManyAndReturn
   */
  export type MembreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * The data used to update Membres.
     */
    data: XOR<MembreUpdateManyMutationInput, MembreUncheckedUpdateManyInput>
    /**
     * Filter which Membres to update
     */
    where?: MembreWhereInput
    /**
     * Limit how many Membres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Membre upsert
   */
  export type MembreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * The filter to search for the Membre to update in case it exists.
     */
    where: MembreWhereUniqueInput
    /**
     * In case the Membre found by the `where` argument doesn't exist, create a new Membre with this data.
     */
    create: XOR<MembreCreateInput, MembreUncheckedCreateInput>
    /**
     * In case the Membre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembreUpdateInput, MembreUncheckedUpdateInput>
  }

  /**
   * Membre delete
   */
  export type MembreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
    /**
     * Filter which Membre to delete.
     */
    where: MembreWhereUniqueInput
  }

  /**
   * Membre deleteMany
   */
  export type MembreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membres to delete
     */
    where?: MembreWhereInput
    /**
     * Limit how many Membres to delete.
     */
    limit?: number
  }

  /**
   * Membre.user
   */
  export type Membre$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Membre.payments
   */
  export type Membre$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Membre without action
   */
  export type MembreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membre
     */
    select?: MembreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Membre
     */
    omit?: MembreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembreInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    montant: number | null
    numeroPeriode: number | null
  }

  export type PaymentSumAggregateOutputType = {
    montant: number | null
    numeroPeriode: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    montant: number | null
    numeroPeriode: number | null
    paidAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    membreId: string | null
    cotisationId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    montant: number | null
    numeroPeriode: number | null
    paidAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    membreId: string | null
    cotisationId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    montant: number
    numeroPeriode: number
    paidAt: number
    updatedAt: number
    deletedAt: number
    membreId: number
    cotisationId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    montant?: true
    numeroPeriode?: true
  }

  export type PaymentSumAggregateInputType = {
    montant?: true
    numeroPeriode?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    montant?: true
    numeroPeriode?: true
    paidAt?: true
    updatedAt?: true
    deletedAt?: true
    membreId?: true
    cotisationId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    montant?: true
    numeroPeriode?: true
    paidAt?: true
    updatedAt?: true
    deletedAt?: true
    membreId?: true
    cotisationId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    montant?: true
    numeroPeriode?: true
    paidAt?: true
    updatedAt?: true
    deletedAt?: true
    membreId?: true
    cotisationId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    montant: number
    numeroPeriode: number
    paidAt: Date
    updatedAt: Date
    deletedAt: Date | null
    membreId: string
    cotisationId: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    numeroPeriode?: boolean
    paidAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    membreId?: boolean
    cotisationId?: boolean
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    numeroPeriode?: boolean
    paidAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    membreId?: boolean
    cotisationId?: boolean
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    numeroPeriode?: boolean
    paidAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    membreId?: boolean
    cotisationId?: boolean
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    montant?: boolean
    numeroPeriode?: boolean
    paidAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    membreId?: boolean
    cotisationId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "montant" | "numeroPeriode" | "paidAt" | "updatedAt" | "deletedAt" | "membreId" | "cotisationId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membre?: boolean | MembreDefaultArgs<ExtArgs>
    cotisation?: boolean | CotisationDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      membre: Prisma.$MembrePayload<ExtArgs>
      cotisation: Prisma.$CotisationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      montant: number
      numeroPeriode: number
      paidAt: Date
      updatedAt: Date
      deletedAt: Date | null
      membreId: string
      cotisationId: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membre<T extends MembreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembreDefaultArgs<ExtArgs>>): Prisma__MembreClient<$Result.GetResult<Prisma.$MembrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cotisation<T extends CotisationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CotisationDefaultArgs<ExtArgs>>): Prisma__CotisationClient<$Result.GetResult<Prisma.$CotisationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly montant: FieldRef<"Payment", 'Int'>
    readonly numeroPeriode: FieldRef<"Payment", 'Int'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly deletedAt: FieldRef<"Payment", 'DateTime'>
    readonly membreId: FieldRef<"Payment", 'String'>
    readonly cotisationId: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    pushToken: 'pushToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CotisationScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    montant: 'montant',
    frequenceJour: 'frequenceJour',
    dateDebut: 'dateDebut',
    totalePeriode: 'totalePeriode',
    inviteCode: 'inviteCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    proprietaireId: 'proprietaireId'
  };

  export type CotisationScalarFieldEnum = (typeof CotisationScalarFieldEnum)[keyof typeof CotisationScalarFieldEnum]


  export const MembreScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    email: 'email',
    joinedAt: 'joinedAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId',
    cotisationId: 'cotisationId',
    role: 'role'
  };

  export type MembreScalarFieldEnum = (typeof MembreScalarFieldEnum)[keyof typeof MembreScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    montant: 'montant',
    numeroPeriode: 'numeroPeriode',
    paidAt: 'paidAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    membreId: 'membreId',
    cotisationId: 'cotisationId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pushToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    proprietaireCotisations?: CotisationListRelationFilter
    membres?: MembreListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pushToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    proprietaireCotisations?: CotisationOrderByRelationAggregateInput
    membres?: MembreOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pushToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    proprietaireCotisations?: CotisationListRelationFilter
    membres?: MembreListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pushToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    pushToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CotisationWhereInput = {
    AND?: CotisationWhereInput | CotisationWhereInput[]
    OR?: CotisationWhereInput[]
    NOT?: CotisationWhereInput | CotisationWhereInput[]
    id?: StringFilter<"Cotisation"> | string
    nom?: StringFilter<"Cotisation"> | string
    montant?: IntFilter<"Cotisation"> | number
    frequenceJour?: IntFilter<"Cotisation"> | number
    dateDebut?: DateTimeFilter<"Cotisation"> | Date | string
    totalePeriode?: IntFilter<"Cotisation"> | number
    inviteCode?: StringNullableFilter<"Cotisation"> | string | null
    createdAt?: DateTimeFilter<"Cotisation"> | Date | string
    updatedAt?: DateTimeFilter<"Cotisation"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Cotisation"> | Date | string | null
    proprietaireId?: StringFilter<"Cotisation"> | string
    proprietaire?: XOR<UserScalarRelationFilter, UserWhereInput>
    membres?: MembreListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type CotisationOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    montant?: SortOrder
    frequenceJour?: SortOrder
    dateDebut?: SortOrder
    totalePeriode?: SortOrder
    inviteCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    proprietaireId?: SortOrder
    proprietaire?: UserOrderByWithRelationInput
    membres?: MembreOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type CotisationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inviteCode?: string
    AND?: CotisationWhereInput | CotisationWhereInput[]
    OR?: CotisationWhereInput[]
    NOT?: CotisationWhereInput | CotisationWhereInput[]
    nom?: StringFilter<"Cotisation"> | string
    montant?: IntFilter<"Cotisation"> | number
    frequenceJour?: IntFilter<"Cotisation"> | number
    dateDebut?: DateTimeFilter<"Cotisation"> | Date | string
    totalePeriode?: IntFilter<"Cotisation"> | number
    createdAt?: DateTimeFilter<"Cotisation"> | Date | string
    updatedAt?: DateTimeFilter<"Cotisation"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Cotisation"> | Date | string | null
    proprietaireId?: StringFilter<"Cotisation"> | string
    proprietaire?: XOR<UserScalarRelationFilter, UserWhereInput>
    membres?: MembreListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "inviteCode">

  export type CotisationOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    montant?: SortOrder
    frequenceJour?: SortOrder
    dateDebut?: SortOrder
    totalePeriode?: SortOrder
    inviteCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    proprietaireId?: SortOrder
    _count?: CotisationCountOrderByAggregateInput
    _avg?: CotisationAvgOrderByAggregateInput
    _max?: CotisationMaxOrderByAggregateInput
    _min?: CotisationMinOrderByAggregateInput
    _sum?: CotisationSumOrderByAggregateInput
  }

  export type CotisationScalarWhereWithAggregatesInput = {
    AND?: CotisationScalarWhereWithAggregatesInput | CotisationScalarWhereWithAggregatesInput[]
    OR?: CotisationScalarWhereWithAggregatesInput[]
    NOT?: CotisationScalarWhereWithAggregatesInput | CotisationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cotisation"> | string
    nom?: StringWithAggregatesFilter<"Cotisation"> | string
    montant?: IntWithAggregatesFilter<"Cotisation"> | number
    frequenceJour?: IntWithAggregatesFilter<"Cotisation"> | number
    dateDebut?: DateTimeWithAggregatesFilter<"Cotisation"> | Date | string
    totalePeriode?: IntWithAggregatesFilter<"Cotisation"> | number
    inviteCode?: StringNullableWithAggregatesFilter<"Cotisation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cotisation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cotisation"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Cotisation"> | Date | string | null
    proprietaireId?: StringWithAggregatesFilter<"Cotisation"> | string
  }

  export type MembreWhereInput = {
    AND?: MembreWhereInput | MembreWhereInput[]
    OR?: MembreWhereInput[]
    NOT?: MembreWhereInput | MembreWhereInput[]
    id?: StringFilter<"Membre"> | string
    nom?: StringFilter<"Membre"> | string
    email?: StringNullableFilter<"Membre"> | string | null
    joinedAt?: DateTimeFilter<"Membre"> | Date | string
    updatedAt?: DateTimeFilter<"Membre"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Membre"> | Date | string | null
    userId?: StringNullableFilter<"Membre"> | string | null
    cotisationId?: StringFilter<"Membre"> | string
    role?: EnumRoleFilter<"Membre"> | $Enums.Role
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    cotisation?: XOR<CotisationScalarRelationFilter, CotisationWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type MembreOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    cotisationId?: SortOrder
    role?: SortOrder
    user?: UserOrderByWithRelationInput
    cotisation?: CotisationOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type MembreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cotisationId_email?: MembreCotisationIdEmailCompoundUniqueInput
    AND?: MembreWhereInput | MembreWhereInput[]
    OR?: MembreWhereInput[]
    NOT?: MembreWhereInput | MembreWhereInput[]
    nom?: StringFilter<"Membre"> | string
    email?: StringNullableFilter<"Membre"> | string | null
    joinedAt?: DateTimeFilter<"Membre"> | Date | string
    updatedAt?: DateTimeFilter<"Membre"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Membre"> | Date | string | null
    userId?: StringNullableFilter<"Membre"> | string | null
    cotisationId?: StringFilter<"Membre"> | string
    role?: EnumRoleFilter<"Membre"> | $Enums.Role
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    cotisation?: XOR<CotisationScalarRelationFilter, CotisationWhereInput>
    payments?: PaymentListRelationFilter
  }, "id" | "cotisationId_email">

  export type MembreOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    cotisationId?: SortOrder
    role?: SortOrder
    _count?: MembreCountOrderByAggregateInput
    _max?: MembreMaxOrderByAggregateInput
    _min?: MembreMinOrderByAggregateInput
  }

  export type MembreScalarWhereWithAggregatesInput = {
    AND?: MembreScalarWhereWithAggregatesInput | MembreScalarWhereWithAggregatesInput[]
    OR?: MembreScalarWhereWithAggregatesInput[]
    NOT?: MembreScalarWhereWithAggregatesInput | MembreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Membre"> | string
    nom?: StringWithAggregatesFilter<"Membre"> | string
    email?: StringNullableWithAggregatesFilter<"Membre"> | string | null
    joinedAt?: DateTimeWithAggregatesFilter<"Membre"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Membre"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Membre"> | Date | string | null
    userId?: StringNullableWithAggregatesFilter<"Membre"> | string | null
    cotisationId?: StringWithAggregatesFilter<"Membre"> | string
    role?: EnumRoleWithAggregatesFilter<"Membre"> | $Enums.Role
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    montant?: IntFilter<"Payment"> | number
    numeroPeriode?: IntFilter<"Payment"> | number
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    membreId?: StringFilter<"Payment"> | string
    cotisationId?: StringFilter<"Payment"> | string
    membre?: XOR<MembreScalarRelationFilter, MembreWhereInput>
    cotisation?: XOR<CotisationScalarRelationFilter, CotisationWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    montant?: SortOrder
    numeroPeriode?: SortOrder
    paidAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    membreId?: SortOrder
    cotisationId?: SortOrder
    membre?: MembreOrderByWithRelationInput
    cotisation?: CotisationOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cotisationId_membreId_numeroPeriode?: PaymentCotisationIdMembreIdNumeroPeriodeCompoundUniqueInput
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    montant?: IntFilter<"Payment"> | number
    numeroPeriode?: IntFilter<"Payment"> | number
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    membreId?: StringFilter<"Payment"> | string
    cotisationId?: StringFilter<"Payment"> | string
    membre?: XOR<MembreScalarRelationFilter, MembreWhereInput>
    cotisation?: XOR<CotisationScalarRelationFilter, CotisationWhereInput>
  }, "id" | "cotisationId_membreId_numeroPeriode">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    montant?: SortOrder
    numeroPeriode?: SortOrder
    paidAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    membreId?: SortOrder
    cotisationId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    montant?: IntWithAggregatesFilter<"Payment"> | number
    numeroPeriode?: IntWithAggregatesFilter<"Payment"> | number
    paidAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    membreId?: StringWithAggregatesFilter<"Payment"> | string
    cotisationId?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    pushToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    proprietaireCotisations?: CotisationCreateNestedManyWithoutProprietaireInput
    membres?: MembreCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    pushToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    proprietaireCotisations?: CotisationUncheckedCreateNestedManyWithoutProprietaireInput
    membres?: MembreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proprietaireCotisations?: CotisationUpdateManyWithoutProprietaireNestedInput
    membres?: MembreUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proprietaireCotisations?: CotisationUncheckedUpdateManyWithoutProprietaireNestedInput
    membres?: MembreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    pushToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CotisationCreateInput = {
    id?: string
    nom: string
    montant: number
    frequenceJour: number
    dateDebut: Date | string
    totalePeriode: number
    inviteCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    proprietaire: UserCreateNestedOneWithoutProprietaireCotisationsInput
    membres?: MembreCreateNestedManyWithoutCotisationInput
    payments?: PaymentCreateNestedManyWithoutCotisationInput
  }

  export type CotisationUncheckedCreateInput = {
    id?: string
    nom: string
    montant: number
    frequenceJour: number
    dateDebut: Date | string
    totalePeriode: number
    inviteCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    proprietaireId: string
    membres?: MembreUncheckedCreateNestedManyWithoutCotisationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCotisationInput
  }

  export type CotisationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    frequenceJour?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalePeriode?: IntFieldUpdateOperationsInput | number
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proprietaire?: UserUpdateOneRequiredWithoutProprietaireCotisationsNestedInput
    membres?: MembreUpdateManyWithoutCotisationNestedInput
    payments?: PaymentUpdateManyWithoutCotisationNestedInput
  }

  export type CotisationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    frequenceJour?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalePeriode?: IntFieldUpdateOperationsInput | number
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proprietaireId?: StringFieldUpdateOperationsInput | string
    membres?: MembreUncheckedUpdateManyWithoutCotisationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCotisationNestedInput
  }

  export type CotisationCreateManyInput = {
    id?: string
    nom: string
    montant: number
    frequenceJour: number
    dateDebut: Date | string
    totalePeriode: number
    inviteCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    proprietaireId: string
  }

  export type CotisationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    frequenceJour?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalePeriode?: IntFieldUpdateOperationsInput | number
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CotisationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    frequenceJour?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalePeriode?: IntFieldUpdateOperationsInput | number
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proprietaireId?: StringFieldUpdateOperationsInput | string
  }

  export type MembreCreateInput = {
    id?: string
    nom: string
    email?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    user?: UserCreateNestedOneWithoutMembresInput
    cotisation: CotisationCreateNestedOneWithoutMembresInput
    payments?: PaymentCreateNestedManyWithoutMembreInput
  }

  export type MembreUncheckedCreateInput = {
    id?: string
    nom: string
    email?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId?: string | null
    cotisationId: string
    role?: $Enums.Role
    payments?: PaymentUncheckedCreateNestedManyWithoutMembreInput
  }

  export type MembreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneWithoutMembresNestedInput
    cotisation?: CotisationUpdateOneRequiredWithoutMembresNestedInput
    payments?: PaymentUpdateManyWithoutMembreNestedInput
  }

  export type MembreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    cotisationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    payments?: PaymentUncheckedUpdateManyWithoutMembreNestedInput
  }

  export type MembreCreateManyInput = {
    id?: string
    nom: string
    email?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId?: string | null
    cotisationId: string
    role?: $Enums.Role
  }

  export type MembreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type MembreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    cotisationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PaymentCreateInput = {
    id?: string
    montant: number
    numeroPeriode: number
    paidAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    membre: MembreCreateNestedOneWithoutPaymentsInput
    cotisation: CotisationCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    montant: number
    numeroPeriode: number
    paidAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    membreId: string
    cotisationId: string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    numeroPeriode?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membre?: MembreUpdateOneRequiredWithoutPaymentsNestedInput
    cotisation?: CotisationUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    numeroPeriode?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membreId?: StringFieldUpdateOperationsInput | string
    cotisationId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    montant: number
    numeroPeriode: number
    paidAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    membreId: string
    cotisationId: string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    numeroPeriode?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    numeroPeriode?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membreId?: StringFieldUpdateOperationsInput | string
    cotisationId?: StringFieldUpdateOperationsInput | string
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

  export type CotisationListRelationFilter = {
    every?: CotisationWhereInput
    some?: CotisationWhereInput
    none?: CotisationWhereInput
  }

  export type MembreListRelationFilter = {
    every?: MembreWhereInput
    some?: MembreWhereInput
    none?: MembreWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CotisationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pushToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pushToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pushToken?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CotisationCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    montant?: SortOrder
    frequenceJour?: SortOrder
    dateDebut?: SortOrder
    totalePeriode?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    proprietaireId?: SortOrder
  }

  export type CotisationAvgOrderByAggregateInput = {
    montant?: SortOrder
    frequenceJour?: SortOrder
    totalePeriode?: SortOrder
  }

  export type CotisationMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    montant?: SortOrder
    frequenceJour?: SortOrder
    dateDebut?: SortOrder
    totalePeriode?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    proprietaireId?: SortOrder
  }

  export type CotisationMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    montant?: SortOrder
    frequenceJour?: SortOrder
    dateDebut?: SortOrder
    totalePeriode?: SortOrder
    inviteCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    proprietaireId?: SortOrder
  }

  export type CotisationSumOrderByAggregateInput = {
    montant?: SortOrder
    frequenceJour?: SortOrder
    totalePeriode?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CotisationScalarRelationFilter = {
    is?: CotisationWhereInput
    isNot?: CotisationWhereInput
  }

  export type MembreCotisationIdEmailCompoundUniqueInput = {
    cotisationId: string
    email: string
  }

  export type MembreCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    cotisationId?: SortOrder
    role?: SortOrder
  }

  export type MembreMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    cotisationId?: SortOrder
    role?: SortOrder
  }

  export type MembreMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    joinedAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    cotisationId?: SortOrder
    role?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type MembreScalarRelationFilter = {
    is?: MembreWhereInput
    isNot?: MembreWhereInput
  }

  export type PaymentCotisationIdMembreIdNumeroPeriodeCompoundUniqueInput = {
    cotisationId: string
    membreId: string
    numeroPeriode: number
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    numeroPeriode?: SortOrder
    paidAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    membreId?: SortOrder
    cotisationId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    montant?: SortOrder
    numeroPeriode?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    numeroPeriode?: SortOrder
    paidAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    membreId?: SortOrder
    cotisationId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    numeroPeriode?: SortOrder
    paidAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    membreId?: SortOrder
    cotisationId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    montant?: SortOrder
    numeroPeriode?: SortOrder
  }

  export type CotisationCreateNestedManyWithoutProprietaireInput = {
    create?: XOR<CotisationCreateWithoutProprietaireInput, CotisationUncheckedCreateWithoutProprietaireInput> | CotisationCreateWithoutProprietaireInput[] | CotisationUncheckedCreateWithoutProprietaireInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutProprietaireInput | CotisationCreateOrConnectWithoutProprietaireInput[]
    createMany?: CotisationCreateManyProprietaireInputEnvelope
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
  }

  export type MembreCreateNestedManyWithoutUserInput = {
    create?: XOR<MembreCreateWithoutUserInput, MembreUncheckedCreateWithoutUserInput> | MembreCreateWithoutUserInput[] | MembreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutUserInput | MembreCreateOrConnectWithoutUserInput[]
    createMany?: MembreCreateManyUserInputEnvelope
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
  }

  export type CotisationUncheckedCreateNestedManyWithoutProprietaireInput = {
    create?: XOR<CotisationCreateWithoutProprietaireInput, CotisationUncheckedCreateWithoutProprietaireInput> | CotisationCreateWithoutProprietaireInput[] | CotisationUncheckedCreateWithoutProprietaireInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutProprietaireInput | CotisationCreateOrConnectWithoutProprietaireInput[]
    createMany?: CotisationCreateManyProprietaireInputEnvelope
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
  }

  export type MembreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MembreCreateWithoutUserInput, MembreUncheckedCreateWithoutUserInput> | MembreCreateWithoutUserInput[] | MembreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutUserInput | MembreCreateOrConnectWithoutUserInput[]
    createMany?: MembreCreateManyUserInputEnvelope
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
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

  export type CotisationUpdateManyWithoutProprietaireNestedInput = {
    create?: XOR<CotisationCreateWithoutProprietaireInput, CotisationUncheckedCreateWithoutProprietaireInput> | CotisationCreateWithoutProprietaireInput[] | CotisationUncheckedCreateWithoutProprietaireInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutProprietaireInput | CotisationCreateOrConnectWithoutProprietaireInput[]
    upsert?: CotisationUpsertWithWhereUniqueWithoutProprietaireInput | CotisationUpsertWithWhereUniqueWithoutProprietaireInput[]
    createMany?: CotisationCreateManyProprietaireInputEnvelope
    set?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    disconnect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    delete?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    update?: CotisationUpdateWithWhereUniqueWithoutProprietaireInput | CotisationUpdateWithWhereUniqueWithoutProprietaireInput[]
    updateMany?: CotisationUpdateManyWithWhereWithoutProprietaireInput | CotisationUpdateManyWithWhereWithoutProprietaireInput[]
    deleteMany?: CotisationScalarWhereInput | CotisationScalarWhereInput[]
  }

  export type MembreUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembreCreateWithoutUserInput, MembreUncheckedCreateWithoutUserInput> | MembreCreateWithoutUserInput[] | MembreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutUserInput | MembreCreateOrConnectWithoutUserInput[]
    upsert?: MembreUpsertWithWhereUniqueWithoutUserInput | MembreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembreCreateManyUserInputEnvelope
    set?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    disconnect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    delete?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    update?: MembreUpdateWithWhereUniqueWithoutUserInput | MembreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembreUpdateManyWithWhereWithoutUserInput | MembreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembreScalarWhereInput | MembreScalarWhereInput[]
  }

  export type CotisationUncheckedUpdateManyWithoutProprietaireNestedInput = {
    create?: XOR<CotisationCreateWithoutProprietaireInput, CotisationUncheckedCreateWithoutProprietaireInput> | CotisationCreateWithoutProprietaireInput[] | CotisationUncheckedCreateWithoutProprietaireInput[]
    connectOrCreate?: CotisationCreateOrConnectWithoutProprietaireInput | CotisationCreateOrConnectWithoutProprietaireInput[]
    upsert?: CotisationUpsertWithWhereUniqueWithoutProprietaireInput | CotisationUpsertWithWhereUniqueWithoutProprietaireInput[]
    createMany?: CotisationCreateManyProprietaireInputEnvelope
    set?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    disconnect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    delete?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    connect?: CotisationWhereUniqueInput | CotisationWhereUniqueInput[]
    update?: CotisationUpdateWithWhereUniqueWithoutProprietaireInput | CotisationUpdateWithWhereUniqueWithoutProprietaireInput[]
    updateMany?: CotisationUpdateManyWithWhereWithoutProprietaireInput | CotisationUpdateManyWithWhereWithoutProprietaireInput[]
    deleteMany?: CotisationScalarWhereInput | CotisationScalarWhereInput[]
  }

  export type MembreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembreCreateWithoutUserInput, MembreUncheckedCreateWithoutUserInput> | MembreCreateWithoutUserInput[] | MembreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutUserInput | MembreCreateOrConnectWithoutUserInput[]
    upsert?: MembreUpsertWithWhereUniqueWithoutUserInput | MembreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembreCreateManyUserInputEnvelope
    set?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    disconnect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    delete?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    update?: MembreUpdateWithWhereUniqueWithoutUserInput | MembreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembreUpdateManyWithWhereWithoutUserInput | MembreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembreScalarWhereInput | MembreScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProprietaireCotisationsInput = {
    create?: XOR<UserCreateWithoutProprietaireCotisationsInput, UserUncheckedCreateWithoutProprietaireCotisationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProprietaireCotisationsInput
    connect?: UserWhereUniqueInput
  }

  export type MembreCreateNestedManyWithoutCotisationInput = {
    create?: XOR<MembreCreateWithoutCotisationInput, MembreUncheckedCreateWithoutCotisationInput> | MembreCreateWithoutCotisationInput[] | MembreUncheckedCreateWithoutCotisationInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutCotisationInput | MembreCreateOrConnectWithoutCotisationInput[]
    createMany?: MembreCreateManyCotisationInputEnvelope
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCotisationInput = {
    create?: XOR<PaymentCreateWithoutCotisationInput, PaymentUncheckedCreateWithoutCotisationInput> | PaymentCreateWithoutCotisationInput[] | PaymentUncheckedCreateWithoutCotisationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCotisationInput | PaymentCreateOrConnectWithoutCotisationInput[]
    createMany?: PaymentCreateManyCotisationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type MembreUncheckedCreateNestedManyWithoutCotisationInput = {
    create?: XOR<MembreCreateWithoutCotisationInput, MembreUncheckedCreateWithoutCotisationInput> | MembreCreateWithoutCotisationInput[] | MembreUncheckedCreateWithoutCotisationInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutCotisationInput | MembreCreateOrConnectWithoutCotisationInput[]
    createMany?: MembreCreateManyCotisationInputEnvelope
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCotisationInput = {
    create?: XOR<PaymentCreateWithoutCotisationInput, PaymentUncheckedCreateWithoutCotisationInput> | PaymentCreateWithoutCotisationInput[] | PaymentUncheckedCreateWithoutCotisationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCotisationInput | PaymentCreateOrConnectWithoutCotisationInput[]
    createMany?: PaymentCreateManyCotisationInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutProprietaireCotisationsNestedInput = {
    create?: XOR<UserCreateWithoutProprietaireCotisationsInput, UserUncheckedCreateWithoutProprietaireCotisationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProprietaireCotisationsInput
    upsert?: UserUpsertWithoutProprietaireCotisationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProprietaireCotisationsInput, UserUpdateWithoutProprietaireCotisationsInput>, UserUncheckedUpdateWithoutProprietaireCotisationsInput>
  }

  export type MembreUpdateManyWithoutCotisationNestedInput = {
    create?: XOR<MembreCreateWithoutCotisationInput, MembreUncheckedCreateWithoutCotisationInput> | MembreCreateWithoutCotisationInput[] | MembreUncheckedCreateWithoutCotisationInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutCotisationInput | MembreCreateOrConnectWithoutCotisationInput[]
    upsert?: MembreUpsertWithWhereUniqueWithoutCotisationInput | MembreUpsertWithWhereUniqueWithoutCotisationInput[]
    createMany?: MembreCreateManyCotisationInputEnvelope
    set?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    disconnect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    delete?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    update?: MembreUpdateWithWhereUniqueWithoutCotisationInput | MembreUpdateWithWhereUniqueWithoutCotisationInput[]
    updateMany?: MembreUpdateManyWithWhereWithoutCotisationInput | MembreUpdateManyWithWhereWithoutCotisationInput[]
    deleteMany?: MembreScalarWhereInput | MembreScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCotisationNestedInput = {
    create?: XOR<PaymentCreateWithoutCotisationInput, PaymentUncheckedCreateWithoutCotisationInput> | PaymentCreateWithoutCotisationInput[] | PaymentUncheckedCreateWithoutCotisationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCotisationInput | PaymentCreateOrConnectWithoutCotisationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCotisationInput | PaymentUpsertWithWhereUniqueWithoutCotisationInput[]
    createMany?: PaymentCreateManyCotisationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCotisationInput | PaymentUpdateWithWhereUniqueWithoutCotisationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCotisationInput | PaymentUpdateManyWithWhereWithoutCotisationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MembreUncheckedUpdateManyWithoutCotisationNestedInput = {
    create?: XOR<MembreCreateWithoutCotisationInput, MembreUncheckedCreateWithoutCotisationInput> | MembreCreateWithoutCotisationInput[] | MembreUncheckedCreateWithoutCotisationInput[]
    connectOrCreate?: MembreCreateOrConnectWithoutCotisationInput | MembreCreateOrConnectWithoutCotisationInput[]
    upsert?: MembreUpsertWithWhereUniqueWithoutCotisationInput | MembreUpsertWithWhereUniqueWithoutCotisationInput[]
    createMany?: MembreCreateManyCotisationInputEnvelope
    set?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    disconnect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    delete?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    connect?: MembreWhereUniqueInput | MembreWhereUniqueInput[]
    update?: MembreUpdateWithWhereUniqueWithoutCotisationInput | MembreUpdateWithWhereUniqueWithoutCotisationInput[]
    updateMany?: MembreUpdateManyWithWhereWithoutCotisationInput | MembreUpdateManyWithWhereWithoutCotisationInput[]
    deleteMany?: MembreScalarWhereInput | MembreScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCotisationNestedInput = {
    create?: XOR<PaymentCreateWithoutCotisationInput, PaymentUncheckedCreateWithoutCotisationInput> | PaymentCreateWithoutCotisationInput[] | PaymentUncheckedCreateWithoutCotisationInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCotisationInput | PaymentCreateOrConnectWithoutCotisationInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCotisationInput | PaymentUpsertWithWhereUniqueWithoutCotisationInput[]
    createMany?: PaymentCreateManyCotisationInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCotisationInput | PaymentUpdateWithWhereUniqueWithoutCotisationInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCotisationInput | PaymentUpdateManyWithWhereWithoutCotisationInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembresInput = {
    create?: XOR<UserCreateWithoutMembresInput, UserUncheckedCreateWithoutMembresInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembresInput
    connect?: UserWhereUniqueInput
  }

  export type CotisationCreateNestedOneWithoutMembresInput = {
    create?: XOR<CotisationCreateWithoutMembresInput, CotisationUncheckedCreateWithoutMembresInput>
    connectOrCreate?: CotisationCreateOrConnectWithoutMembresInput
    connect?: CotisationWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutMembreInput = {
    create?: XOR<PaymentCreateWithoutMembreInput, PaymentUncheckedCreateWithoutMembreInput> | PaymentCreateWithoutMembreInput[] | PaymentUncheckedCreateWithoutMembreInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMembreInput | PaymentCreateOrConnectWithoutMembreInput[]
    createMany?: PaymentCreateManyMembreInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutMembreInput = {
    create?: XOR<PaymentCreateWithoutMembreInput, PaymentUncheckedCreateWithoutMembreInput> | PaymentCreateWithoutMembreInput[] | PaymentUncheckedCreateWithoutMembreInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMembreInput | PaymentCreateOrConnectWithoutMembreInput[]
    createMany?: PaymentCreateManyMembreInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneWithoutMembresNestedInput = {
    create?: XOR<UserCreateWithoutMembresInput, UserUncheckedCreateWithoutMembresInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembresInput
    upsert?: UserUpsertWithoutMembresInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembresInput, UserUpdateWithoutMembresInput>, UserUncheckedUpdateWithoutMembresInput>
  }

  export type CotisationUpdateOneRequiredWithoutMembresNestedInput = {
    create?: XOR<CotisationCreateWithoutMembresInput, CotisationUncheckedCreateWithoutMembresInput>
    connectOrCreate?: CotisationCreateOrConnectWithoutMembresInput
    upsert?: CotisationUpsertWithoutMembresInput
    connect?: CotisationWhereUniqueInput
    update?: XOR<XOR<CotisationUpdateToOneWithWhereWithoutMembresInput, CotisationUpdateWithoutMembresInput>, CotisationUncheckedUpdateWithoutMembresInput>
  }

  export type PaymentUpdateManyWithoutMembreNestedInput = {
    create?: XOR<PaymentCreateWithoutMembreInput, PaymentUncheckedCreateWithoutMembreInput> | PaymentCreateWithoutMembreInput[] | PaymentUncheckedCreateWithoutMembreInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMembreInput | PaymentCreateOrConnectWithoutMembreInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMembreInput | PaymentUpsertWithWhereUniqueWithoutMembreInput[]
    createMany?: PaymentCreateManyMembreInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMembreInput | PaymentUpdateWithWhereUniqueWithoutMembreInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMembreInput | PaymentUpdateManyWithWhereWithoutMembreInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutMembreNestedInput = {
    create?: XOR<PaymentCreateWithoutMembreInput, PaymentUncheckedCreateWithoutMembreInput> | PaymentCreateWithoutMembreInput[] | PaymentUncheckedCreateWithoutMembreInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutMembreInput | PaymentCreateOrConnectWithoutMembreInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutMembreInput | PaymentUpsertWithWhereUniqueWithoutMembreInput[]
    createMany?: PaymentCreateManyMembreInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutMembreInput | PaymentUpdateWithWhereUniqueWithoutMembreInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutMembreInput | PaymentUpdateManyWithWhereWithoutMembreInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type MembreCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<MembreCreateWithoutPaymentsInput, MembreUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MembreCreateOrConnectWithoutPaymentsInput
    connect?: MembreWhereUniqueInput
  }

  export type CotisationCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CotisationCreateWithoutPaymentsInput, CotisationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CotisationCreateOrConnectWithoutPaymentsInput
    connect?: CotisationWhereUniqueInput
  }

  export type MembreUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<MembreCreateWithoutPaymentsInput, MembreUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: MembreCreateOrConnectWithoutPaymentsInput
    upsert?: MembreUpsertWithoutPaymentsInput
    connect?: MembreWhereUniqueInput
    update?: XOR<XOR<MembreUpdateToOneWithWhereWithoutPaymentsInput, MembreUpdateWithoutPaymentsInput>, MembreUncheckedUpdateWithoutPaymentsInput>
  }

  export type CotisationUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<CotisationCreateWithoutPaymentsInput, CotisationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CotisationCreateOrConnectWithoutPaymentsInput
    upsert?: CotisationUpsertWithoutPaymentsInput
    connect?: CotisationWhereUniqueInput
    update?: XOR<XOR<CotisationUpdateToOneWithWhereWithoutPaymentsInput, CotisationUpdateWithoutPaymentsInput>, CotisationUncheckedUpdateWithoutPaymentsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type CotisationCreateWithoutProprietaireInput = {
    id?: string
    nom: string
    montant: number
    frequenceJour: number
    dateDebut: Date | string
    totalePeriode: number
    inviteCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    membres?: MembreCreateNestedManyWithoutCotisationInput
    payments?: PaymentCreateNestedManyWithoutCotisationInput
  }

  export type CotisationUncheckedCreateWithoutProprietaireInput = {
    id?: string
    nom: string
    montant: number
    frequenceJour: number
    dateDebut: Date | string
    totalePeriode: number
    inviteCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    membres?: MembreUncheckedCreateNestedManyWithoutCotisationInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCotisationInput
  }

  export type CotisationCreateOrConnectWithoutProprietaireInput = {
    where: CotisationWhereUniqueInput
    create: XOR<CotisationCreateWithoutProprietaireInput, CotisationUncheckedCreateWithoutProprietaireInput>
  }

  export type CotisationCreateManyProprietaireInputEnvelope = {
    data: CotisationCreateManyProprietaireInput | CotisationCreateManyProprietaireInput[]
    skipDuplicates?: boolean
  }

  export type MembreCreateWithoutUserInput = {
    id?: string
    nom: string
    email?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    cotisation: CotisationCreateNestedOneWithoutMembresInput
    payments?: PaymentCreateNestedManyWithoutMembreInput
  }

  export type MembreUncheckedCreateWithoutUserInput = {
    id?: string
    nom: string
    email?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cotisationId: string
    role?: $Enums.Role
    payments?: PaymentUncheckedCreateNestedManyWithoutMembreInput
  }

  export type MembreCreateOrConnectWithoutUserInput = {
    where: MembreWhereUniqueInput
    create: XOR<MembreCreateWithoutUserInput, MembreUncheckedCreateWithoutUserInput>
  }

  export type MembreCreateManyUserInputEnvelope = {
    data: MembreCreateManyUserInput | MembreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CotisationUpsertWithWhereUniqueWithoutProprietaireInput = {
    where: CotisationWhereUniqueInput
    update: XOR<CotisationUpdateWithoutProprietaireInput, CotisationUncheckedUpdateWithoutProprietaireInput>
    create: XOR<CotisationCreateWithoutProprietaireInput, CotisationUncheckedCreateWithoutProprietaireInput>
  }

  export type CotisationUpdateWithWhereUniqueWithoutProprietaireInput = {
    where: CotisationWhereUniqueInput
    data: XOR<CotisationUpdateWithoutProprietaireInput, CotisationUncheckedUpdateWithoutProprietaireInput>
  }

  export type CotisationUpdateManyWithWhereWithoutProprietaireInput = {
    where: CotisationScalarWhereInput
    data: XOR<CotisationUpdateManyMutationInput, CotisationUncheckedUpdateManyWithoutProprietaireInput>
  }

  export type CotisationScalarWhereInput = {
    AND?: CotisationScalarWhereInput | CotisationScalarWhereInput[]
    OR?: CotisationScalarWhereInput[]
    NOT?: CotisationScalarWhereInput | CotisationScalarWhereInput[]
    id?: StringFilter<"Cotisation"> | string
    nom?: StringFilter<"Cotisation"> | string
    montant?: IntFilter<"Cotisation"> | number
    frequenceJour?: IntFilter<"Cotisation"> | number
    dateDebut?: DateTimeFilter<"Cotisation"> | Date | string
    totalePeriode?: IntFilter<"Cotisation"> | number
    inviteCode?: StringNullableFilter<"Cotisation"> | string | null
    createdAt?: DateTimeFilter<"Cotisation"> | Date | string
    updatedAt?: DateTimeFilter<"Cotisation"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Cotisation"> | Date | string | null
    proprietaireId?: StringFilter<"Cotisation"> | string
  }

  export type MembreUpsertWithWhereUniqueWithoutUserInput = {
    where: MembreWhereUniqueInput
    update: XOR<MembreUpdateWithoutUserInput, MembreUncheckedUpdateWithoutUserInput>
    create: XOR<MembreCreateWithoutUserInput, MembreUncheckedCreateWithoutUserInput>
  }

  export type MembreUpdateWithWhereUniqueWithoutUserInput = {
    where: MembreWhereUniqueInput
    data: XOR<MembreUpdateWithoutUserInput, MembreUncheckedUpdateWithoutUserInput>
  }

  export type MembreUpdateManyWithWhereWithoutUserInput = {
    where: MembreScalarWhereInput
    data: XOR<MembreUpdateManyMutationInput, MembreUncheckedUpdateManyWithoutUserInput>
  }

  export type MembreScalarWhereInput = {
    AND?: MembreScalarWhereInput | MembreScalarWhereInput[]
    OR?: MembreScalarWhereInput[]
    NOT?: MembreScalarWhereInput | MembreScalarWhereInput[]
    id?: StringFilter<"Membre"> | string
    nom?: StringFilter<"Membre"> | string
    email?: StringNullableFilter<"Membre"> | string | null
    joinedAt?: DateTimeFilter<"Membre"> | Date | string
    updatedAt?: DateTimeFilter<"Membre"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Membre"> | Date | string | null
    userId?: StringNullableFilter<"Membre"> | string | null
    cotisationId?: StringFilter<"Membre"> | string
    role?: EnumRoleFilter<"Membre"> | $Enums.Role
  }

  export type UserCreateWithoutProprietaireCotisationsInput = {
    id?: string
    username: string
    email: string
    password: string
    pushToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    membres?: MembreCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProprietaireCotisationsInput = {
    id?: string
    username: string
    email: string
    password: string
    pushToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    membres?: MembreUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProprietaireCotisationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProprietaireCotisationsInput, UserUncheckedCreateWithoutProprietaireCotisationsInput>
  }

  export type MembreCreateWithoutCotisationInput = {
    id?: string
    nom: string
    email?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    user?: UserCreateNestedOneWithoutMembresInput
    payments?: PaymentCreateNestedManyWithoutMembreInput
  }

  export type MembreUncheckedCreateWithoutCotisationInput = {
    id?: string
    nom: string
    email?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId?: string | null
    role?: $Enums.Role
    payments?: PaymentUncheckedCreateNestedManyWithoutMembreInput
  }

  export type MembreCreateOrConnectWithoutCotisationInput = {
    where: MembreWhereUniqueInput
    create: XOR<MembreCreateWithoutCotisationInput, MembreUncheckedCreateWithoutCotisationInput>
  }

  export type MembreCreateManyCotisationInputEnvelope = {
    data: MembreCreateManyCotisationInput | MembreCreateManyCotisationInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutCotisationInput = {
    id?: string
    montant: number
    numeroPeriode: number
    paidAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    membre: MembreCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutCotisationInput = {
    id?: string
    montant: number
    numeroPeriode: number
    paidAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    membreId: string
  }

  export type PaymentCreateOrConnectWithoutCotisationInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCotisationInput, PaymentUncheckedCreateWithoutCotisationInput>
  }

  export type PaymentCreateManyCotisationInputEnvelope = {
    data: PaymentCreateManyCotisationInput | PaymentCreateManyCotisationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProprietaireCotisationsInput = {
    update: XOR<UserUpdateWithoutProprietaireCotisationsInput, UserUncheckedUpdateWithoutProprietaireCotisationsInput>
    create: XOR<UserCreateWithoutProprietaireCotisationsInput, UserUncheckedCreateWithoutProprietaireCotisationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProprietaireCotisationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProprietaireCotisationsInput, UserUncheckedUpdateWithoutProprietaireCotisationsInput>
  }

  export type UserUpdateWithoutProprietaireCotisationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membres?: MembreUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProprietaireCotisationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membres?: MembreUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MembreUpsertWithWhereUniqueWithoutCotisationInput = {
    where: MembreWhereUniqueInput
    update: XOR<MembreUpdateWithoutCotisationInput, MembreUncheckedUpdateWithoutCotisationInput>
    create: XOR<MembreCreateWithoutCotisationInput, MembreUncheckedCreateWithoutCotisationInput>
  }

  export type MembreUpdateWithWhereUniqueWithoutCotisationInput = {
    where: MembreWhereUniqueInput
    data: XOR<MembreUpdateWithoutCotisationInput, MembreUncheckedUpdateWithoutCotisationInput>
  }

  export type MembreUpdateManyWithWhereWithoutCotisationInput = {
    where: MembreScalarWhereInput
    data: XOR<MembreUpdateManyMutationInput, MembreUncheckedUpdateManyWithoutCotisationInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutCotisationInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCotisationInput, PaymentUncheckedUpdateWithoutCotisationInput>
    create: XOR<PaymentCreateWithoutCotisationInput, PaymentUncheckedCreateWithoutCotisationInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCotisationInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCotisationInput, PaymentUncheckedUpdateWithoutCotisationInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCotisationInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCotisationInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    montant?: IntFilter<"Payment"> | number
    numeroPeriode?: IntFilter<"Payment"> | number
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    membreId?: StringFilter<"Payment"> | string
    cotisationId?: StringFilter<"Payment"> | string
  }

  export type UserCreateWithoutMembresInput = {
    id?: string
    username: string
    email: string
    password: string
    pushToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    proprietaireCotisations?: CotisationCreateNestedManyWithoutProprietaireInput
  }

  export type UserUncheckedCreateWithoutMembresInput = {
    id?: string
    username: string
    email: string
    password: string
    pushToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    proprietaireCotisations?: CotisationUncheckedCreateNestedManyWithoutProprietaireInput
  }

  export type UserCreateOrConnectWithoutMembresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembresInput, UserUncheckedCreateWithoutMembresInput>
  }

  export type CotisationCreateWithoutMembresInput = {
    id?: string
    nom: string
    montant: number
    frequenceJour: number
    dateDebut: Date | string
    totalePeriode: number
    inviteCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    proprietaire: UserCreateNestedOneWithoutProprietaireCotisationsInput
    payments?: PaymentCreateNestedManyWithoutCotisationInput
  }

  export type CotisationUncheckedCreateWithoutMembresInput = {
    id?: string
    nom: string
    montant: number
    frequenceJour: number
    dateDebut: Date | string
    totalePeriode: number
    inviteCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    proprietaireId: string
    payments?: PaymentUncheckedCreateNestedManyWithoutCotisationInput
  }

  export type CotisationCreateOrConnectWithoutMembresInput = {
    where: CotisationWhereUniqueInput
    create: XOR<CotisationCreateWithoutMembresInput, CotisationUncheckedCreateWithoutMembresInput>
  }

  export type PaymentCreateWithoutMembreInput = {
    id?: string
    montant: number
    numeroPeriode: number
    paidAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cotisation: CotisationCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutMembreInput = {
    id?: string
    montant: number
    numeroPeriode: number
    paidAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cotisationId: string
  }

  export type PaymentCreateOrConnectWithoutMembreInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutMembreInput, PaymentUncheckedCreateWithoutMembreInput>
  }

  export type PaymentCreateManyMembreInputEnvelope = {
    data: PaymentCreateManyMembreInput | PaymentCreateManyMembreInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMembresInput = {
    update: XOR<UserUpdateWithoutMembresInput, UserUncheckedUpdateWithoutMembresInput>
    create: XOR<UserCreateWithoutMembresInput, UserUncheckedCreateWithoutMembresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembresInput, UserUncheckedUpdateWithoutMembresInput>
  }

  export type UserUpdateWithoutMembresInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proprietaireCotisations?: CotisationUpdateManyWithoutProprietaireNestedInput
  }

  export type UserUncheckedUpdateWithoutMembresInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pushToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proprietaireCotisations?: CotisationUncheckedUpdateManyWithoutProprietaireNestedInput
  }

  export type CotisationUpsertWithoutMembresInput = {
    update: XOR<CotisationUpdateWithoutMembresInput, CotisationUncheckedUpdateWithoutMembresInput>
    create: XOR<CotisationCreateWithoutMembresInput, CotisationUncheckedCreateWithoutMembresInput>
    where?: CotisationWhereInput
  }

  export type CotisationUpdateToOneWithWhereWithoutMembresInput = {
    where?: CotisationWhereInput
    data: XOR<CotisationUpdateWithoutMembresInput, CotisationUncheckedUpdateWithoutMembresInput>
  }

  export type CotisationUpdateWithoutMembresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    frequenceJour?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalePeriode?: IntFieldUpdateOperationsInput | number
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proprietaire?: UserUpdateOneRequiredWithoutProprietaireCotisationsNestedInput
    payments?: PaymentUpdateManyWithoutCotisationNestedInput
  }

  export type CotisationUncheckedUpdateWithoutMembresInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    frequenceJour?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalePeriode?: IntFieldUpdateOperationsInput | number
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proprietaireId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutCotisationNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutMembreInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutMembreInput, PaymentUncheckedUpdateWithoutMembreInput>
    create: XOR<PaymentCreateWithoutMembreInput, PaymentUncheckedCreateWithoutMembreInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutMembreInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutMembreInput, PaymentUncheckedUpdateWithoutMembreInput>
  }

  export type PaymentUpdateManyWithWhereWithoutMembreInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutMembreInput>
  }

  export type MembreCreateWithoutPaymentsInput = {
    id?: string
    nom: string
    email?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role?: $Enums.Role
    user?: UserCreateNestedOneWithoutMembresInput
    cotisation: CotisationCreateNestedOneWithoutMembresInput
  }

  export type MembreUncheckedCreateWithoutPaymentsInput = {
    id?: string
    nom: string
    email?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId?: string | null
    cotisationId: string
    role?: $Enums.Role
  }

  export type MembreCreateOrConnectWithoutPaymentsInput = {
    where: MembreWhereUniqueInput
    create: XOR<MembreCreateWithoutPaymentsInput, MembreUncheckedCreateWithoutPaymentsInput>
  }

  export type CotisationCreateWithoutPaymentsInput = {
    id?: string
    nom: string
    montant: number
    frequenceJour: number
    dateDebut: Date | string
    totalePeriode: number
    inviteCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    proprietaire: UserCreateNestedOneWithoutProprietaireCotisationsInput
    membres?: MembreCreateNestedManyWithoutCotisationInput
  }

  export type CotisationUncheckedCreateWithoutPaymentsInput = {
    id?: string
    nom: string
    montant: number
    frequenceJour: number
    dateDebut: Date | string
    totalePeriode: number
    inviteCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    proprietaireId: string
    membres?: MembreUncheckedCreateNestedManyWithoutCotisationInput
  }

  export type CotisationCreateOrConnectWithoutPaymentsInput = {
    where: CotisationWhereUniqueInput
    create: XOR<CotisationCreateWithoutPaymentsInput, CotisationUncheckedCreateWithoutPaymentsInput>
  }

  export type MembreUpsertWithoutPaymentsInput = {
    update: XOR<MembreUpdateWithoutPaymentsInput, MembreUncheckedUpdateWithoutPaymentsInput>
    create: XOR<MembreCreateWithoutPaymentsInput, MembreUncheckedCreateWithoutPaymentsInput>
    where?: MembreWhereInput
  }

  export type MembreUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: MembreWhereInput
    data: XOR<MembreUpdateWithoutPaymentsInput, MembreUncheckedUpdateWithoutPaymentsInput>
  }

  export type MembreUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneWithoutMembresNestedInput
    cotisation?: CotisationUpdateOneRequiredWithoutMembresNestedInput
  }

  export type MembreUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    cotisationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CotisationUpsertWithoutPaymentsInput = {
    update: XOR<CotisationUpdateWithoutPaymentsInput, CotisationUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CotisationCreateWithoutPaymentsInput, CotisationUncheckedCreateWithoutPaymentsInput>
    where?: CotisationWhereInput
  }

  export type CotisationUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CotisationWhereInput
    data: XOR<CotisationUpdateWithoutPaymentsInput, CotisationUncheckedUpdateWithoutPaymentsInput>
  }

  export type CotisationUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    frequenceJour?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalePeriode?: IntFieldUpdateOperationsInput | number
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proprietaire?: UserUpdateOneRequiredWithoutProprietaireCotisationsNestedInput
    membres?: MembreUpdateManyWithoutCotisationNestedInput
  }

  export type CotisationUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    frequenceJour?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalePeriode?: IntFieldUpdateOperationsInput | number
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proprietaireId?: StringFieldUpdateOperationsInput | string
    membres?: MembreUncheckedUpdateManyWithoutCotisationNestedInput
  }

  export type CotisationCreateManyProprietaireInput = {
    id?: string
    nom: string
    montant: number
    frequenceJour: number
    dateDebut: Date | string
    totalePeriode: number
    inviteCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MembreCreateManyUserInput = {
    id?: string
    nom: string
    email?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cotisationId: string
    role?: $Enums.Role
  }

  export type CotisationUpdateWithoutProprietaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    frequenceJour?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalePeriode?: IntFieldUpdateOperationsInput | number
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membres?: MembreUpdateManyWithoutCotisationNestedInput
    payments?: PaymentUpdateManyWithoutCotisationNestedInput
  }

  export type CotisationUncheckedUpdateWithoutProprietaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    frequenceJour?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalePeriode?: IntFieldUpdateOperationsInput | number
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membres?: MembreUncheckedUpdateManyWithoutCotisationNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCotisationNestedInput
  }

  export type CotisationUncheckedUpdateManyWithoutProprietaireInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    frequenceJour?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalePeriode?: IntFieldUpdateOperationsInput | number
    inviteCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MembreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    cotisation?: CotisationUpdateOneRequiredWithoutMembresNestedInput
    payments?: PaymentUpdateManyWithoutMembreNestedInput
  }

  export type MembreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cotisationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    payments?: PaymentUncheckedUpdateManyWithoutMembreNestedInput
  }

  export type MembreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cotisationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type MembreCreateManyCotisationInput = {
    id?: string
    nom: string
    email?: string | null
    joinedAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId?: string | null
    role?: $Enums.Role
  }

  export type PaymentCreateManyCotisationInput = {
    id?: string
    montant: number
    numeroPeriode: number
    paidAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    membreId: string
  }

  export type MembreUpdateWithoutCotisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    user?: UserUpdateOneWithoutMembresNestedInput
    payments?: PaymentUpdateManyWithoutMembreNestedInput
  }

  export type MembreUncheckedUpdateWithoutCotisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    payments?: PaymentUncheckedUpdateManyWithoutMembreNestedInput
  }

  export type MembreUncheckedUpdateManyWithoutCotisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type PaymentUpdateWithoutCotisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    numeroPeriode?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membre?: MembreUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCotisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    numeroPeriode?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membreId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutCotisationInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    numeroPeriode?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    membreId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyMembreInput = {
    id?: string
    montant: number
    numeroPeriode: number
    paidAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    cotisationId: string
  }

  export type PaymentUpdateWithoutMembreInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    numeroPeriode?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cotisation?: CotisationUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutMembreInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    numeroPeriode?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cotisationId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutMembreInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: IntFieldUpdateOperationsInput | number
    numeroPeriode?: IntFieldUpdateOperationsInput | number
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cotisationId?: StringFieldUpdateOperationsInput | string
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