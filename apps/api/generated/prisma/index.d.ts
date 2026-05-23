
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
 * Usuário autenticado do sistema ERP.
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Insumo
 * Matéria-prima usada na produção dos produtos.
 * Ex: Farinha de Trigo, Açúcar, Manteiga, Fermento.
 */
export type Insumo = $Result.DefaultSelection<Prisma.$InsumoPayload>
/**
 * Model Produto
 * Produto final vendido ao cliente.
 * Ex: Pão Francês, Bolo de Chocolate, Rosca.
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model Receita
 * Ficha técnica: define quais insumos e quantidades
 * são necessários para produzir um determinado produto.
 * Um produto pode ter várias receitas (ex: versões diferentes).
 */
export type Receita = $Result.DefaultSelection<Prisma.$ReceitaPayload>
/**
 * Model ReceitaItem
 * Tabela associativa: define cada ingrediente (insumo)
 * e sua quantidade dentro de uma receita.
 */
export type ReceitaItem = $Result.DefaultSelection<Prisma.$ReceitaItemPayload>
/**
 * Model Producao
 * Registra cada execução de uma receita.
 * Ao criar uma produção, o sistema automaticamente:
 * 1. Debita os insumos do estoque (via Movimentacao PRODUCAO)
 * 2. Credita o produto final no estoque
 */
export type Producao = $Result.DefaultSelection<Prisma.$ProducaoPayload>
/**
 * Model Movimentacao
 * Registra toda e qualquer movimentação de estoque de insumos.
 * Tipos: ENTRADA (compra), SAIDA (venda/consumo), AJUSTE, PRODUCAO.
 */
export type Movimentacao = $Result.DefaultSelection<Prisma.$MovimentacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UnidadeMedida: {
  KG: 'KG',
  G: 'G',
  L: 'L',
  ML: 'ML',
  UN: 'UN'
};

export type UnidadeMedida = (typeof UnidadeMedida)[keyof typeof UnidadeMedida]


export const TipoMovimentacao: {
  ENTRADA: 'ENTRADA',
  SAIDA: 'SAIDA',
  AJUSTE: 'AJUSTE',
  PRODUCAO: 'PRODUCAO'
};

export type TipoMovimentacao = (typeof TipoMovimentacao)[keyof typeof TipoMovimentacao]


export const UserRole: {
  ADMIN: 'ADMIN',
  OPERADOR: 'OPERADOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UnidadeMedida = $Enums.UnidadeMedida

export const UnidadeMedida: typeof $Enums.UnidadeMedida

export type TipoMovimentacao = $Enums.TipoMovimentacao

export const TipoMovimentacao: typeof $Enums.TipoMovimentacao

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.insumo`: Exposes CRUD operations for the **Insumo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Insumos
    * const insumos = await prisma.insumo.findMany()
    * ```
    */
  get insumo(): Prisma.InsumoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receita`: Exposes CRUD operations for the **Receita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receitas
    * const receitas = await prisma.receita.findMany()
    * ```
    */
  get receita(): Prisma.ReceitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receitaItem`: Exposes CRUD operations for the **ReceitaItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReceitaItems
    * const receitaItems = await prisma.receitaItem.findMany()
    * ```
    */
  get receitaItem(): Prisma.ReceitaItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producao`: Exposes CRUD operations for the **Producao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Producaos
    * const producaos = await prisma.producao.findMany()
    * ```
    */
  get producao(): Prisma.ProducaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimentacao`: Exposes CRUD operations for the **Movimentacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movimentacaos
    * const movimentacaos = await prisma.movimentacao.findMany()
    * ```
    */
  get movimentacao(): Prisma.MovimentacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    Insumo: 'Insumo',
    Produto: 'Produto',
    Receita: 'Receita',
    ReceitaItem: 'ReceitaItem',
    Producao: 'Producao',
    Movimentacao: 'Movimentacao'
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
      modelProps: "user" | "insumo" | "produto" | "receita" | "receitaItem" | "producao" | "movimentacao"
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
      Insumo: {
        payload: Prisma.$InsumoPayload<ExtArgs>
        fields: Prisma.InsumoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InsumoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InsumoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          findFirst: {
            args: Prisma.InsumoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InsumoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          findMany: {
            args: Prisma.InsumoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>[]
          }
          create: {
            args: Prisma.InsumoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          createMany: {
            args: Prisma.InsumoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InsumoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>[]
          }
          delete: {
            args: Prisma.InsumoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          update: {
            args: Prisma.InsumoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          deleteMany: {
            args: Prisma.InsumoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InsumoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InsumoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>[]
          }
          upsert: {
            args: Prisma.InsumoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InsumoPayload>
          }
          aggregate: {
            args: Prisma.InsumoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInsumo>
          }
          groupBy: {
            args: Prisma.InsumoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InsumoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InsumoCountArgs<ExtArgs>
            result: $Utils.Optional<InsumoCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      Receita: {
        payload: Prisma.$ReceitaPayload<ExtArgs>
        fields: Prisma.ReceitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          findFirst: {
            args: Prisma.ReceitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          findMany: {
            args: Prisma.ReceitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          create: {
            args: Prisma.ReceitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          createMany: {
            args: Prisma.ReceitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceitaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          delete: {
            args: Prisma.ReceitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          update: {
            args: Prisma.ReceitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          deleteMany: {
            args: Prisma.ReceitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceitaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>[]
          }
          upsert: {
            args: Prisma.ReceitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaPayload>
          }
          aggregate: {
            args: Prisma.ReceitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceita>
          }
          groupBy: {
            args: Prisma.ReceitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaCountAggregateOutputType> | number
          }
        }
      }
      ReceitaItem: {
        payload: Prisma.$ReceitaItemPayload<ExtArgs>
        fields: Prisma.ReceitaItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceitaItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceitaItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaItemPayload>
          }
          findFirst: {
            args: Prisma.ReceitaItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceitaItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaItemPayload>
          }
          findMany: {
            args: Prisma.ReceitaItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaItemPayload>[]
          }
          create: {
            args: Prisma.ReceitaItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaItemPayload>
          }
          createMany: {
            args: Prisma.ReceitaItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceitaItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaItemPayload>[]
          }
          delete: {
            args: Prisma.ReceitaItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaItemPayload>
          }
          update: {
            args: Prisma.ReceitaItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaItemPayload>
          }
          deleteMany: {
            args: Prisma.ReceitaItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceitaItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceitaItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaItemPayload>[]
          }
          upsert: {
            args: Prisma.ReceitaItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceitaItemPayload>
          }
          aggregate: {
            args: Prisma.ReceitaItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceitaItem>
          }
          groupBy: {
            args: Prisma.ReceitaItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceitaItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceitaItemCountArgs<ExtArgs>
            result: $Utils.Optional<ReceitaItemCountAggregateOutputType> | number
          }
        }
      }
      Producao: {
        payload: Prisma.$ProducaoPayload<ExtArgs>
        fields: Prisma.ProducaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProducaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProducaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducaoPayload>
          }
          findFirst: {
            args: Prisma.ProducaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProducaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducaoPayload>
          }
          findMany: {
            args: Prisma.ProducaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducaoPayload>[]
          }
          create: {
            args: Prisma.ProducaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducaoPayload>
          }
          createMany: {
            args: Prisma.ProducaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProducaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducaoPayload>[]
          }
          delete: {
            args: Prisma.ProducaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducaoPayload>
          }
          update: {
            args: Prisma.ProducaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducaoPayload>
          }
          deleteMany: {
            args: Prisma.ProducaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProducaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProducaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducaoPayload>[]
          }
          upsert: {
            args: Prisma.ProducaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducaoPayload>
          }
          aggregate: {
            args: Prisma.ProducaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducao>
          }
          groupBy: {
            args: Prisma.ProducaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProducaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProducaoCountArgs<ExtArgs>
            result: $Utils.Optional<ProducaoCountAggregateOutputType> | number
          }
        }
      }
      Movimentacao: {
        payload: Prisma.$MovimentacaoPayload<ExtArgs>
        fields: Prisma.MovimentacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimentacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimentacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findFirst: {
            args: Prisma.MovimentacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimentacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          findMany: {
            args: Prisma.MovimentacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          create: {
            args: Prisma.MovimentacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          createMany: {
            args: Prisma.MovimentacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimentacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          delete: {
            args: Prisma.MovimentacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          update: {
            args: Prisma.MovimentacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          deleteMany: {
            args: Prisma.MovimentacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimentacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovimentacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>[]
          }
          upsert: {
            args: Prisma.MovimentacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoPayload>
          }
          aggregate: {
            args: Prisma.MovimentacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimentacao>
          }
          groupBy: {
            args: Prisma.MovimentacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimentacaoCountArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoCountAggregateOutputType> | number
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
    insumo?: InsumoOmit
    produto?: ProdutoOmit
    receita?: ReceitaOmit
    receitaItem?: ReceitaItemOmit
    producao?: ProducaoOmit
    movimentacao?: MovimentacaoOmit
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
   * Count Type InsumoCountOutputType
   */

  export type InsumoCountOutputType = {
    receitaItens: number
    movimentacoes: number
  }

  export type InsumoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitaItens?: boolean | InsumoCountOutputTypeCountReceitaItensArgs
    movimentacoes?: boolean | InsumoCountOutputTypeCountMovimentacoesArgs
  }

  // Custom InputTypes
  /**
   * InsumoCountOutputType without action
   */
  export type InsumoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InsumoCountOutputType
     */
    select?: InsumoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InsumoCountOutputType without action
   */
  export type InsumoCountOutputTypeCountReceitaItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaItemWhereInput
  }

  /**
   * InsumoCountOutputType without action
   */
  export type InsumoCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    receitas: number
    producoes: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | ProdutoCountOutputTypeCountReceitasArgs
    producoes?: boolean | ProdutoCountOutputTypeCountProducoesArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountReceitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountProducoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProducaoWhereInput
  }


  /**
   * Count Type ReceitaCountOutputType
   */

  export type ReceitaCountOutputType = {
    itens: number
    producoes: number
  }

  export type ReceitaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | ReceitaCountOutputTypeCountItensArgs
    producoes?: boolean | ReceitaCountOutputTypeCountProducoesArgs
  }

  // Custom InputTypes
  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaCountOutputType
     */
    select?: ReceitaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaItemWhereInput
  }

  /**
   * ReceitaCountOutputType without action
   */
  export type ReceitaCountOutputTypeCountProducoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProducaoWhereInput
  }


  /**
   * Count Type ProducaoCountOutputType
   */

  export type ProducaoCountOutputType = {
    movimentacoes: number
  }

  export type ProducaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacoes?: boolean | ProducaoCountOutputTypeCountMovimentacoesArgs
  }

  // Custom InputTypes
  /**
   * ProducaoCountOutputType without action
   */
  export type ProducaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProducaoCountOutputType
     */
    select?: ProducaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProducaoCountOutputType without action
   */
  export type ProducaoCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    nome: string | null
    senha: string | null
    role: $Enums.UserRole | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    nome: string | null
    senha: string | null
    role: $Enums.UserRole | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    nome: number
    senha: number
    role: number
    ativo: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    role?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    role?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    role?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
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
    id: number
    email: string
    nome: string
    senha: string
    role: $Enums.UserRole
    ativo: boolean
    criadoEm: Date
    atualizadoEm: Date
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
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    role?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    role?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    role?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    role?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nome" | "senha" | "role" | "ativo" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      nome: string
      senha: string
      role: $Enums.UserRole
      ativo: boolean
      criadoEm: Date
      atualizadoEm: Date
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly ativo: FieldRef<"User", 'Boolean'>
    readonly criadoEm: FieldRef<"User", 'DateTime'>
    readonly atualizadoEm: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
  }


  /**
   * Model Insumo
   */

  export type AggregateInsumo = {
    _count: InsumoCountAggregateOutputType | null
    _avg: InsumoAvgAggregateOutputType | null
    _sum: InsumoSumAggregateOutputType | null
    _min: InsumoMinAggregateOutputType | null
    _max: InsumoMaxAggregateOutputType | null
  }

  export type InsumoAvgAggregateOutputType = {
    id: number | null
    estoqueAtual: number | null
    estoqueMin: number | null
    custoUnitario: number | null
  }

  export type InsumoSumAggregateOutputType = {
    id: number | null
    estoqueAtual: number | null
    estoqueMin: number | null
    custoUnitario: number | null
  }

  export type InsumoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    unidade: $Enums.UnidadeMedida | null
    estoqueAtual: number | null
    estoqueMin: number | null
    custoUnitario: number | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type InsumoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    unidade: $Enums.UnidadeMedida | null
    estoqueAtual: number | null
    estoqueMin: number | null
    custoUnitario: number | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type InsumoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    unidade: number
    estoqueAtual: number
    estoqueMin: number
    custoUnitario: number
    ativo: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type InsumoAvgAggregateInputType = {
    id?: true
    estoqueAtual?: true
    estoqueMin?: true
    custoUnitario?: true
  }

  export type InsumoSumAggregateInputType = {
    id?: true
    estoqueAtual?: true
    estoqueMin?: true
    custoUnitario?: true
  }

  export type InsumoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    unidade?: true
    estoqueAtual?: true
    estoqueMin?: true
    custoUnitario?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type InsumoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    unidade?: true
    estoqueAtual?: true
    estoqueMin?: true
    custoUnitario?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type InsumoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    unidade?: true
    estoqueAtual?: true
    estoqueMin?: true
    custoUnitario?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type InsumoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insumo to aggregate.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Insumos
    **/
    _count?: true | InsumoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InsumoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InsumoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InsumoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InsumoMaxAggregateInputType
  }

  export type GetInsumoAggregateType<T extends InsumoAggregateArgs> = {
        [P in keyof T & keyof AggregateInsumo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsumo[P]>
      : GetScalarType<T[P], AggregateInsumo[P]>
  }




  export type InsumoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InsumoWhereInput
    orderBy?: InsumoOrderByWithAggregationInput | InsumoOrderByWithAggregationInput[]
    by: InsumoScalarFieldEnum[] | InsumoScalarFieldEnum
    having?: InsumoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InsumoCountAggregateInputType | true
    _avg?: InsumoAvgAggregateInputType
    _sum?: InsumoSumAggregateInputType
    _min?: InsumoMinAggregateInputType
    _max?: InsumoMaxAggregateInputType
  }

  export type InsumoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    unidade: $Enums.UnidadeMedida
    estoqueAtual: number
    estoqueMin: number
    custoUnitario: number
    ativo: boolean
    criadoEm: Date
    atualizadoEm: Date
    _count: InsumoCountAggregateOutputType | null
    _avg: InsumoAvgAggregateOutputType | null
    _sum: InsumoSumAggregateOutputType | null
    _min: InsumoMinAggregateOutputType | null
    _max: InsumoMaxAggregateOutputType | null
  }

  type GetInsumoGroupByPayload<T extends InsumoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InsumoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InsumoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InsumoGroupByOutputType[P]>
            : GetScalarType<T[P], InsumoGroupByOutputType[P]>
        }
      >
    >


  export type InsumoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade?: boolean
    estoqueAtual?: boolean
    estoqueMin?: boolean
    custoUnitario?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    receitaItens?: boolean | Insumo$receitaItensArgs<ExtArgs>
    movimentacoes?: boolean | Insumo$movimentacoesArgs<ExtArgs>
    _count?: boolean | InsumoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["insumo"]>

  export type InsumoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade?: boolean
    estoqueAtual?: boolean
    estoqueMin?: boolean
    custoUnitario?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["insumo"]>

  export type InsumoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade?: boolean
    estoqueAtual?: boolean
    estoqueMin?: boolean
    custoUnitario?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["insumo"]>

  export type InsumoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    unidade?: boolean
    estoqueAtual?: boolean
    estoqueMin?: boolean
    custoUnitario?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type InsumoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "unidade" | "estoqueAtual" | "estoqueMin" | "custoUnitario" | "ativo" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["insumo"]>
  export type InsumoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitaItens?: boolean | Insumo$receitaItensArgs<ExtArgs>
    movimentacoes?: boolean | Insumo$movimentacoesArgs<ExtArgs>
    _count?: boolean | InsumoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InsumoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InsumoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InsumoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Insumo"
    objects: {
      receitaItens: Prisma.$ReceitaItemPayload<ExtArgs>[]
      movimentacoes: Prisma.$MovimentacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      unidade: $Enums.UnidadeMedida
      estoqueAtual: number
      estoqueMin: number
      custoUnitario: number
      ativo: boolean
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["insumo"]>
    composites: {}
  }

  type InsumoGetPayload<S extends boolean | null | undefined | InsumoDefaultArgs> = $Result.GetResult<Prisma.$InsumoPayload, S>

  type InsumoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InsumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InsumoCountAggregateInputType | true
    }

  export interface InsumoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Insumo'], meta: { name: 'Insumo' } }
    /**
     * Find zero or one Insumo that matches the filter.
     * @param {InsumoFindUniqueArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InsumoFindUniqueArgs>(args: SelectSubset<T, InsumoFindUniqueArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Insumo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InsumoFindUniqueOrThrowArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InsumoFindUniqueOrThrowArgs>(args: SelectSubset<T, InsumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insumo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoFindFirstArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InsumoFindFirstArgs>(args?: SelectSubset<T, InsumoFindFirstArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Insumo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoFindFirstOrThrowArgs} args - Arguments to find a Insumo
     * @example
     * // Get one Insumo
     * const insumo = await prisma.insumo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InsumoFindFirstOrThrowArgs>(args?: SelectSubset<T, InsumoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Insumos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insumos
     * const insumos = await prisma.insumo.findMany()
     * 
     * // Get first 10 Insumos
     * const insumos = await prisma.insumo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const insumoWithIdOnly = await prisma.insumo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InsumoFindManyArgs>(args?: SelectSubset<T, InsumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Insumo.
     * @param {InsumoCreateArgs} args - Arguments to create a Insumo.
     * @example
     * // Create one Insumo
     * const Insumo = await prisma.insumo.create({
     *   data: {
     *     // ... data to create a Insumo
     *   }
     * })
     * 
     */
    create<T extends InsumoCreateArgs>(args: SelectSubset<T, InsumoCreateArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Insumos.
     * @param {InsumoCreateManyArgs} args - Arguments to create many Insumos.
     * @example
     * // Create many Insumos
     * const insumo = await prisma.insumo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InsumoCreateManyArgs>(args?: SelectSubset<T, InsumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Insumos and returns the data saved in the database.
     * @param {InsumoCreateManyAndReturnArgs} args - Arguments to create many Insumos.
     * @example
     * // Create many Insumos
     * const insumo = await prisma.insumo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Insumos and only return the `id`
     * const insumoWithIdOnly = await prisma.insumo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InsumoCreateManyAndReturnArgs>(args?: SelectSubset<T, InsumoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Insumo.
     * @param {InsumoDeleteArgs} args - Arguments to delete one Insumo.
     * @example
     * // Delete one Insumo
     * const Insumo = await prisma.insumo.delete({
     *   where: {
     *     // ... filter to delete one Insumo
     *   }
     * })
     * 
     */
    delete<T extends InsumoDeleteArgs>(args: SelectSubset<T, InsumoDeleteArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Insumo.
     * @param {InsumoUpdateArgs} args - Arguments to update one Insumo.
     * @example
     * // Update one Insumo
     * const insumo = await prisma.insumo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InsumoUpdateArgs>(args: SelectSubset<T, InsumoUpdateArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Insumos.
     * @param {InsumoDeleteManyArgs} args - Arguments to filter Insumos to delete.
     * @example
     * // Delete a few Insumos
     * const { count } = await prisma.insumo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InsumoDeleteManyArgs>(args?: SelectSubset<T, InsumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insumos
     * const insumo = await prisma.insumo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InsumoUpdateManyArgs>(args: SelectSubset<T, InsumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Insumos and returns the data updated in the database.
     * @param {InsumoUpdateManyAndReturnArgs} args - Arguments to update many Insumos.
     * @example
     * // Update many Insumos
     * const insumo = await prisma.insumo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Insumos and only return the `id`
     * const insumoWithIdOnly = await prisma.insumo.updateManyAndReturn({
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
    updateManyAndReturn<T extends InsumoUpdateManyAndReturnArgs>(args: SelectSubset<T, InsumoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Insumo.
     * @param {InsumoUpsertArgs} args - Arguments to update or create a Insumo.
     * @example
     * // Update or create a Insumo
     * const insumo = await prisma.insumo.upsert({
     *   create: {
     *     // ... data to create a Insumo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insumo we want to update
     *   }
     * })
     */
    upsert<T extends InsumoUpsertArgs>(args: SelectSubset<T, InsumoUpsertArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Insumos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoCountArgs} args - Arguments to filter Insumos to count.
     * @example
     * // Count the number of Insumos
     * const count = await prisma.insumo.count({
     *   where: {
     *     // ... the filter for the Insumos we want to count
     *   }
     * })
    **/
    count<T extends InsumoCountArgs>(
      args?: Subset<T, InsumoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InsumoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InsumoAggregateArgs>(args: Subset<T, InsumoAggregateArgs>): Prisma.PrismaPromise<GetInsumoAggregateType<T>>

    /**
     * Group by Insumo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InsumoGroupByArgs} args - Group by arguments.
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
      T extends InsumoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InsumoGroupByArgs['orderBy'] }
        : { orderBy?: InsumoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InsumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Insumo model
   */
  readonly fields: InsumoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Insumo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InsumoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receitaItens<T extends Insumo$receitaItensArgs<ExtArgs> = {}>(args?: Subset<T, Insumo$receitaItensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacoes<T extends Insumo$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Insumo$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Insumo model
   */
  interface InsumoFieldRefs {
    readonly id: FieldRef<"Insumo", 'Int'>
    readonly nome: FieldRef<"Insumo", 'String'>
    readonly descricao: FieldRef<"Insumo", 'String'>
    readonly unidade: FieldRef<"Insumo", 'UnidadeMedida'>
    readonly estoqueAtual: FieldRef<"Insumo", 'Float'>
    readonly estoqueMin: FieldRef<"Insumo", 'Float'>
    readonly custoUnitario: FieldRef<"Insumo", 'Float'>
    readonly ativo: FieldRef<"Insumo", 'Boolean'>
    readonly criadoEm: FieldRef<"Insumo", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Insumo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Insumo findUnique
   */
  export type InsumoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo findUniqueOrThrow
   */
  export type InsumoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo findFirst
   */
  export type InsumoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insumos.
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insumos.
     */
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * Insumo findFirstOrThrow
   */
  export type InsumoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumo to fetch.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Insumos.
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insumos.
     */
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * Insumo findMany
   */
  export type InsumoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter, which Insumos to fetch.
     */
    where?: InsumoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Insumos to fetch.
     */
    orderBy?: InsumoOrderByWithRelationInput | InsumoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Insumos.
     */
    cursor?: InsumoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Insumos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Insumos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Insumos.
     */
    distinct?: InsumoScalarFieldEnum | InsumoScalarFieldEnum[]
  }

  /**
   * Insumo create
   */
  export type InsumoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * The data needed to create a Insumo.
     */
    data: XOR<InsumoCreateInput, InsumoUncheckedCreateInput>
  }

  /**
   * Insumo createMany
   */
  export type InsumoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Insumos.
     */
    data: InsumoCreateManyInput | InsumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insumo createManyAndReturn
   */
  export type InsumoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * The data used to create many Insumos.
     */
    data: InsumoCreateManyInput | InsumoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Insumo update
   */
  export type InsumoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * The data needed to update a Insumo.
     */
    data: XOR<InsumoUpdateInput, InsumoUncheckedUpdateInput>
    /**
     * Choose, which Insumo to update.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo updateMany
   */
  export type InsumoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Insumos.
     */
    data: XOR<InsumoUpdateManyMutationInput, InsumoUncheckedUpdateManyInput>
    /**
     * Filter which Insumos to update
     */
    where?: InsumoWhereInput
    /**
     * Limit how many Insumos to update.
     */
    limit?: number
  }

  /**
   * Insumo updateManyAndReturn
   */
  export type InsumoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * The data used to update Insumos.
     */
    data: XOR<InsumoUpdateManyMutationInput, InsumoUncheckedUpdateManyInput>
    /**
     * Filter which Insumos to update
     */
    where?: InsumoWhereInput
    /**
     * Limit how many Insumos to update.
     */
    limit?: number
  }

  /**
   * Insumo upsert
   */
  export type InsumoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * The filter to search for the Insumo to update in case it exists.
     */
    where: InsumoWhereUniqueInput
    /**
     * In case the Insumo found by the `where` argument doesn't exist, create a new Insumo with this data.
     */
    create: XOR<InsumoCreateInput, InsumoUncheckedCreateInput>
    /**
     * In case the Insumo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InsumoUpdateInput, InsumoUncheckedUpdateInput>
  }

  /**
   * Insumo delete
   */
  export type InsumoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
    /**
     * Filter which Insumo to delete.
     */
    where: InsumoWhereUniqueInput
  }

  /**
   * Insumo deleteMany
   */
  export type InsumoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Insumos to delete
     */
    where?: InsumoWhereInput
    /**
     * Limit how many Insumos to delete.
     */
    limit?: number
  }

  /**
   * Insumo.receitaItens
   */
  export type Insumo$receitaItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
    where?: ReceitaItemWhereInput
    orderBy?: ReceitaItemOrderByWithRelationInput | ReceitaItemOrderByWithRelationInput[]
    cursor?: ReceitaItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaItemScalarFieldEnum | ReceitaItemScalarFieldEnum[]
  }

  /**
   * Insumo.movimentacoes
   */
  export type Insumo$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Insumo without action
   */
  export type InsumoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Insumo
     */
    select?: InsumoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Insumo
     */
    omit?: InsumoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InsumoInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    precoVenda: number | null
    estoqueAtual: number | null
    estoqueMin: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    precoVenda: number | null
    estoqueAtual: number | null
    estoqueMin: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    precoVenda: number | null
    estoqueAtual: number | null
    estoqueMin: number | null
    unidade: $Enums.UnidadeMedida | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    precoVenda: number | null
    estoqueAtual: number | null
    estoqueMin: number | null
    unidade: $Enums.UnidadeMedida | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    precoVenda: number
    estoqueAtual: number
    estoqueMin: number
    unidade: number
    ativo: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    precoVenda?: true
    estoqueAtual?: true
    estoqueMin?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    precoVenda?: true
    estoqueAtual?: true
    estoqueMin?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    precoVenda?: true
    estoqueAtual?: true
    estoqueMin?: true
    unidade?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    precoVenda?: true
    estoqueAtual?: true
    estoqueMin?: true
    unidade?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    precoVenda?: true
    estoqueAtual?: true
    estoqueMin?: true
    unidade?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    precoVenda: number
    estoqueAtual: number
    estoqueMin: number
    unidade: $Enums.UnidadeMedida
    ativo: boolean
    criadoEm: Date
    atualizadoEm: Date
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    precoVenda?: boolean
    estoqueAtual?: boolean
    estoqueMin?: boolean
    unidade?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    receitas?: boolean | Produto$receitasArgs<ExtArgs>
    producoes?: boolean | Produto$producoesArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    precoVenda?: boolean
    estoqueAtual?: boolean
    estoqueMin?: boolean
    unidade?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    precoVenda?: boolean
    estoqueAtual?: boolean
    estoqueMin?: boolean
    unidade?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }, ExtArgs["result"]["produto"]>

  export type ProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    precoVenda?: boolean
    estoqueAtual?: boolean
    estoqueMin?: boolean
    unidade?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type ProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "precoVenda" | "estoqueAtual" | "estoqueMin" | "unidade" | "ativo" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["produto"]>
  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receitas?: boolean | Produto$receitasArgs<ExtArgs>
    producoes?: boolean | Produto$producoesArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      receitas: Prisma.$ReceitaPayload<ExtArgs>[]
      producoes: Prisma.$ProducaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      precoVenda: number
      estoqueAtual: number
      estoqueMin: number
      unidade: $Enums.UnidadeMedida
      ativo: boolean
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produtos and returns the data saved in the database.
     * @param {ProdutoCreateManyAndReturnArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos and returns the data updated in the database.
     * @param {ProdutoUpdateManyAndReturnArgs} args - Arguments to update many Produtos.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produtos and only return the `id`
     * const produtoWithIdOnly = await prisma.produto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
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
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receitas<T extends Produto$receitasArgs<ExtArgs> = {}>(args?: Subset<T, Produto$receitasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    producoes<T extends Produto$producoesArgs<ExtArgs> = {}>(args?: Subset<T, Produto$producoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produto model
   */
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly nome: FieldRef<"Produto", 'String'>
    readonly descricao: FieldRef<"Produto", 'String'>
    readonly precoVenda: FieldRef<"Produto", 'Float'>
    readonly estoqueAtual: FieldRef<"Produto", 'Float'>
    readonly estoqueMin: FieldRef<"Produto", 'Float'>
    readonly unidade: FieldRef<"Produto", 'UnidadeMedida'>
    readonly ativo: FieldRef<"Produto", 'Boolean'>
    readonly criadoEm: FieldRef<"Produto", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Produto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto createManyAndReturn
   */
  export type ProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto updateManyAndReturn
   */
  export type ProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to update.
     */
    limit?: number
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
    /**
     * Limit how many Produtos to delete.
     */
    limit?: number
  }

  /**
   * Produto.receitas
   */
  export type Produto$receitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    where?: ReceitaWhereInput
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    cursor?: ReceitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Produto.producoes
   */
  export type Produto$producoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    where?: ProducaoWhereInput
    orderBy?: ProducaoOrderByWithRelationInput | ProducaoOrderByWithRelationInput[]
    cursor?: ProducaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProducaoScalarFieldEnum | ProducaoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produto
     */
    omit?: ProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model Receita
   */

  export type AggregateReceita = {
    _count: ReceitaCountAggregateOutputType | null
    _avg: ReceitaAvgAggregateOutputType | null
    _sum: ReceitaSumAggregateOutputType | null
    _min: ReceitaMinAggregateOutputType | null
    _max: ReceitaMaxAggregateOutputType | null
  }

  export type ReceitaAvgAggregateOutputType = {
    id: number | null
    rendimento: number | null
    produtoId: number | null
  }

  export type ReceitaSumAggregateOutputType = {
    id: number | null
    rendimento: number | null
    produtoId: number | null
  }

  export type ReceitaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    rendimento: number | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    produtoId: number | null
  }

  export type ReceitaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    rendimento: number | null
    ativo: boolean | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    produtoId: number | null
  }

  export type ReceitaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    rendimento: number
    ativo: number
    criadoEm: number
    atualizadoEm: number
    produtoId: number
    _all: number
  }


  export type ReceitaAvgAggregateInputType = {
    id?: true
    rendimento?: true
    produtoId?: true
  }

  export type ReceitaSumAggregateInputType = {
    id?: true
    rendimento?: true
    produtoId?: true
  }

  export type ReceitaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    rendimento?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
    produtoId?: true
  }

  export type ReceitaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    rendimento?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
    produtoId?: true
  }

  export type ReceitaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    rendimento?: true
    ativo?: true
    criadoEm?: true
    atualizadoEm?: true
    produtoId?: true
    _all?: true
  }

  export type ReceitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receita to aggregate.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receitas
    **/
    _count?: true | ReceitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaMaxAggregateInputType
  }

  export type GetReceitaAggregateType<T extends ReceitaAggregateArgs> = {
        [P in keyof T & keyof AggregateReceita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceita[P]>
      : GetScalarType<T[P], AggregateReceita[P]>
  }




  export type ReceitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaWhereInput
    orderBy?: ReceitaOrderByWithAggregationInput | ReceitaOrderByWithAggregationInput[]
    by: ReceitaScalarFieldEnum[] | ReceitaScalarFieldEnum
    having?: ReceitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaCountAggregateInputType | true
    _avg?: ReceitaAvgAggregateInputType
    _sum?: ReceitaSumAggregateInputType
    _min?: ReceitaMinAggregateInputType
    _max?: ReceitaMaxAggregateInputType
  }

  export type ReceitaGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    rendimento: number
    ativo: boolean
    criadoEm: Date
    atualizadoEm: Date
    produtoId: number
    _count: ReceitaCountAggregateOutputType | null
    _avg: ReceitaAvgAggregateOutputType | null
    _sum: ReceitaSumAggregateOutputType | null
    _min: ReceitaMinAggregateOutputType | null
    _max: ReceitaMaxAggregateOutputType | null
  }

  type GetReceitaGroupByPayload<T extends ReceitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    rendimento?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    produtoId?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    itens?: boolean | Receita$itensArgs<ExtArgs>
    producoes?: boolean | Receita$producoesArgs<ExtArgs>
    _count?: boolean | ReceitaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    rendimento?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    produtoId?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    rendimento?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    produtoId?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receita"]>

  export type ReceitaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    rendimento?: boolean
    ativo?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    produtoId?: boolean
  }

  export type ReceitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "rendimento" | "ativo" | "criadoEm" | "atualizadoEm" | "produtoId", ExtArgs["result"]["receita"]>
  export type ReceitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    itens?: boolean | Receita$itensArgs<ExtArgs>
    producoes?: boolean | Receita$producoesArgs<ExtArgs>
    _count?: boolean | ReceitaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReceitaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type ReceitaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $ReceitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receita"
    objects: {
      produto: Prisma.$ProdutoPayload<ExtArgs>
      itens: Prisma.$ReceitaItemPayload<ExtArgs>[]
      producoes: Prisma.$ProducaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      rendimento: number
      ativo: boolean
      criadoEm: Date
      atualizadoEm: Date
      produtoId: number
    }, ExtArgs["result"]["receita"]>
    composites: {}
  }

  type ReceitaGetPayload<S extends boolean | null | undefined | ReceitaDefaultArgs> = $Result.GetResult<Prisma.$ReceitaPayload, S>

  type ReceitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaCountAggregateInputType | true
    }

  export interface ReceitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receita'], meta: { name: 'Receita' } }
    /**
     * Find zero or one Receita that matches the filter.
     * @param {ReceitaFindUniqueArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaFindUniqueArgs>(args: SelectSubset<T, ReceitaFindUniqueArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaFindUniqueOrThrowArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindFirstArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaFindFirstArgs>(args?: SelectSubset<T, ReceitaFindFirstArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindFirstOrThrowArgs} args - Arguments to find a Receita
     * @example
     * // Get one Receita
     * const receita = await prisma.receita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receitas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receitas
     * const receitas = await prisma.receita.findMany()
     * 
     * // Get first 10 Receitas
     * const receitas = await prisma.receita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receitaWithIdOnly = await prisma.receita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceitaFindManyArgs>(args?: SelectSubset<T, ReceitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receita.
     * @param {ReceitaCreateArgs} args - Arguments to create a Receita.
     * @example
     * // Create one Receita
     * const Receita = await prisma.receita.create({
     *   data: {
     *     // ... data to create a Receita
     *   }
     * })
     * 
     */
    create<T extends ReceitaCreateArgs>(args: SelectSubset<T, ReceitaCreateArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receitas.
     * @param {ReceitaCreateManyArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receita = await prisma.receita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceitaCreateManyArgs>(args?: SelectSubset<T, ReceitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receitas and returns the data saved in the database.
     * @param {ReceitaCreateManyAndReturnArgs} args - Arguments to create many Receitas.
     * @example
     * // Create many Receitas
     * const receita = await prisma.receita.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receitas and only return the `id`
     * const receitaWithIdOnly = await prisma.receita.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceitaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receita.
     * @param {ReceitaDeleteArgs} args - Arguments to delete one Receita.
     * @example
     * // Delete one Receita
     * const Receita = await prisma.receita.delete({
     *   where: {
     *     // ... filter to delete one Receita
     *   }
     * })
     * 
     */
    delete<T extends ReceitaDeleteArgs>(args: SelectSubset<T, ReceitaDeleteArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receita.
     * @param {ReceitaUpdateArgs} args - Arguments to update one Receita.
     * @example
     * // Update one Receita
     * const receita = await prisma.receita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceitaUpdateArgs>(args: SelectSubset<T, ReceitaUpdateArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receitas.
     * @param {ReceitaDeleteManyArgs} args - Arguments to filter Receitas to delete.
     * @example
     * // Delete a few Receitas
     * const { count } = await prisma.receita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaDeleteManyArgs>(args?: SelectSubset<T, ReceitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receitas
     * const receita = await prisma.receita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaUpdateManyArgs>(args: SelectSubset<T, ReceitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receitas and returns the data updated in the database.
     * @param {ReceitaUpdateManyAndReturnArgs} args - Arguments to update many Receitas.
     * @example
     * // Update many Receitas
     * const receita = await prisma.receita.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receitas and only return the `id`
     * const receitaWithIdOnly = await prisma.receita.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReceitaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receita.
     * @param {ReceitaUpsertArgs} args - Arguments to update or create a Receita.
     * @example
     * // Update or create a Receita
     * const receita = await prisma.receita.upsert({
     *   create: {
     *     // ... data to create a Receita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receita we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaUpsertArgs>(args: SelectSubset<T, ReceitaUpsertArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receitas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaCountArgs} args - Arguments to filter Receitas to count.
     * @example
     * // Count the number of Receitas
     * const count = await prisma.receita.count({
     *   where: {
     *     // ... the filter for the Receitas we want to count
     *   }
     * })
    **/
    count<T extends ReceitaCountArgs>(
      args?: Subset<T, ReceitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceitaAggregateArgs>(args: Subset<T, ReceitaAggregateArgs>): Prisma.PrismaPromise<GetReceitaAggregateType<T>>

    /**
     * Group by Receita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaGroupByArgs} args - Group by arguments.
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
      T extends ReceitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receita model
   */
  readonly fields: ReceitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends Receita$itensArgs<ExtArgs> = {}>(args?: Subset<T, Receita$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    producoes<T extends Receita$producoesArgs<ExtArgs> = {}>(args?: Subset<T, Receita$producoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Receita model
   */
  interface ReceitaFieldRefs {
    readonly id: FieldRef<"Receita", 'Int'>
    readonly nome: FieldRef<"Receita", 'String'>
    readonly descricao: FieldRef<"Receita", 'String'>
    readonly rendimento: FieldRef<"Receita", 'Float'>
    readonly ativo: FieldRef<"Receita", 'Boolean'>
    readonly criadoEm: FieldRef<"Receita", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Receita", 'DateTime'>
    readonly produtoId: FieldRef<"Receita", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Receita findUnique
   */
  export type ReceitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita findUniqueOrThrow
   */
  export type ReceitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita findFirst
   */
  export type ReceitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita findFirstOrThrow
   */
  export type ReceitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receita to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita findMany
   */
  export type ReceitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter, which Receitas to fetch.
     */
    where?: ReceitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receitas to fetch.
     */
    orderBy?: ReceitaOrderByWithRelationInput | ReceitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receitas.
     */
    cursor?: ReceitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receitas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receitas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receitas.
     */
    distinct?: ReceitaScalarFieldEnum | ReceitaScalarFieldEnum[]
  }

  /**
   * Receita create
   */
  export type ReceitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Receita.
     */
    data: XOR<ReceitaCreateInput, ReceitaUncheckedCreateInput>
  }

  /**
   * Receita createMany
   */
  export type ReceitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receitas.
     */
    data: ReceitaCreateManyInput | ReceitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receita createManyAndReturn
   */
  export type ReceitaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * The data used to create many Receitas.
     */
    data: ReceitaCreateManyInput | ReceitaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receita update
   */
  export type ReceitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Receita.
     */
    data: XOR<ReceitaUpdateInput, ReceitaUncheckedUpdateInput>
    /**
     * Choose, which Receita to update.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita updateMany
   */
  export type ReceitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receitas.
     */
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyInput>
    /**
     * Filter which Receitas to update
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to update.
     */
    limit?: number
  }

  /**
   * Receita updateManyAndReturn
   */
  export type ReceitaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * The data used to update Receitas.
     */
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyInput>
    /**
     * Filter which Receitas to update
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receita upsert
   */
  export type ReceitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Receita to update in case it exists.
     */
    where: ReceitaWhereUniqueInput
    /**
     * In case the Receita found by the `where` argument doesn't exist, create a new Receita with this data.
     */
    create: XOR<ReceitaCreateInput, ReceitaUncheckedCreateInput>
    /**
     * In case the Receita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaUpdateInput, ReceitaUncheckedUpdateInput>
  }

  /**
   * Receita delete
   */
  export type ReceitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
    /**
     * Filter which Receita to delete.
     */
    where: ReceitaWhereUniqueInput
  }

  /**
   * Receita deleteMany
   */
  export type ReceitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receitas to delete
     */
    where?: ReceitaWhereInput
    /**
     * Limit how many Receitas to delete.
     */
    limit?: number
  }

  /**
   * Receita.itens
   */
  export type Receita$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
    where?: ReceitaItemWhereInput
    orderBy?: ReceitaItemOrderByWithRelationInput | ReceitaItemOrderByWithRelationInput[]
    cursor?: ReceitaItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceitaItemScalarFieldEnum | ReceitaItemScalarFieldEnum[]
  }

  /**
   * Receita.producoes
   */
  export type Receita$producoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    where?: ProducaoWhereInput
    orderBy?: ProducaoOrderByWithRelationInput | ProducaoOrderByWithRelationInput[]
    cursor?: ProducaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProducaoScalarFieldEnum | ProducaoScalarFieldEnum[]
  }

  /**
   * Receita without action
   */
  export type ReceitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receita
     */
    select?: ReceitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receita
     */
    omit?: ReceitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaInclude<ExtArgs> | null
  }


  /**
   * Model ReceitaItem
   */

  export type AggregateReceitaItem = {
    _count: ReceitaItemCountAggregateOutputType | null
    _avg: ReceitaItemAvgAggregateOutputType | null
    _sum: ReceitaItemSumAggregateOutputType | null
    _min: ReceitaItemMinAggregateOutputType | null
    _max: ReceitaItemMaxAggregateOutputType | null
  }

  export type ReceitaItemAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    receitaId: number | null
    insumoId: number | null
  }

  export type ReceitaItemSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    receitaId: number | null
    insumoId: number | null
  }

  export type ReceitaItemMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    receitaId: number | null
    insumoId: number | null
  }

  export type ReceitaItemMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    receitaId: number | null
    insumoId: number | null
  }

  export type ReceitaItemCountAggregateOutputType = {
    id: number
    quantidade: number
    receitaId: number
    insumoId: number
    _all: number
  }


  export type ReceitaItemAvgAggregateInputType = {
    id?: true
    quantidade?: true
    receitaId?: true
    insumoId?: true
  }

  export type ReceitaItemSumAggregateInputType = {
    id?: true
    quantidade?: true
    receitaId?: true
    insumoId?: true
  }

  export type ReceitaItemMinAggregateInputType = {
    id?: true
    quantidade?: true
    receitaId?: true
    insumoId?: true
  }

  export type ReceitaItemMaxAggregateInputType = {
    id?: true
    quantidade?: true
    receitaId?: true
    insumoId?: true
  }

  export type ReceitaItemCountAggregateInputType = {
    id?: true
    quantidade?: true
    receitaId?: true
    insumoId?: true
    _all?: true
  }

  export type ReceitaItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaItem to aggregate.
     */
    where?: ReceitaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaItems to fetch.
     */
    orderBy?: ReceitaItemOrderByWithRelationInput | ReceitaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceitaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReceitaItems
    **/
    _count?: true | ReceitaItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceitaItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceitaItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceitaItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceitaItemMaxAggregateInputType
  }

  export type GetReceitaItemAggregateType<T extends ReceitaItemAggregateArgs> = {
        [P in keyof T & keyof AggregateReceitaItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceitaItem[P]>
      : GetScalarType<T[P], AggregateReceitaItem[P]>
  }




  export type ReceitaItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceitaItemWhereInput
    orderBy?: ReceitaItemOrderByWithAggregationInput | ReceitaItemOrderByWithAggregationInput[]
    by: ReceitaItemScalarFieldEnum[] | ReceitaItemScalarFieldEnum
    having?: ReceitaItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceitaItemCountAggregateInputType | true
    _avg?: ReceitaItemAvgAggregateInputType
    _sum?: ReceitaItemSumAggregateInputType
    _min?: ReceitaItemMinAggregateInputType
    _max?: ReceitaItemMaxAggregateInputType
  }

  export type ReceitaItemGroupByOutputType = {
    id: number
    quantidade: number
    receitaId: number
    insumoId: number
    _count: ReceitaItemCountAggregateOutputType | null
    _avg: ReceitaItemAvgAggregateOutputType | null
    _sum: ReceitaItemSumAggregateOutputType | null
    _min: ReceitaItemMinAggregateOutputType | null
    _max: ReceitaItemMaxAggregateOutputType | null
  }

  type GetReceitaItemGroupByPayload<T extends ReceitaItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceitaItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceitaItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceitaItemGroupByOutputType[P]>
            : GetScalarType<T[P], ReceitaItemGroupByOutputType[P]>
        }
      >
    >


  export type ReceitaItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    receitaId?: boolean
    insumoId?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaItem"]>

  export type ReceitaItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    receitaId?: boolean
    insumoId?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaItem"]>

  export type ReceitaItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    receitaId?: boolean
    insumoId?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receitaItem"]>

  export type ReceitaItemSelectScalar = {
    id?: boolean
    quantidade?: boolean
    receitaId?: boolean
    insumoId?: boolean
  }

  export type ReceitaItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "receitaId" | "insumoId", ExtArgs["result"]["receitaItem"]>
  export type ReceitaItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }
  export type ReceitaItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }
  export type ReceitaItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
  }

  export type $ReceitaItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReceitaItem"
    objects: {
      receita: Prisma.$ReceitaPayload<ExtArgs>
      insumo: Prisma.$InsumoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      receitaId: number
      insumoId: number
    }, ExtArgs["result"]["receitaItem"]>
    composites: {}
  }

  type ReceitaItemGetPayload<S extends boolean | null | undefined | ReceitaItemDefaultArgs> = $Result.GetResult<Prisma.$ReceitaItemPayload, S>

  type ReceitaItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceitaItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceitaItemCountAggregateInputType | true
    }

  export interface ReceitaItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReceitaItem'], meta: { name: 'ReceitaItem' } }
    /**
     * Find zero or one ReceitaItem that matches the filter.
     * @param {ReceitaItemFindUniqueArgs} args - Arguments to find a ReceitaItem
     * @example
     * // Get one ReceitaItem
     * const receitaItem = await prisma.receitaItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceitaItemFindUniqueArgs>(args: SelectSubset<T, ReceitaItemFindUniqueArgs<ExtArgs>>): Prisma__ReceitaItemClient<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReceitaItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceitaItemFindUniqueOrThrowArgs} args - Arguments to find a ReceitaItem
     * @example
     * // Get one ReceitaItem
     * const receitaItem = await prisma.receitaItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceitaItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceitaItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceitaItemClient<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaItemFindFirstArgs} args - Arguments to find a ReceitaItem
     * @example
     * // Get one ReceitaItem
     * const receitaItem = await prisma.receitaItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceitaItemFindFirstArgs>(args?: SelectSubset<T, ReceitaItemFindFirstArgs<ExtArgs>>): Prisma__ReceitaItemClient<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReceitaItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaItemFindFirstOrThrowArgs} args - Arguments to find a ReceitaItem
     * @example
     * // Get one ReceitaItem
     * const receitaItem = await prisma.receitaItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceitaItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceitaItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceitaItemClient<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReceitaItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReceitaItems
     * const receitaItems = await prisma.receitaItem.findMany()
     * 
     * // Get first 10 ReceitaItems
     * const receitaItems = await prisma.receitaItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receitaItemWithIdOnly = await prisma.receitaItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceitaItemFindManyArgs>(args?: SelectSubset<T, ReceitaItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReceitaItem.
     * @param {ReceitaItemCreateArgs} args - Arguments to create a ReceitaItem.
     * @example
     * // Create one ReceitaItem
     * const ReceitaItem = await prisma.receitaItem.create({
     *   data: {
     *     // ... data to create a ReceitaItem
     *   }
     * })
     * 
     */
    create<T extends ReceitaItemCreateArgs>(args: SelectSubset<T, ReceitaItemCreateArgs<ExtArgs>>): Prisma__ReceitaItemClient<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReceitaItems.
     * @param {ReceitaItemCreateManyArgs} args - Arguments to create many ReceitaItems.
     * @example
     * // Create many ReceitaItems
     * const receitaItem = await prisma.receitaItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceitaItemCreateManyArgs>(args?: SelectSubset<T, ReceitaItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReceitaItems and returns the data saved in the database.
     * @param {ReceitaItemCreateManyAndReturnArgs} args - Arguments to create many ReceitaItems.
     * @example
     * // Create many ReceitaItems
     * const receitaItem = await prisma.receitaItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReceitaItems and only return the `id`
     * const receitaItemWithIdOnly = await prisma.receitaItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceitaItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceitaItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReceitaItem.
     * @param {ReceitaItemDeleteArgs} args - Arguments to delete one ReceitaItem.
     * @example
     * // Delete one ReceitaItem
     * const ReceitaItem = await prisma.receitaItem.delete({
     *   where: {
     *     // ... filter to delete one ReceitaItem
     *   }
     * })
     * 
     */
    delete<T extends ReceitaItemDeleteArgs>(args: SelectSubset<T, ReceitaItemDeleteArgs<ExtArgs>>): Prisma__ReceitaItemClient<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReceitaItem.
     * @param {ReceitaItemUpdateArgs} args - Arguments to update one ReceitaItem.
     * @example
     * // Update one ReceitaItem
     * const receitaItem = await prisma.receitaItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceitaItemUpdateArgs>(args: SelectSubset<T, ReceitaItemUpdateArgs<ExtArgs>>): Prisma__ReceitaItemClient<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReceitaItems.
     * @param {ReceitaItemDeleteManyArgs} args - Arguments to filter ReceitaItems to delete.
     * @example
     * // Delete a few ReceitaItems
     * const { count } = await prisma.receitaItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceitaItemDeleteManyArgs>(args?: SelectSubset<T, ReceitaItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReceitaItems
     * const receitaItem = await prisma.receitaItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceitaItemUpdateManyArgs>(args: SelectSubset<T, ReceitaItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReceitaItems and returns the data updated in the database.
     * @param {ReceitaItemUpdateManyAndReturnArgs} args - Arguments to update many ReceitaItems.
     * @example
     * // Update many ReceitaItems
     * const receitaItem = await prisma.receitaItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReceitaItems and only return the `id`
     * const receitaItemWithIdOnly = await prisma.receitaItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReceitaItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceitaItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReceitaItem.
     * @param {ReceitaItemUpsertArgs} args - Arguments to update or create a ReceitaItem.
     * @example
     * // Update or create a ReceitaItem
     * const receitaItem = await prisma.receitaItem.upsert({
     *   create: {
     *     // ... data to create a ReceitaItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReceitaItem we want to update
     *   }
     * })
     */
    upsert<T extends ReceitaItemUpsertArgs>(args: SelectSubset<T, ReceitaItemUpsertArgs<ExtArgs>>): Prisma__ReceitaItemClient<$Result.GetResult<Prisma.$ReceitaItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReceitaItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaItemCountArgs} args - Arguments to filter ReceitaItems to count.
     * @example
     * // Count the number of ReceitaItems
     * const count = await prisma.receitaItem.count({
     *   where: {
     *     // ... the filter for the ReceitaItems we want to count
     *   }
     * })
    **/
    count<T extends ReceitaItemCountArgs>(
      args?: Subset<T, ReceitaItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceitaItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReceitaItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceitaItemAggregateArgs>(args: Subset<T, ReceitaItemAggregateArgs>): Prisma.PrismaPromise<GetReceitaItemAggregateType<T>>

    /**
     * Group by ReceitaItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceitaItemGroupByArgs} args - Group by arguments.
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
      T extends ReceitaItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceitaItemGroupByArgs['orderBy'] }
        : { orderBy?: ReceitaItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceitaItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceitaItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReceitaItem model
   */
  readonly fields: ReceitaItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReceitaItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceitaItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receita<T extends ReceitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceitaDefaultArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    insumo<T extends InsumoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InsumoDefaultArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReceitaItem model
   */
  interface ReceitaItemFieldRefs {
    readonly id: FieldRef<"ReceitaItem", 'Int'>
    readonly quantidade: FieldRef<"ReceitaItem", 'Float'>
    readonly receitaId: FieldRef<"ReceitaItem", 'Int'>
    readonly insumoId: FieldRef<"ReceitaItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReceitaItem findUnique
   */
  export type ReceitaItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaItem to fetch.
     */
    where: ReceitaItemWhereUniqueInput
  }

  /**
   * ReceitaItem findUniqueOrThrow
   */
  export type ReceitaItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaItem to fetch.
     */
    where: ReceitaItemWhereUniqueInput
  }

  /**
   * ReceitaItem findFirst
   */
  export type ReceitaItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaItem to fetch.
     */
    where?: ReceitaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaItems to fetch.
     */
    orderBy?: ReceitaItemOrderByWithRelationInput | ReceitaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaItems.
     */
    cursor?: ReceitaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaItems.
     */
    distinct?: ReceitaItemScalarFieldEnum | ReceitaItemScalarFieldEnum[]
  }

  /**
   * ReceitaItem findFirstOrThrow
   */
  export type ReceitaItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaItem to fetch.
     */
    where?: ReceitaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaItems to fetch.
     */
    orderBy?: ReceitaItemOrderByWithRelationInput | ReceitaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReceitaItems.
     */
    cursor?: ReceitaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaItems.
     */
    distinct?: ReceitaItemScalarFieldEnum | ReceitaItemScalarFieldEnum[]
  }

  /**
   * ReceitaItem findMany
   */
  export type ReceitaItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
    /**
     * Filter, which ReceitaItems to fetch.
     */
    where?: ReceitaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReceitaItems to fetch.
     */
    orderBy?: ReceitaItemOrderByWithRelationInput | ReceitaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReceitaItems.
     */
    cursor?: ReceitaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReceitaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReceitaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReceitaItems.
     */
    distinct?: ReceitaItemScalarFieldEnum | ReceitaItemScalarFieldEnum[]
  }

  /**
   * ReceitaItem create
   */
  export type ReceitaItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ReceitaItem.
     */
    data: XOR<ReceitaItemCreateInput, ReceitaItemUncheckedCreateInput>
  }

  /**
   * ReceitaItem createMany
   */
  export type ReceitaItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReceitaItems.
     */
    data: ReceitaItemCreateManyInput | ReceitaItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReceitaItem createManyAndReturn
   */
  export type ReceitaItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * The data used to create many ReceitaItems.
     */
    data: ReceitaItemCreateManyInput | ReceitaItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceitaItem update
   */
  export type ReceitaItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ReceitaItem.
     */
    data: XOR<ReceitaItemUpdateInput, ReceitaItemUncheckedUpdateInput>
    /**
     * Choose, which ReceitaItem to update.
     */
    where: ReceitaItemWhereUniqueInput
  }

  /**
   * ReceitaItem updateMany
   */
  export type ReceitaItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReceitaItems.
     */
    data: XOR<ReceitaItemUpdateManyMutationInput, ReceitaItemUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaItems to update
     */
    where?: ReceitaItemWhereInput
    /**
     * Limit how many ReceitaItems to update.
     */
    limit?: number
  }

  /**
   * ReceitaItem updateManyAndReturn
   */
  export type ReceitaItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * The data used to update ReceitaItems.
     */
    data: XOR<ReceitaItemUpdateManyMutationInput, ReceitaItemUncheckedUpdateManyInput>
    /**
     * Filter which ReceitaItems to update
     */
    where?: ReceitaItemWhereInput
    /**
     * Limit how many ReceitaItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReceitaItem upsert
   */
  export type ReceitaItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ReceitaItem to update in case it exists.
     */
    where: ReceitaItemWhereUniqueInput
    /**
     * In case the ReceitaItem found by the `where` argument doesn't exist, create a new ReceitaItem with this data.
     */
    create: XOR<ReceitaItemCreateInput, ReceitaItemUncheckedCreateInput>
    /**
     * In case the ReceitaItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceitaItemUpdateInput, ReceitaItemUncheckedUpdateInput>
  }

  /**
   * ReceitaItem delete
   */
  export type ReceitaItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
    /**
     * Filter which ReceitaItem to delete.
     */
    where: ReceitaItemWhereUniqueInput
  }

  /**
   * ReceitaItem deleteMany
   */
  export type ReceitaItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReceitaItems to delete
     */
    where?: ReceitaItemWhereInput
    /**
     * Limit how many ReceitaItems to delete.
     */
    limit?: number
  }

  /**
   * ReceitaItem without action
   */
  export type ReceitaItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceitaItem
     */
    select?: ReceitaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReceitaItem
     */
    omit?: ReceitaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceitaItemInclude<ExtArgs> | null
  }


  /**
   * Model Producao
   */

  export type AggregateProducao = {
    _count: ProducaoCountAggregateOutputType | null
    _avg: ProducaoAvgAggregateOutputType | null
    _sum: ProducaoSumAggregateOutputType | null
    _min: ProducaoMinAggregateOutputType | null
    _max: ProducaoMaxAggregateOutputType | null
  }

  export type ProducaoAvgAggregateOutputType = {
    id: number | null
    quantidadeProduzida: number | null
    custoTotal: number | null
    receitaId: number | null
    produtoId: number | null
  }

  export type ProducaoSumAggregateOutputType = {
    id: number | null
    quantidadeProduzida: number | null
    custoTotal: number | null
    receitaId: number | null
    produtoId: number | null
  }

  export type ProducaoMinAggregateOutputType = {
    id: number | null
    quantidadeProduzida: number | null
    custoTotal: number | null
    observacao: string | null
    produzidoEm: Date | null
    criadoEm: Date | null
    receitaId: number | null
    produtoId: number | null
  }

  export type ProducaoMaxAggregateOutputType = {
    id: number | null
    quantidadeProduzida: number | null
    custoTotal: number | null
    observacao: string | null
    produzidoEm: Date | null
    criadoEm: Date | null
    receitaId: number | null
    produtoId: number | null
  }

  export type ProducaoCountAggregateOutputType = {
    id: number
    quantidadeProduzida: number
    custoTotal: number
    observacao: number
    produzidoEm: number
    criadoEm: number
    receitaId: number
    produtoId: number
    _all: number
  }


  export type ProducaoAvgAggregateInputType = {
    id?: true
    quantidadeProduzida?: true
    custoTotal?: true
    receitaId?: true
    produtoId?: true
  }

  export type ProducaoSumAggregateInputType = {
    id?: true
    quantidadeProduzida?: true
    custoTotal?: true
    receitaId?: true
    produtoId?: true
  }

  export type ProducaoMinAggregateInputType = {
    id?: true
    quantidadeProduzida?: true
    custoTotal?: true
    observacao?: true
    produzidoEm?: true
    criadoEm?: true
    receitaId?: true
    produtoId?: true
  }

  export type ProducaoMaxAggregateInputType = {
    id?: true
    quantidadeProduzida?: true
    custoTotal?: true
    observacao?: true
    produzidoEm?: true
    criadoEm?: true
    receitaId?: true
    produtoId?: true
  }

  export type ProducaoCountAggregateInputType = {
    id?: true
    quantidadeProduzida?: true
    custoTotal?: true
    observacao?: true
    produzidoEm?: true
    criadoEm?: true
    receitaId?: true
    produtoId?: true
    _all?: true
  }

  export type ProducaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producao to aggregate.
     */
    where?: ProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producaos to fetch.
     */
    orderBy?: ProducaoOrderByWithRelationInput | ProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Producaos
    **/
    _count?: true | ProducaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProducaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProducaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProducaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProducaoMaxAggregateInputType
  }

  export type GetProducaoAggregateType<T extends ProducaoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducao[P]>
      : GetScalarType<T[P], AggregateProducao[P]>
  }




  export type ProducaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProducaoWhereInput
    orderBy?: ProducaoOrderByWithAggregationInput | ProducaoOrderByWithAggregationInput[]
    by: ProducaoScalarFieldEnum[] | ProducaoScalarFieldEnum
    having?: ProducaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProducaoCountAggregateInputType | true
    _avg?: ProducaoAvgAggregateInputType
    _sum?: ProducaoSumAggregateInputType
    _min?: ProducaoMinAggregateInputType
    _max?: ProducaoMaxAggregateInputType
  }

  export type ProducaoGroupByOutputType = {
    id: number
    quantidadeProduzida: number
    custoTotal: number
    observacao: string | null
    produzidoEm: Date
    criadoEm: Date
    receitaId: number
    produtoId: number
    _count: ProducaoCountAggregateOutputType | null
    _avg: ProducaoAvgAggregateOutputType | null
    _sum: ProducaoSumAggregateOutputType | null
    _min: ProducaoMinAggregateOutputType | null
    _max: ProducaoMaxAggregateOutputType | null
  }

  type GetProducaoGroupByPayload<T extends ProducaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProducaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProducaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProducaoGroupByOutputType[P]>
            : GetScalarType<T[P], ProducaoGroupByOutputType[P]>
        }
      >
    >


  export type ProducaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidadeProduzida?: boolean
    custoTotal?: boolean
    observacao?: boolean
    produzidoEm?: boolean
    criadoEm?: boolean
    receitaId?: boolean
    produtoId?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    movimentacoes?: boolean | Producao$movimentacoesArgs<ExtArgs>
    _count?: boolean | ProducaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producao"]>

  export type ProducaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidadeProduzida?: boolean
    custoTotal?: boolean
    observacao?: boolean
    produzidoEm?: boolean
    criadoEm?: boolean
    receitaId?: boolean
    produtoId?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producao"]>

  export type ProducaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidadeProduzida?: boolean
    custoTotal?: boolean
    observacao?: boolean
    produzidoEm?: boolean
    criadoEm?: boolean
    receitaId?: boolean
    produtoId?: boolean
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producao"]>

  export type ProducaoSelectScalar = {
    id?: boolean
    quantidadeProduzida?: boolean
    custoTotal?: boolean
    observacao?: boolean
    produzidoEm?: boolean
    criadoEm?: boolean
    receitaId?: boolean
    produtoId?: boolean
  }

  export type ProducaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidadeProduzida" | "custoTotal" | "observacao" | "produzidoEm" | "criadoEm" | "receitaId" | "produtoId", ExtArgs["result"]["producao"]>
  export type ProducaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
    movimentacoes?: boolean | Producao$movimentacoesArgs<ExtArgs>
    _count?: boolean | ProducaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProducaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }
  export type ProducaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receita?: boolean | ReceitaDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $ProducaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producao"
    objects: {
      receita: Prisma.$ReceitaPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
      movimentacoes: Prisma.$MovimentacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidadeProduzida: number
      custoTotal: number
      observacao: string | null
      produzidoEm: Date
      criadoEm: Date
      receitaId: number
      produtoId: number
    }, ExtArgs["result"]["producao"]>
    composites: {}
  }

  type ProducaoGetPayload<S extends boolean | null | undefined | ProducaoDefaultArgs> = $Result.GetResult<Prisma.$ProducaoPayload, S>

  type ProducaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProducaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProducaoCountAggregateInputType | true
    }

  export interface ProducaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producao'], meta: { name: 'Producao' } }
    /**
     * Find zero or one Producao that matches the filter.
     * @param {ProducaoFindUniqueArgs} args - Arguments to find a Producao
     * @example
     * // Get one Producao
     * const producao = await prisma.producao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProducaoFindUniqueArgs>(args: SelectSubset<T, ProducaoFindUniqueArgs<ExtArgs>>): Prisma__ProducaoClient<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProducaoFindUniqueOrThrowArgs} args - Arguments to find a Producao
     * @example
     * // Get one Producao
     * const producao = await prisma.producao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProducaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProducaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProducaoClient<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducaoFindFirstArgs} args - Arguments to find a Producao
     * @example
     * // Get one Producao
     * const producao = await prisma.producao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProducaoFindFirstArgs>(args?: SelectSubset<T, ProducaoFindFirstArgs<ExtArgs>>): Prisma__ProducaoClient<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducaoFindFirstOrThrowArgs} args - Arguments to find a Producao
     * @example
     * // Get one Producao
     * const producao = await prisma.producao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProducaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProducaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProducaoClient<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Producaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Producaos
     * const producaos = await prisma.producao.findMany()
     * 
     * // Get first 10 Producaos
     * const producaos = await prisma.producao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const producaoWithIdOnly = await prisma.producao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProducaoFindManyArgs>(args?: SelectSubset<T, ProducaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producao.
     * @param {ProducaoCreateArgs} args - Arguments to create a Producao.
     * @example
     * // Create one Producao
     * const Producao = await prisma.producao.create({
     *   data: {
     *     // ... data to create a Producao
     *   }
     * })
     * 
     */
    create<T extends ProducaoCreateArgs>(args: SelectSubset<T, ProducaoCreateArgs<ExtArgs>>): Prisma__ProducaoClient<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Producaos.
     * @param {ProducaoCreateManyArgs} args - Arguments to create many Producaos.
     * @example
     * // Create many Producaos
     * const producao = await prisma.producao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProducaoCreateManyArgs>(args?: SelectSubset<T, ProducaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Producaos and returns the data saved in the database.
     * @param {ProducaoCreateManyAndReturnArgs} args - Arguments to create many Producaos.
     * @example
     * // Create many Producaos
     * const producao = await prisma.producao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Producaos and only return the `id`
     * const producaoWithIdOnly = await prisma.producao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProducaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProducaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Producao.
     * @param {ProducaoDeleteArgs} args - Arguments to delete one Producao.
     * @example
     * // Delete one Producao
     * const Producao = await prisma.producao.delete({
     *   where: {
     *     // ... filter to delete one Producao
     *   }
     * })
     * 
     */
    delete<T extends ProducaoDeleteArgs>(args: SelectSubset<T, ProducaoDeleteArgs<ExtArgs>>): Prisma__ProducaoClient<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producao.
     * @param {ProducaoUpdateArgs} args - Arguments to update one Producao.
     * @example
     * // Update one Producao
     * const producao = await prisma.producao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProducaoUpdateArgs>(args: SelectSubset<T, ProducaoUpdateArgs<ExtArgs>>): Prisma__ProducaoClient<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Producaos.
     * @param {ProducaoDeleteManyArgs} args - Arguments to filter Producaos to delete.
     * @example
     * // Delete a few Producaos
     * const { count } = await prisma.producao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProducaoDeleteManyArgs>(args?: SelectSubset<T, ProducaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Producaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Producaos
     * const producao = await prisma.producao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProducaoUpdateManyArgs>(args: SelectSubset<T, ProducaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Producaos and returns the data updated in the database.
     * @param {ProducaoUpdateManyAndReturnArgs} args - Arguments to update many Producaos.
     * @example
     * // Update many Producaos
     * const producao = await prisma.producao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Producaos and only return the `id`
     * const producaoWithIdOnly = await prisma.producao.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProducaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProducaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Producao.
     * @param {ProducaoUpsertArgs} args - Arguments to update or create a Producao.
     * @example
     * // Update or create a Producao
     * const producao = await prisma.producao.upsert({
     *   create: {
     *     // ... data to create a Producao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producao we want to update
     *   }
     * })
     */
    upsert<T extends ProducaoUpsertArgs>(args: SelectSubset<T, ProducaoUpsertArgs<ExtArgs>>): Prisma__ProducaoClient<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Producaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducaoCountArgs} args - Arguments to filter Producaos to count.
     * @example
     * // Count the number of Producaos
     * const count = await prisma.producao.count({
     *   where: {
     *     // ... the filter for the Producaos we want to count
     *   }
     * })
    **/
    count<T extends ProducaoCountArgs>(
      args?: Subset<T, ProducaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProducaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProducaoAggregateArgs>(args: Subset<T, ProducaoAggregateArgs>): Prisma.PrismaPromise<GetProducaoAggregateType<T>>

    /**
     * Group by Producao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducaoGroupByArgs} args - Group by arguments.
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
      T extends ProducaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProducaoGroupByArgs['orderBy'] }
        : { orderBy?: ProducaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProducaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producao model
   */
  readonly fields: ProducaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProducaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receita<T extends ReceitaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReceitaDefaultArgs<ExtArgs>>): Prisma__ReceitaClient<$Result.GetResult<Prisma.$ReceitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movimentacoes<T extends Producao$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Producao$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Producao model
   */
  interface ProducaoFieldRefs {
    readonly id: FieldRef<"Producao", 'Int'>
    readonly quantidadeProduzida: FieldRef<"Producao", 'Float'>
    readonly custoTotal: FieldRef<"Producao", 'Float'>
    readonly observacao: FieldRef<"Producao", 'String'>
    readonly produzidoEm: FieldRef<"Producao", 'DateTime'>
    readonly criadoEm: FieldRef<"Producao", 'DateTime'>
    readonly receitaId: FieldRef<"Producao", 'Int'>
    readonly produtoId: FieldRef<"Producao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Producao findUnique
   */
  export type ProducaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    /**
     * Filter, which Producao to fetch.
     */
    where: ProducaoWhereUniqueInput
  }

  /**
   * Producao findUniqueOrThrow
   */
  export type ProducaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    /**
     * Filter, which Producao to fetch.
     */
    where: ProducaoWhereUniqueInput
  }

  /**
   * Producao findFirst
   */
  export type ProducaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    /**
     * Filter, which Producao to fetch.
     */
    where?: ProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producaos to fetch.
     */
    orderBy?: ProducaoOrderByWithRelationInput | ProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Producaos.
     */
    cursor?: ProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Producaos.
     */
    distinct?: ProducaoScalarFieldEnum | ProducaoScalarFieldEnum[]
  }

  /**
   * Producao findFirstOrThrow
   */
  export type ProducaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    /**
     * Filter, which Producao to fetch.
     */
    where?: ProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producaos to fetch.
     */
    orderBy?: ProducaoOrderByWithRelationInput | ProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Producaos.
     */
    cursor?: ProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Producaos.
     */
    distinct?: ProducaoScalarFieldEnum | ProducaoScalarFieldEnum[]
  }

  /**
   * Producao findMany
   */
  export type ProducaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    /**
     * Filter, which Producaos to fetch.
     */
    where?: ProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producaos to fetch.
     */
    orderBy?: ProducaoOrderByWithRelationInput | ProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Producaos.
     */
    cursor?: ProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Producaos.
     */
    distinct?: ProducaoScalarFieldEnum | ProducaoScalarFieldEnum[]
  }

  /**
   * Producao create
   */
  export type ProducaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producao.
     */
    data: XOR<ProducaoCreateInput, ProducaoUncheckedCreateInput>
  }

  /**
   * Producao createMany
   */
  export type ProducaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Producaos.
     */
    data: ProducaoCreateManyInput | ProducaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producao createManyAndReturn
   */
  export type ProducaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * The data used to create many Producaos.
     */
    data: ProducaoCreateManyInput | ProducaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Producao update
   */
  export type ProducaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producao.
     */
    data: XOR<ProducaoUpdateInput, ProducaoUncheckedUpdateInput>
    /**
     * Choose, which Producao to update.
     */
    where: ProducaoWhereUniqueInput
  }

  /**
   * Producao updateMany
   */
  export type ProducaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Producaos.
     */
    data: XOR<ProducaoUpdateManyMutationInput, ProducaoUncheckedUpdateManyInput>
    /**
     * Filter which Producaos to update
     */
    where?: ProducaoWhereInput
    /**
     * Limit how many Producaos to update.
     */
    limit?: number
  }

  /**
   * Producao updateManyAndReturn
   */
  export type ProducaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * The data used to update Producaos.
     */
    data: XOR<ProducaoUpdateManyMutationInput, ProducaoUncheckedUpdateManyInput>
    /**
     * Filter which Producaos to update
     */
    where?: ProducaoWhereInput
    /**
     * Limit how many Producaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Producao upsert
   */
  export type ProducaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producao to update in case it exists.
     */
    where: ProducaoWhereUniqueInput
    /**
     * In case the Producao found by the `where` argument doesn't exist, create a new Producao with this data.
     */
    create: XOR<ProducaoCreateInput, ProducaoUncheckedCreateInput>
    /**
     * In case the Producao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProducaoUpdateInput, ProducaoUncheckedUpdateInput>
  }

  /**
   * Producao delete
   */
  export type ProducaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    /**
     * Filter which Producao to delete.
     */
    where: ProducaoWhereUniqueInput
  }

  /**
   * Producao deleteMany
   */
  export type ProducaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producaos to delete
     */
    where?: ProducaoWhereInput
    /**
     * Limit how many Producaos to delete.
     */
    limit?: number
  }

  /**
   * Producao.movimentacoes
   */
  export type Producao$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Producao without action
   */
  export type ProducaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
  }


  /**
   * Model Movimentacao
   */

  export type AggregateMovimentacao = {
    _count: MovimentacaoCountAggregateOutputType | null
    _avg: MovimentacaoAvgAggregateOutputType | null
    _sum: MovimentacaoSumAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  export type MovimentacaoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    custoUnitario: number | null
    insumoId: number | null
    producaoId: number | null
  }

  export type MovimentacaoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    custoUnitario: number | null
    insumoId: number | null
    producaoId: number | null
  }

  export type MovimentacaoMinAggregateOutputType = {
    id: number | null
    tipo: $Enums.TipoMovimentacao | null
    quantidade: number | null
    custoUnitario: number | null
    observacao: string | null
    criadoEm: Date | null
    insumoId: number | null
    producaoId: number | null
  }

  export type MovimentacaoMaxAggregateOutputType = {
    id: number | null
    tipo: $Enums.TipoMovimentacao | null
    quantidade: number | null
    custoUnitario: number | null
    observacao: string | null
    criadoEm: Date | null
    insumoId: number | null
    producaoId: number | null
  }

  export type MovimentacaoCountAggregateOutputType = {
    id: number
    tipo: number
    quantidade: number
    custoUnitario: number
    observacao: number
    criadoEm: number
    insumoId: number
    producaoId: number
    _all: number
  }


  export type MovimentacaoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    custoUnitario?: true
    insumoId?: true
    producaoId?: true
  }

  export type MovimentacaoSumAggregateInputType = {
    id?: true
    quantidade?: true
    custoUnitario?: true
    insumoId?: true
    producaoId?: true
  }

  export type MovimentacaoMinAggregateInputType = {
    id?: true
    tipo?: true
    quantidade?: true
    custoUnitario?: true
    observacao?: true
    criadoEm?: true
    insumoId?: true
    producaoId?: true
  }

  export type MovimentacaoMaxAggregateInputType = {
    id?: true
    tipo?: true
    quantidade?: true
    custoUnitario?: true
    observacao?: true
    criadoEm?: true
    insumoId?: true
    producaoId?: true
  }

  export type MovimentacaoCountAggregateInputType = {
    id?: true
    tipo?: true
    quantidade?: true
    custoUnitario?: true
    observacao?: true
    criadoEm?: true
    insumoId?: true
    producaoId?: true
    _all?: true
  }

  export type MovimentacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacao to aggregate.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movimentacaos
    **/
    _count?: true | MovimentacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimentacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimentacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type GetMovimentacaoAggregateType<T extends MovimentacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentacao[P]>
      : GetScalarType<T[P], AggregateMovimentacao[P]>
  }




  export type MovimentacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoWhereInput
    orderBy?: MovimentacaoOrderByWithAggregationInput | MovimentacaoOrderByWithAggregationInput[]
    by: MovimentacaoScalarFieldEnum[] | MovimentacaoScalarFieldEnum
    having?: MovimentacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentacaoCountAggregateInputType | true
    _avg?: MovimentacaoAvgAggregateInputType
    _sum?: MovimentacaoSumAggregateInputType
    _min?: MovimentacaoMinAggregateInputType
    _max?: MovimentacaoMaxAggregateInputType
  }

  export type MovimentacaoGroupByOutputType = {
    id: number
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    custoUnitario: number | null
    observacao: string | null
    criadoEm: Date
    insumoId: number
    producaoId: number | null
    _count: MovimentacaoCountAggregateOutputType | null
    _avg: MovimentacaoAvgAggregateOutputType | null
    _sum: MovimentacaoSumAggregateOutputType | null
    _min: MovimentacaoMinAggregateOutputType | null
    _max: MovimentacaoMaxAggregateOutputType | null
  }

  type GetMovimentacaoGroupByPayload<T extends MovimentacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentacaoGroupByOutputType[P]>
        }
      >
    >


  export type MovimentacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    quantidade?: boolean
    custoUnitario?: boolean
    observacao?: boolean
    criadoEm?: boolean
    insumoId?: boolean
    producaoId?: boolean
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    producao?: boolean | Movimentacao$producaoArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>

  export type MovimentacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    quantidade?: boolean
    custoUnitario?: boolean
    observacao?: boolean
    criadoEm?: boolean
    insumoId?: boolean
    producaoId?: boolean
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    producao?: boolean | Movimentacao$producaoArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>

  export type MovimentacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    quantidade?: boolean
    custoUnitario?: boolean
    observacao?: boolean
    criadoEm?: boolean
    insumoId?: boolean
    producaoId?: boolean
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    producao?: boolean | Movimentacao$producaoArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacao"]>

  export type MovimentacaoSelectScalar = {
    id?: boolean
    tipo?: boolean
    quantidade?: boolean
    custoUnitario?: boolean
    observacao?: boolean
    criadoEm?: boolean
    insumoId?: boolean
    producaoId?: boolean
  }

  export type MovimentacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "quantidade" | "custoUnitario" | "observacao" | "criadoEm" | "insumoId" | "producaoId", ExtArgs["result"]["movimentacao"]>
  export type MovimentacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    producao?: boolean | Movimentacao$producaoArgs<ExtArgs>
  }
  export type MovimentacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    producao?: boolean | Movimentacao$producaoArgs<ExtArgs>
  }
  export type MovimentacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    insumo?: boolean | InsumoDefaultArgs<ExtArgs>
    producao?: boolean | Movimentacao$producaoArgs<ExtArgs>
  }

  export type $MovimentacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movimentacao"
    objects: {
      insumo: Prisma.$InsumoPayload<ExtArgs>
      producao: Prisma.$ProducaoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: $Enums.TipoMovimentacao
      quantidade: number
      custoUnitario: number | null
      observacao: string | null
      criadoEm: Date
      insumoId: number
      producaoId: number | null
    }, ExtArgs["result"]["movimentacao"]>
    composites: {}
  }

  type MovimentacaoGetPayload<S extends boolean | null | undefined | MovimentacaoDefaultArgs> = $Result.GetResult<Prisma.$MovimentacaoPayload, S>

  type MovimentacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimentacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimentacaoCountAggregateInputType | true
    }

  export interface MovimentacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movimentacao'], meta: { name: 'Movimentacao' } }
    /**
     * Find zero or one Movimentacao that matches the filter.
     * @param {MovimentacaoFindUniqueArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimentacaoFindUniqueArgs>(args: SelectSubset<T, MovimentacaoFindUniqueArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movimentacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimentacaoFindUniqueOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimentacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimentacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimentacaoFindFirstArgs>(args?: SelectSubset<T, MovimentacaoFindFirstArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movimentacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindFirstOrThrowArgs} args - Arguments to find a Movimentacao
     * @example
     * // Get one Movimentacao
     * const movimentacao = await prisma.movimentacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimentacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimentacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movimentacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany()
     * 
     * // Get first 10 Movimentacaos
     * const movimentacaos = await prisma.movimentacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimentacaoFindManyArgs>(args?: SelectSubset<T, MovimentacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movimentacao.
     * @param {MovimentacaoCreateArgs} args - Arguments to create a Movimentacao.
     * @example
     * // Create one Movimentacao
     * const Movimentacao = await prisma.movimentacao.create({
     *   data: {
     *     // ... data to create a Movimentacao
     *   }
     * })
     * 
     */
    create<T extends MovimentacaoCreateArgs>(args: SelectSubset<T, MovimentacaoCreateArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movimentacaos.
     * @param {MovimentacaoCreateManyArgs} args - Arguments to create many Movimentacaos.
     * @example
     * // Create many Movimentacaos
     * const movimentacao = await prisma.movimentacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimentacaoCreateManyArgs>(args?: SelectSubset<T, MovimentacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movimentacaos and returns the data saved in the database.
     * @param {MovimentacaoCreateManyAndReturnArgs} args - Arguments to create many Movimentacaos.
     * @example
     * // Create many Movimentacaos
     * const movimentacao = await prisma.movimentacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movimentacaos and only return the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovimentacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, MovimentacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movimentacao.
     * @param {MovimentacaoDeleteArgs} args - Arguments to delete one Movimentacao.
     * @example
     * // Delete one Movimentacao
     * const Movimentacao = await prisma.movimentacao.delete({
     *   where: {
     *     // ... filter to delete one Movimentacao
     *   }
     * })
     * 
     */
    delete<T extends MovimentacaoDeleteArgs>(args: SelectSubset<T, MovimentacaoDeleteArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movimentacao.
     * @param {MovimentacaoUpdateArgs} args - Arguments to update one Movimentacao.
     * @example
     * // Update one Movimentacao
     * const movimentacao = await prisma.movimentacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimentacaoUpdateArgs>(args: SelectSubset<T, MovimentacaoUpdateArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movimentacaos.
     * @param {MovimentacaoDeleteManyArgs} args - Arguments to filter Movimentacaos to delete.
     * @example
     * // Delete a few Movimentacaos
     * const { count } = await prisma.movimentacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimentacaoDeleteManyArgs>(args?: SelectSubset<T, MovimentacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimentacaos
     * const movimentacao = await prisma.movimentacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimentacaoUpdateManyArgs>(args: SelectSubset<T, MovimentacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movimentacaos and returns the data updated in the database.
     * @param {MovimentacaoUpdateManyAndReturnArgs} args - Arguments to update many Movimentacaos.
     * @example
     * // Update many Movimentacaos
     * const movimentacao = await prisma.movimentacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movimentacaos and only return the `id`
     * const movimentacaoWithIdOnly = await prisma.movimentacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovimentacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, MovimentacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movimentacao.
     * @param {MovimentacaoUpsertArgs} args - Arguments to update or create a Movimentacao.
     * @example
     * // Update or create a Movimentacao
     * const movimentacao = await prisma.movimentacao.upsert({
     *   create: {
     *     // ... data to create a Movimentacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimentacao we want to update
     *   }
     * })
     */
    upsert<T extends MovimentacaoUpsertArgs>(args: SelectSubset<T, MovimentacaoUpsertArgs<ExtArgs>>): Prisma__MovimentacaoClient<$Result.GetResult<Prisma.$MovimentacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movimentacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoCountArgs} args - Arguments to filter Movimentacaos to count.
     * @example
     * // Count the number of Movimentacaos
     * const count = await prisma.movimentacao.count({
     *   where: {
     *     // ... the filter for the Movimentacaos we want to count
     *   }
     * })
    **/
    count<T extends MovimentacaoCountArgs>(
      args?: Subset<T, MovimentacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimentacaoAggregateArgs>(args: Subset<T, MovimentacaoAggregateArgs>): Prisma.PrismaPromise<GetMovimentacaoAggregateType<T>>

    /**
     * Group by Movimentacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoGroupByArgs} args - Group by arguments.
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
      T extends MovimentacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimentacaoGroupByArgs['orderBy'] }
        : { orderBy?: MovimentacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovimentacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movimentacao model
   */
  readonly fields: MovimentacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movimentacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimentacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    insumo<T extends InsumoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InsumoDefaultArgs<ExtArgs>>): Prisma__InsumoClient<$Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producao<T extends Movimentacao$producaoArgs<ExtArgs> = {}>(args?: Subset<T, Movimentacao$producaoArgs<ExtArgs>>): Prisma__ProducaoClient<$Result.GetResult<Prisma.$ProducaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Movimentacao model
   */
  interface MovimentacaoFieldRefs {
    readonly id: FieldRef<"Movimentacao", 'Int'>
    readonly tipo: FieldRef<"Movimentacao", 'TipoMovimentacao'>
    readonly quantidade: FieldRef<"Movimentacao", 'Float'>
    readonly custoUnitario: FieldRef<"Movimentacao", 'Float'>
    readonly observacao: FieldRef<"Movimentacao", 'String'>
    readonly criadoEm: FieldRef<"Movimentacao", 'DateTime'>
    readonly insumoId: FieldRef<"Movimentacao", 'Int'>
    readonly producaoId: FieldRef<"Movimentacao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Movimentacao findUnique
   */
  export type MovimentacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findUniqueOrThrow
   */
  export type MovimentacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao findFirst
   */
  export type MovimentacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findFirstOrThrow
   */
  export type MovimentacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacao to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao findMany
   */
  export type MovimentacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter, which Movimentacaos to fetch.
     */
    where?: MovimentacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movimentacaos to fetch.
     */
    orderBy?: MovimentacaoOrderByWithRelationInput | MovimentacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movimentacaos.
     */
    cursor?: MovimentacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movimentacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movimentacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movimentacaos.
     */
    distinct?: MovimentacaoScalarFieldEnum | MovimentacaoScalarFieldEnum[]
  }

  /**
   * Movimentacao create
   */
  export type MovimentacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Movimentacao.
     */
    data: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
  }

  /**
   * Movimentacao createMany
   */
  export type MovimentacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movimentacaos.
     */
    data: MovimentacaoCreateManyInput | MovimentacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movimentacao createManyAndReturn
   */
  export type MovimentacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Movimentacaos.
     */
    data: MovimentacaoCreateManyInput | MovimentacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movimentacao update
   */
  export type MovimentacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Movimentacao.
     */
    data: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
    /**
     * Choose, which Movimentacao to update.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao updateMany
   */
  export type MovimentacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movimentacaos.
     */
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyInput>
    /**
     * Filter which Movimentacaos to update
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to update.
     */
    limit?: number
  }

  /**
   * Movimentacao updateManyAndReturn
   */
  export type MovimentacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * The data used to update Movimentacaos.
     */
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyInput>
    /**
     * Filter which Movimentacaos to update
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movimentacao upsert
   */
  export type MovimentacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Movimentacao to update in case it exists.
     */
    where: MovimentacaoWhereUniqueInput
    /**
     * In case the Movimentacao found by the `where` argument doesn't exist, create a new Movimentacao with this data.
     */
    create: XOR<MovimentacaoCreateInput, MovimentacaoUncheckedCreateInput>
    /**
     * In case the Movimentacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimentacaoUpdateInput, MovimentacaoUncheckedUpdateInput>
  }

  /**
   * Movimentacao delete
   */
  export type MovimentacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
    /**
     * Filter which Movimentacao to delete.
     */
    where: MovimentacaoWhereUniqueInput
  }

  /**
   * Movimentacao deleteMany
   */
  export type MovimentacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movimentacaos to delete
     */
    where?: MovimentacaoWhereInput
    /**
     * Limit how many Movimentacaos to delete.
     */
    limit?: number
  }

  /**
   * Movimentacao.producao
   */
  export type Movimentacao$producaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producao
     */
    select?: ProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producao
     */
    omit?: ProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducaoInclude<ExtArgs> | null
    where?: ProducaoWhereInput
  }

  /**
   * Movimentacao without action
   */
  export type MovimentacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movimentacao
     */
    select?: MovimentacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movimentacao
     */
    omit?: MovimentacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoInclude<ExtArgs> | null
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
    email: 'email',
    nome: 'nome',
    senha: 'senha',
    role: 'role',
    ativo: 'ativo',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InsumoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    unidade: 'unidade',
    estoqueAtual: 'estoqueAtual',
    estoqueMin: 'estoqueMin',
    custoUnitario: 'custoUnitario',
    ativo: 'ativo',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type InsumoScalarFieldEnum = (typeof InsumoScalarFieldEnum)[keyof typeof InsumoScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    precoVenda: 'precoVenda',
    estoqueAtual: 'estoqueAtual',
    estoqueMin: 'estoqueMin',
    unidade: 'unidade',
    ativo: 'ativo',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const ReceitaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    rendimento: 'rendimento',
    ativo: 'ativo',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm',
    produtoId: 'produtoId'
  };

  export type ReceitaScalarFieldEnum = (typeof ReceitaScalarFieldEnum)[keyof typeof ReceitaScalarFieldEnum]


  export const ReceitaItemScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    receitaId: 'receitaId',
    insumoId: 'insumoId'
  };

  export type ReceitaItemScalarFieldEnum = (typeof ReceitaItemScalarFieldEnum)[keyof typeof ReceitaItemScalarFieldEnum]


  export const ProducaoScalarFieldEnum: {
    id: 'id',
    quantidadeProduzida: 'quantidadeProduzida',
    custoTotal: 'custoTotal',
    observacao: 'observacao',
    produzidoEm: 'produzidoEm',
    criadoEm: 'criadoEm',
    receitaId: 'receitaId',
    produtoId: 'produtoId'
  };

  export type ProducaoScalarFieldEnum = (typeof ProducaoScalarFieldEnum)[keyof typeof ProducaoScalarFieldEnum]


  export const MovimentacaoScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    quantidade: 'quantidade',
    custoUnitario: 'custoUnitario',
    observacao: 'observacao',
    criadoEm: 'criadoEm',
    insumoId: 'insumoId',
    producaoId: 'producaoId'
  };

  export type MovimentacaoScalarFieldEnum = (typeof MovimentacaoScalarFieldEnum)[keyof typeof MovimentacaoScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UnidadeMedida'
   */
  export type EnumUnidadeMedidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnidadeMedida'>
    


  /**
   * Reference to a field of type 'UnidadeMedida[]'
   */
  export type ListEnumUnidadeMedidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnidadeMedida[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TipoMovimentacao'
   */
  export type EnumTipoMovimentacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimentacao'>
    


  /**
   * Reference to a field of type 'TipoMovimentacao[]'
   */
  export type ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMovimentacao[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    nome?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    ativo?: BoolFilter<"User"> | boolean
    criadoEm?: DateTimeFilter<"User"> | Date | string
    atualizadoEm?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    ativo?: BoolFilter<"User"> | boolean
    criadoEm?: DateTimeFilter<"User"> | Date | string
    atualizadoEm?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    nome?: StringWithAggregatesFilter<"User"> | string
    senha?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    ativo?: BoolWithAggregatesFilter<"User"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"User"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InsumoWhereInput = {
    AND?: InsumoWhereInput | InsumoWhereInput[]
    OR?: InsumoWhereInput[]
    NOT?: InsumoWhereInput | InsumoWhereInput[]
    id?: IntFilter<"Insumo"> | number
    nome?: StringFilter<"Insumo"> | string
    descricao?: StringNullableFilter<"Insumo"> | string | null
    unidade?: EnumUnidadeMedidaFilter<"Insumo"> | $Enums.UnidadeMedida
    estoqueAtual?: FloatFilter<"Insumo"> | number
    estoqueMin?: FloatFilter<"Insumo"> | number
    custoUnitario?: FloatFilter<"Insumo"> | number
    ativo?: BoolFilter<"Insumo"> | boolean
    criadoEm?: DateTimeFilter<"Insumo"> | Date | string
    atualizadoEm?: DateTimeFilter<"Insumo"> | Date | string
    receitaItens?: ReceitaItemListRelationFilter
    movimentacoes?: MovimentacaoListRelationFilter
  }

  export type InsumoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    unidade?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    custoUnitario?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    receitaItens?: ReceitaItemOrderByRelationAggregateInput
    movimentacoes?: MovimentacaoOrderByRelationAggregateInput
  }

  export type InsumoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InsumoWhereInput | InsumoWhereInput[]
    OR?: InsumoWhereInput[]
    NOT?: InsumoWhereInput | InsumoWhereInput[]
    nome?: StringFilter<"Insumo"> | string
    descricao?: StringNullableFilter<"Insumo"> | string | null
    unidade?: EnumUnidadeMedidaFilter<"Insumo"> | $Enums.UnidadeMedida
    estoqueAtual?: FloatFilter<"Insumo"> | number
    estoqueMin?: FloatFilter<"Insumo"> | number
    custoUnitario?: FloatFilter<"Insumo"> | number
    ativo?: BoolFilter<"Insumo"> | boolean
    criadoEm?: DateTimeFilter<"Insumo"> | Date | string
    atualizadoEm?: DateTimeFilter<"Insumo"> | Date | string
    receitaItens?: ReceitaItemListRelationFilter
    movimentacoes?: MovimentacaoListRelationFilter
  }, "id">

  export type InsumoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    unidade?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    custoUnitario?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: InsumoCountOrderByAggregateInput
    _avg?: InsumoAvgOrderByAggregateInput
    _max?: InsumoMaxOrderByAggregateInput
    _min?: InsumoMinOrderByAggregateInput
    _sum?: InsumoSumOrderByAggregateInput
  }

  export type InsumoScalarWhereWithAggregatesInput = {
    AND?: InsumoScalarWhereWithAggregatesInput | InsumoScalarWhereWithAggregatesInput[]
    OR?: InsumoScalarWhereWithAggregatesInput[]
    NOT?: InsumoScalarWhereWithAggregatesInput | InsumoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Insumo"> | number
    nome?: StringWithAggregatesFilter<"Insumo"> | string
    descricao?: StringNullableWithAggregatesFilter<"Insumo"> | string | null
    unidade?: EnumUnidadeMedidaWithAggregatesFilter<"Insumo"> | $Enums.UnidadeMedida
    estoqueAtual?: FloatWithAggregatesFilter<"Insumo"> | number
    estoqueMin?: FloatWithAggregatesFilter<"Insumo"> | number
    custoUnitario?: FloatWithAggregatesFilter<"Insumo"> | number
    ativo?: BoolWithAggregatesFilter<"Insumo"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Insumo"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Insumo"> | Date | string
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    precoVenda?: FloatFilter<"Produto"> | number
    estoqueAtual?: FloatFilter<"Produto"> | number
    estoqueMin?: FloatFilter<"Produto"> | number
    unidade?: EnumUnidadeMedidaFilter<"Produto"> | $Enums.UnidadeMedida
    ativo?: BoolFilter<"Produto"> | boolean
    criadoEm?: DateTimeFilter<"Produto"> | Date | string
    atualizadoEm?: DateTimeFilter<"Produto"> | Date | string
    receitas?: ReceitaListRelationFilter
    producoes?: ProducaoListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    precoVenda?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    unidade?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    receitas?: ReceitaOrderByRelationAggregateInput
    producoes?: ProducaoOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    nome?: StringFilter<"Produto"> | string
    descricao?: StringNullableFilter<"Produto"> | string | null
    precoVenda?: FloatFilter<"Produto"> | number
    estoqueAtual?: FloatFilter<"Produto"> | number
    estoqueMin?: FloatFilter<"Produto"> | number
    unidade?: EnumUnidadeMedidaFilter<"Produto"> | $Enums.UnidadeMedida
    ativo?: BoolFilter<"Produto"> | boolean
    criadoEm?: DateTimeFilter<"Produto"> | Date | string
    atualizadoEm?: DateTimeFilter<"Produto"> | Date | string
    receitas?: ReceitaListRelationFilter
    producoes?: ProducaoListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    precoVenda?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    unidade?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    nome?: StringWithAggregatesFilter<"Produto"> | string
    descricao?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    precoVenda?: FloatWithAggregatesFilter<"Produto"> | number
    estoqueAtual?: FloatWithAggregatesFilter<"Produto"> | number
    estoqueMin?: FloatWithAggregatesFilter<"Produto"> | number
    unidade?: EnumUnidadeMedidaWithAggregatesFilter<"Produto"> | $Enums.UnidadeMedida
    ativo?: BoolWithAggregatesFilter<"Produto"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Produto"> | Date | string
  }

  export type ReceitaWhereInput = {
    AND?: ReceitaWhereInput | ReceitaWhereInput[]
    OR?: ReceitaWhereInput[]
    NOT?: ReceitaWhereInput | ReceitaWhereInput[]
    id?: IntFilter<"Receita"> | number
    nome?: StringFilter<"Receita"> | string
    descricao?: StringNullableFilter<"Receita"> | string | null
    rendimento?: FloatFilter<"Receita"> | number
    ativo?: BoolFilter<"Receita"> | boolean
    criadoEm?: DateTimeFilter<"Receita"> | Date | string
    atualizadoEm?: DateTimeFilter<"Receita"> | Date | string
    produtoId?: IntFilter<"Receita"> | number
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    itens?: ReceitaItemListRelationFilter
    producoes?: ProducaoListRelationFilter
  }

  export type ReceitaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    rendimento?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    produtoId?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
    itens?: ReceitaItemOrderByRelationAggregateInput
    producoes?: ProducaoOrderByRelationAggregateInput
  }

  export type ReceitaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReceitaWhereInput | ReceitaWhereInput[]
    OR?: ReceitaWhereInput[]
    NOT?: ReceitaWhereInput | ReceitaWhereInput[]
    nome?: StringFilter<"Receita"> | string
    descricao?: StringNullableFilter<"Receita"> | string | null
    rendimento?: FloatFilter<"Receita"> | number
    ativo?: BoolFilter<"Receita"> | boolean
    criadoEm?: DateTimeFilter<"Receita"> | Date | string
    atualizadoEm?: DateTimeFilter<"Receita"> | Date | string
    produtoId?: IntFilter<"Receita"> | number
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    itens?: ReceitaItemListRelationFilter
    producoes?: ProducaoListRelationFilter
  }, "id">

  export type ReceitaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    rendimento?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    produtoId?: SortOrder
    _count?: ReceitaCountOrderByAggregateInput
    _avg?: ReceitaAvgOrderByAggregateInput
    _max?: ReceitaMaxOrderByAggregateInput
    _min?: ReceitaMinOrderByAggregateInput
    _sum?: ReceitaSumOrderByAggregateInput
  }

  export type ReceitaScalarWhereWithAggregatesInput = {
    AND?: ReceitaScalarWhereWithAggregatesInput | ReceitaScalarWhereWithAggregatesInput[]
    OR?: ReceitaScalarWhereWithAggregatesInput[]
    NOT?: ReceitaScalarWhereWithAggregatesInput | ReceitaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Receita"> | number
    nome?: StringWithAggregatesFilter<"Receita"> | string
    descricao?: StringNullableWithAggregatesFilter<"Receita"> | string | null
    rendimento?: FloatWithAggregatesFilter<"Receita"> | number
    ativo?: BoolWithAggregatesFilter<"Receita"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"Receita"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Receita"> | Date | string
    produtoId?: IntWithAggregatesFilter<"Receita"> | number
  }

  export type ReceitaItemWhereInput = {
    AND?: ReceitaItemWhereInput | ReceitaItemWhereInput[]
    OR?: ReceitaItemWhereInput[]
    NOT?: ReceitaItemWhereInput | ReceitaItemWhereInput[]
    id?: IntFilter<"ReceitaItem"> | number
    quantidade?: FloatFilter<"ReceitaItem"> | number
    receitaId?: IntFilter<"ReceitaItem"> | number
    insumoId?: IntFilter<"ReceitaItem"> | number
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
  }

  export type ReceitaItemOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
    receita?: ReceitaOrderByWithRelationInput
    insumo?: InsumoOrderByWithRelationInput
  }

  export type ReceitaItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    receitaId_insumoId?: ReceitaItemReceitaIdInsumoIdCompoundUniqueInput
    AND?: ReceitaItemWhereInput | ReceitaItemWhereInput[]
    OR?: ReceitaItemWhereInput[]
    NOT?: ReceitaItemWhereInput | ReceitaItemWhereInput[]
    quantidade?: FloatFilter<"ReceitaItem"> | number
    receitaId?: IntFilter<"ReceitaItem"> | number
    insumoId?: IntFilter<"ReceitaItem"> | number
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
  }, "id" | "receitaId_insumoId">

  export type ReceitaItemOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
    _count?: ReceitaItemCountOrderByAggregateInput
    _avg?: ReceitaItemAvgOrderByAggregateInput
    _max?: ReceitaItemMaxOrderByAggregateInput
    _min?: ReceitaItemMinOrderByAggregateInput
    _sum?: ReceitaItemSumOrderByAggregateInput
  }

  export type ReceitaItemScalarWhereWithAggregatesInput = {
    AND?: ReceitaItemScalarWhereWithAggregatesInput | ReceitaItemScalarWhereWithAggregatesInput[]
    OR?: ReceitaItemScalarWhereWithAggregatesInput[]
    NOT?: ReceitaItemScalarWhereWithAggregatesInput | ReceitaItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReceitaItem"> | number
    quantidade?: FloatWithAggregatesFilter<"ReceitaItem"> | number
    receitaId?: IntWithAggregatesFilter<"ReceitaItem"> | number
    insumoId?: IntWithAggregatesFilter<"ReceitaItem"> | number
  }

  export type ProducaoWhereInput = {
    AND?: ProducaoWhereInput | ProducaoWhereInput[]
    OR?: ProducaoWhereInput[]
    NOT?: ProducaoWhereInput | ProducaoWhereInput[]
    id?: IntFilter<"Producao"> | number
    quantidadeProduzida?: FloatFilter<"Producao"> | number
    custoTotal?: FloatFilter<"Producao"> | number
    observacao?: StringNullableFilter<"Producao"> | string | null
    produzidoEm?: DateTimeFilter<"Producao"> | Date | string
    criadoEm?: DateTimeFilter<"Producao"> | Date | string
    receitaId?: IntFilter<"Producao"> | number
    produtoId?: IntFilter<"Producao"> | number
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    movimentacoes?: MovimentacaoListRelationFilter
  }

  export type ProducaoOrderByWithRelationInput = {
    id?: SortOrder
    quantidadeProduzida?: SortOrder
    custoTotal?: SortOrder
    observacao?: SortOrderInput | SortOrder
    produzidoEm?: SortOrder
    criadoEm?: SortOrder
    receitaId?: SortOrder
    produtoId?: SortOrder
    receita?: ReceitaOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
    movimentacoes?: MovimentacaoOrderByRelationAggregateInput
  }

  export type ProducaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProducaoWhereInput | ProducaoWhereInput[]
    OR?: ProducaoWhereInput[]
    NOT?: ProducaoWhereInput | ProducaoWhereInput[]
    quantidadeProduzida?: FloatFilter<"Producao"> | number
    custoTotal?: FloatFilter<"Producao"> | number
    observacao?: StringNullableFilter<"Producao"> | string | null
    produzidoEm?: DateTimeFilter<"Producao"> | Date | string
    criadoEm?: DateTimeFilter<"Producao"> | Date | string
    receitaId?: IntFilter<"Producao"> | number
    produtoId?: IntFilter<"Producao"> | number
    receita?: XOR<ReceitaScalarRelationFilter, ReceitaWhereInput>
    produto?: XOR<ProdutoScalarRelationFilter, ProdutoWhereInput>
    movimentacoes?: MovimentacaoListRelationFilter
  }, "id">

  export type ProducaoOrderByWithAggregationInput = {
    id?: SortOrder
    quantidadeProduzida?: SortOrder
    custoTotal?: SortOrder
    observacao?: SortOrderInput | SortOrder
    produzidoEm?: SortOrder
    criadoEm?: SortOrder
    receitaId?: SortOrder
    produtoId?: SortOrder
    _count?: ProducaoCountOrderByAggregateInput
    _avg?: ProducaoAvgOrderByAggregateInput
    _max?: ProducaoMaxOrderByAggregateInput
    _min?: ProducaoMinOrderByAggregateInput
    _sum?: ProducaoSumOrderByAggregateInput
  }

  export type ProducaoScalarWhereWithAggregatesInput = {
    AND?: ProducaoScalarWhereWithAggregatesInput | ProducaoScalarWhereWithAggregatesInput[]
    OR?: ProducaoScalarWhereWithAggregatesInput[]
    NOT?: ProducaoScalarWhereWithAggregatesInput | ProducaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producao"> | number
    quantidadeProduzida?: FloatWithAggregatesFilter<"Producao"> | number
    custoTotal?: FloatWithAggregatesFilter<"Producao"> | number
    observacao?: StringNullableWithAggregatesFilter<"Producao"> | string | null
    produzidoEm?: DateTimeWithAggregatesFilter<"Producao"> | Date | string
    criadoEm?: DateTimeWithAggregatesFilter<"Producao"> | Date | string
    receitaId?: IntWithAggregatesFilter<"Producao"> | number
    produtoId?: IntWithAggregatesFilter<"Producao"> | number
  }

  export type MovimentacaoWhereInput = {
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    id?: IntFilter<"Movimentacao"> | number
    tipo?: EnumTipoMovimentacaoFilter<"Movimentacao"> | $Enums.TipoMovimentacao
    quantidade?: FloatFilter<"Movimentacao"> | number
    custoUnitario?: FloatNullableFilter<"Movimentacao"> | number | null
    observacao?: StringNullableFilter<"Movimentacao"> | string | null
    criadoEm?: DateTimeFilter<"Movimentacao"> | Date | string
    insumoId?: IntFilter<"Movimentacao"> | number
    producaoId?: IntNullableFilter<"Movimentacao"> | number | null
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
    producao?: XOR<ProducaoNullableScalarRelationFilter, ProducaoWhereInput> | null
  }

  export type MovimentacaoOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    custoUnitario?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    insumoId?: SortOrder
    producaoId?: SortOrderInput | SortOrder
    insumo?: InsumoOrderByWithRelationInput
    producao?: ProducaoOrderByWithRelationInput
  }

  export type MovimentacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    OR?: MovimentacaoWhereInput[]
    NOT?: MovimentacaoWhereInput | MovimentacaoWhereInput[]
    tipo?: EnumTipoMovimentacaoFilter<"Movimentacao"> | $Enums.TipoMovimentacao
    quantidade?: FloatFilter<"Movimentacao"> | number
    custoUnitario?: FloatNullableFilter<"Movimentacao"> | number | null
    observacao?: StringNullableFilter<"Movimentacao"> | string | null
    criadoEm?: DateTimeFilter<"Movimentacao"> | Date | string
    insumoId?: IntFilter<"Movimentacao"> | number
    producaoId?: IntNullableFilter<"Movimentacao"> | number | null
    insumo?: XOR<InsumoScalarRelationFilter, InsumoWhereInput>
    producao?: XOR<ProducaoNullableScalarRelationFilter, ProducaoWhereInput> | null
  }, "id">

  export type MovimentacaoOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    custoUnitario?: SortOrderInput | SortOrder
    observacao?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    insumoId?: SortOrder
    producaoId?: SortOrderInput | SortOrder
    _count?: MovimentacaoCountOrderByAggregateInput
    _avg?: MovimentacaoAvgOrderByAggregateInput
    _max?: MovimentacaoMaxOrderByAggregateInput
    _min?: MovimentacaoMinOrderByAggregateInput
    _sum?: MovimentacaoSumOrderByAggregateInput
  }

  export type MovimentacaoScalarWhereWithAggregatesInput = {
    AND?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    OR?: MovimentacaoScalarWhereWithAggregatesInput[]
    NOT?: MovimentacaoScalarWhereWithAggregatesInput | MovimentacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movimentacao"> | number
    tipo?: EnumTipoMovimentacaoWithAggregatesFilter<"Movimentacao"> | $Enums.TipoMovimentacao
    quantidade?: FloatWithAggregatesFilter<"Movimentacao"> | number
    custoUnitario?: FloatNullableWithAggregatesFilter<"Movimentacao"> | number | null
    observacao?: StringNullableWithAggregatesFilter<"Movimentacao"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Movimentacao"> | Date | string
    insumoId?: IntWithAggregatesFilter<"Movimentacao"> | number
    producaoId?: IntNullableWithAggregatesFilter<"Movimentacao"> | number | null
  }

  export type UserCreateInput = {
    email: string
    nome: string
    senha: string
    role?: $Enums.UserRole
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    nome: string
    senha: string
    role?: $Enums.UserRole
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    nome: string
    senha: string
    role?: $Enums.UserRole
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsumoCreateInput = {
    nome: string
    descricao?: string | null
    unidade: $Enums.UnidadeMedida
    estoqueAtual?: number
    estoqueMin?: number
    custoUnitario?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    receitaItens?: ReceitaItemCreateNestedManyWithoutInsumoInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidade: $Enums.UnidadeMedida
    estoqueAtual?: number
    estoqueMin?: number
    custoUnitario?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    receitaItens?: ReceitaItemUncheckedCreateNestedManyWithoutInsumoInput
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitaItens?: ReceitaItemUpdateManyWithoutInsumoNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitaItens?: ReceitaItemUncheckedUpdateManyWithoutInsumoNestedInput
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidade: $Enums.UnidadeMedida
    estoqueAtual?: number
    estoqueMin?: number
    custoUnitario?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type InsumoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InsumoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoCreateInput = {
    nome: string
    descricao?: string | null
    precoVenda?: number
    estoqueAtual?: number
    estoqueMin?: number
    unidade?: $Enums.UnidadeMedida
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    receitas?: ReceitaCreateNestedManyWithoutProdutoInput
    producoes?: ProducaoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    precoVenda?: number
    estoqueAtual?: number
    estoqueMin?: number
    unidade?: $Enums.UnidadeMedida
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    receitas?: ReceitaUncheckedCreateNestedManyWithoutProdutoInput
    producoes?: ProducaoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    precoVenda?: FloatFieldUpdateOperationsInput | number
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaUpdateManyWithoutProdutoNestedInput
    producoes?: ProducaoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    precoVenda?: FloatFieldUpdateOperationsInput | number
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaUncheckedUpdateManyWithoutProdutoNestedInput
    producoes?: ProducaoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    precoVenda?: number
    estoqueAtual?: number
    estoqueMin?: number
    unidade?: $Enums.UnidadeMedida
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    precoVenda?: FloatFieldUpdateOperationsInput | number
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    precoVenda?: FloatFieldUpdateOperationsInput | number
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaCreateInput = {
    nome: string
    descricao?: string | null
    rendimento?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    produto: ProdutoCreateNestedOneWithoutReceitasInput
    itens?: ReceitaItemCreateNestedManyWithoutReceitaInput
    producoes?: ProducaoCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    rendimento?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    produtoId: number
    itens?: ReceitaItemUncheckedCreateNestedManyWithoutReceitaInput
    producoes?: ProducaoUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    rendimento?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutReceitasNestedInput
    itens?: ReceitaItemUpdateManyWithoutReceitaNestedInput
    producoes?: ProducaoUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    rendimento?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtoId?: IntFieldUpdateOperationsInput | number
    itens?: ReceitaItemUncheckedUpdateManyWithoutReceitaNestedInput
    producoes?: ProducaoUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    rendimento?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    produtoId: number
  }

  export type ReceitaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    rendimento?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReceitaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    rendimento?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaItemCreateInput = {
    quantidade: number
    receita: ReceitaCreateNestedOneWithoutItensInput
    insumo: InsumoCreateNestedOneWithoutReceitaItensInput
  }

  export type ReceitaItemUncheckedCreateInput = {
    id?: number
    quantidade: number
    receitaId: number
    insumoId: number
  }

  export type ReceitaItemUpdateInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    receita?: ReceitaUpdateOneRequiredWithoutItensNestedInput
    insumo?: InsumoUpdateOneRequiredWithoutReceitaItensNestedInput
  }

  export type ReceitaItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    insumoId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaItemCreateManyInput = {
    id?: number
    quantidade: number
    receitaId: number
    insumoId: number
  }

  export type ReceitaItemUpdateManyMutationInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
  }

  export type ReceitaItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
    insumoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProducaoCreateInput = {
    quantidadeProduzida: number
    custoTotal?: number
    observacao?: string | null
    produzidoEm?: Date | string
    criadoEm?: Date | string
    receita: ReceitaCreateNestedOneWithoutProducoesInput
    produto: ProdutoCreateNestedOneWithoutProducoesInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutProducaoInput
  }

  export type ProducaoUncheckedCreateInput = {
    id?: number
    quantidadeProduzida: number
    custoTotal?: number
    observacao?: string | null
    produzidoEm?: Date | string
    criadoEm?: Date | string
    receitaId: number
    produtoId: number
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutProducaoInput
  }

  export type ProducaoUpdateInput = {
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutProducoesNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutProducoesNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutProducaoNestedInput
  }

  export type ProducaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitaId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutProducaoNestedInput
  }

  export type ProducaoCreateManyInput = {
    id?: number
    quantidadeProduzida: number
    custoTotal?: number
    observacao?: string | null
    produzidoEm?: Date | string
    criadoEm?: Date | string
    receitaId: number
    produtoId: number
  }

  export type ProducaoUpdateManyMutationInput = {
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProducaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitaId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoCreateInput = {
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    custoUnitario?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    insumo: InsumoCreateNestedOneWithoutMovimentacoesInput
    producao?: ProducaoCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoUncheckedCreateInput = {
    id?: number
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    custoUnitario?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    insumoId: number
    producaoId?: number | null
  }

  export type MovimentacaoUpdateInput = {
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    insumo?: InsumoUpdateOneRequiredWithoutMovimentacoesNestedInput
    producao?: ProducaoUpdateOneWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    insumoId?: IntFieldUpdateOperationsInput | number
    producaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MovimentacaoCreateManyInput = {
    id?: number
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    custoUnitario?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    insumoId: number
    producaoId?: number | null
  }

  export type MovimentacaoUpdateManyMutationInput = {
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimentacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    insumoId?: IntFieldUpdateOperationsInput | number
    producaoId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumUnidadeMedidaFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedida | EnumUnidadeMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadeMedidaFilter<$PrismaModel> | $Enums.UnidadeMedida
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ReceitaItemListRelationFilter = {
    every?: ReceitaItemWhereInput
    some?: ReceitaItemWhereInput
    none?: ReceitaItemWhereInput
  }

  export type MovimentacaoListRelationFilter = {
    every?: MovimentacaoWhereInput
    some?: MovimentacaoWhereInput
    none?: MovimentacaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReceitaItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovimentacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InsumoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidade?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    custoUnitario?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type InsumoAvgOrderByAggregateInput = {
    id?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    custoUnitario?: SortOrder
  }

  export type InsumoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidade?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    custoUnitario?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type InsumoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    unidade?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    custoUnitario?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type InsumoSumOrderByAggregateInput = {
    id?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    custoUnitario?: SortOrder
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

  export type EnumUnidadeMedidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedida | EnumUnidadeMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadeMedidaWithAggregatesFilter<$PrismaModel> | $Enums.UnidadeMedida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnidadeMedidaFilter<$PrismaModel>
    _max?: NestedEnumUnidadeMedidaFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ReceitaListRelationFilter = {
    every?: ReceitaWhereInput
    some?: ReceitaWhereInput
    none?: ReceitaWhereInput
  }

  export type ProducaoListRelationFilter = {
    every?: ProducaoWhereInput
    some?: ProducaoWhereInput
    none?: ProducaoWhereInput
  }

  export type ReceitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProducaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoVenda?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    unidade?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    precoVenda?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoVenda?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    unidade?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    precoVenda?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
    unidade?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    precoVenda?: SortOrder
    estoqueAtual?: SortOrder
    estoqueMin?: SortOrder
  }

  export type ProdutoScalarRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type ReceitaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    rendimento?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    produtoId?: SortOrder
  }

  export type ReceitaAvgOrderByAggregateInput = {
    id?: SortOrder
    rendimento?: SortOrder
    produtoId?: SortOrder
  }

  export type ReceitaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    rendimento?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    produtoId?: SortOrder
  }

  export type ReceitaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    rendimento?: SortOrder
    ativo?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    produtoId?: SortOrder
  }

  export type ReceitaSumOrderByAggregateInput = {
    id?: SortOrder
    rendimento?: SortOrder
    produtoId?: SortOrder
  }

  export type ReceitaScalarRelationFilter = {
    is?: ReceitaWhereInput
    isNot?: ReceitaWhereInput
  }

  export type InsumoScalarRelationFilter = {
    is?: InsumoWhereInput
    isNot?: InsumoWhereInput
  }

  export type ReceitaItemReceitaIdInsumoIdCompoundUniqueInput = {
    receitaId: number
    insumoId: number
  }

  export type ReceitaItemCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
  }

  export type ReceitaItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
  }

  export type ReceitaItemMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
  }

  export type ReceitaItemMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
  }

  export type ReceitaItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    receitaId?: SortOrder
    insumoId?: SortOrder
  }

  export type ProducaoCountOrderByAggregateInput = {
    id?: SortOrder
    quantidadeProduzida?: SortOrder
    custoTotal?: SortOrder
    observacao?: SortOrder
    produzidoEm?: SortOrder
    criadoEm?: SortOrder
    receitaId?: SortOrder
    produtoId?: SortOrder
  }

  export type ProducaoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidadeProduzida?: SortOrder
    custoTotal?: SortOrder
    receitaId?: SortOrder
    produtoId?: SortOrder
  }

  export type ProducaoMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidadeProduzida?: SortOrder
    custoTotal?: SortOrder
    observacao?: SortOrder
    produzidoEm?: SortOrder
    criadoEm?: SortOrder
    receitaId?: SortOrder
    produtoId?: SortOrder
  }

  export type ProducaoMinOrderByAggregateInput = {
    id?: SortOrder
    quantidadeProduzida?: SortOrder
    custoTotal?: SortOrder
    observacao?: SortOrder
    produzidoEm?: SortOrder
    criadoEm?: SortOrder
    receitaId?: SortOrder
    produtoId?: SortOrder
  }

  export type ProducaoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidadeProduzida?: SortOrder
    custoTotal?: SortOrder
    receitaId?: SortOrder
    produtoId?: SortOrder
  }

  export type EnumTipoMovimentacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoFilter<$PrismaModel> | $Enums.TipoMovimentacao
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type ProducaoNullableScalarRelationFilter = {
    is?: ProducaoWhereInput | null
    isNot?: ProducaoWhereInput | null
  }

  export type MovimentacaoCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    custoUnitario?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
    insumoId?: SortOrder
    producaoId?: SortOrder
  }

  export type MovimentacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    custoUnitario?: SortOrder
    insumoId?: SortOrder
    producaoId?: SortOrder
  }

  export type MovimentacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    custoUnitario?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
    insumoId?: SortOrder
    producaoId?: SortOrder
  }

  export type MovimentacaoMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    custoUnitario?: SortOrder
    observacao?: SortOrder
    criadoEm?: SortOrder
    insumoId?: SortOrder
    producaoId?: SortOrder
  }

  export type MovimentacaoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    custoUnitario?: SortOrder
    insumoId?: SortOrder
    producaoId?: SortOrder
  }

  export type EnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimentacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReceitaItemCreateNestedManyWithoutInsumoInput = {
    create?: XOR<ReceitaItemCreateWithoutInsumoInput, ReceitaItemUncheckedCreateWithoutInsumoInput> | ReceitaItemCreateWithoutInsumoInput[] | ReceitaItemUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ReceitaItemCreateOrConnectWithoutInsumoInput | ReceitaItemCreateOrConnectWithoutInsumoInput[]
    createMany?: ReceitaItemCreateManyInsumoInputEnvelope
    connect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
  }

  export type MovimentacaoCreateNestedManyWithoutInsumoInput = {
    create?: XOR<MovimentacaoCreateWithoutInsumoInput, MovimentacaoUncheckedCreateWithoutInsumoInput> | MovimentacaoCreateWithoutInsumoInput[] | MovimentacaoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutInsumoInput | MovimentacaoCreateOrConnectWithoutInsumoInput[]
    createMany?: MovimentacaoCreateManyInsumoInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type ReceitaItemUncheckedCreateNestedManyWithoutInsumoInput = {
    create?: XOR<ReceitaItemCreateWithoutInsumoInput, ReceitaItemUncheckedCreateWithoutInsumoInput> | ReceitaItemCreateWithoutInsumoInput[] | ReceitaItemUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ReceitaItemCreateOrConnectWithoutInsumoInput | ReceitaItemCreateOrConnectWithoutInsumoInput[]
    createMany?: ReceitaItemCreateManyInsumoInputEnvelope
    connect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
  }

  export type MovimentacaoUncheckedCreateNestedManyWithoutInsumoInput = {
    create?: XOR<MovimentacaoCreateWithoutInsumoInput, MovimentacaoUncheckedCreateWithoutInsumoInput> | MovimentacaoCreateWithoutInsumoInput[] | MovimentacaoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutInsumoInput | MovimentacaoCreateOrConnectWithoutInsumoInput[]
    createMany?: MovimentacaoCreateManyInsumoInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUnidadeMedidaFieldUpdateOperationsInput = {
    set?: $Enums.UnidadeMedida
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReceitaItemUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<ReceitaItemCreateWithoutInsumoInput, ReceitaItemUncheckedCreateWithoutInsumoInput> | ReceitaItemCreateWithoutInsumoInput[] | ReceitaItemUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ReceitaItemCreateOrConnectWithoutInsumoInput | ReceitaItemCreateOrConnectWithoutInsumoInput[]
    upsert?: ReceitaItemUpsertWithWhereUniqueWithoutInsumoInput | ReceitaItemUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: ReceitaItemCreateManyInsumoInputEnvelope
    set?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    disconnect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    delete?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    connect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    update?: ReceitaItemUpdateWithWhereUniqueWithoutInsumoInput | ReceitaItemUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: ReceitaItemUpdateManyWithWhereWithoutInsumoInput | ReceitaItemUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: ReceitaItemScalarWhereInput | ReceitaItemScalarWhereInput[]
  }

  export type MovimentacaoUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutInsumoInput, MovimentacaoUncheckedCreateWithoutInsumoInput> | MovimentacaoCreateWithoutInsumoInput[] | MovimentacaoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutInsumoInput | MovimentacaoCreateOrConnectWithoutInsumoInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutInsumoInput | MovimentacaoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: MovimentacaoCreateManyInsumoInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutInsumoInput | MovimentacaoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutInsumoInput | MovimentacaoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type ReceitaItemUncheckedUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<ReceitaItemCreateWithoutInsumoInput, ReceitaItemUncheckedCreateWithoutInsumoInput> | ReceitaItemCreateWithoutInsumoInput[] | ReceitaItemUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: ReceitaItemCreateOrConnectWithoutInsumoInput | ReceitaItemCreateOrConnectWithoutInsumoInput[]
    upsert?: ReceitaItemUpsertWithWhereUniqueWithoutInsumoInput | ReceitaItemUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: ReceitaItemCreateManyInsumoInputEnvelope
    set?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    disconnect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    delete?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    connect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    update?: ReceitaItemUpdateWithWhereUniqueWithoutInsumoInput | ReceitaItemUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: ReceitaItemUpdateManyWithWhereWithoutInsumoInput | ReceitaItemUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: ReceitaItemScalarWhereInput | ReceitaItemScalarWhereInput[]
  }

  export type MovimentacaoUncheckedUpdateManyWithoutInsumoNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutInsumoInput, MovimentacaoUncheckedCreateWithoutInsumoInput> | MovimentacaoCreateWithoutInsumoInput[] | MovimentacaoUncheckedCreateWithoutInsumoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutInsumoInput | MovimentacaoCreateOrConnectWithoutInsumoInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutInsumoInput | MovimentacaoUpsertWithWhereUniqueWithoutInsumoInput[]
    createMany?: MovimentacaoCreateManyInsumoInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutInsumoInput | MovimentacaoUpdateWithWhereUniqueWithoutInsumoInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutInsumoInput | MovimentacaoUpdateManyWithWhereWithoutInsumoInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type ReceitaCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ReceitaCreateWithoutProdutoInput, ReceitaUncheckedCreateWithoutProdutoInput> | ReceitaCreateWithoutProdutoInput[] | ReceitaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutProdutoInput | ReceitaCreateOrConnectWithoutProdutoInput[]
    createMany?: ReceitaCreateManyProdutoInputEnvelope
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
  }

  export type ProducaoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ProducaoCreateWithoutProdutoInput, ProducaoUncheckedCreateWithoutProdutoInput> | ProducaoCreateWithoutProdutoInput[] | ProducaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProducaoCreateOrConnectWithoutProdutoInput | ProducaoCreateOrConnectWithoutProdutoInput[]
    createMany?: ProducaoCreateManyProdutoInputEnvelope
    connect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
  }

  export type ReceitaUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ReceitaCreateWithoutProdutoInput, ReceitaUncheckedCreateWithoutProdutoInput> | ReceitaCreateWithoutProdutoInput[] | ReceitaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutProdutoInput | ReceitaCreateOrConnectWithoutProdutoInput[]
    createMany?: ReceitaCreateManyProdutoInputEnvelope
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
  }

  export type ProducaoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<ProducaoCreateWithoutProdutoInput, ProducaoUncheckedCreateWithoutProdutoInput> | ProducaoCreateWithoutProdutoInput[] | ProducaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProducaoCreateOrConnectWithoutProdutoInput | ProducaoCreateOrConnectWithoutProdutoInput[]
    createMany?: ProducaoCreateManyProdutoInputEnvelope
    connect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
  }

  export type ReceitaUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ReceitaCreateWithoutProdutoInput, ReceitaUncheckedCreateWithoutProdutoInput> | ReceitaCreateWithoutProdutoInput[] | ReceitaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutProdutoInput | ReceitaCreateOrConnectWithoutProdutoInput[]
    upsert?: ReceitaUpsertWithWhereUniqueWithoutProdutoInput | ReceitaUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ReceitaCreateManyProdutoInputEnvelope
    set?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    disconnect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    delete?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    update?: ReceitaUpdateWithWhereUniqueWithoutProdutoInput | ReceitaUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ReceitaUpdateManyWithWhereWithoutProdutoInput | ReceitaUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
  }

  export type ProducaoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ProducaoCreateWithoutProdutoInput, ProducaoUncheckedCreateWithoutProdutoInput> | ProducaoCreateWithoutProdutoInput[] | ProducaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProducaoCreateOrConnectWithoutProdutoInput | ProducaoCreateOrConnectWithoutProdutoInput[]
    upsert?: ProducaoUpsertWithWhereUniqueWithoutProdutoInput | ProducaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ProducaoCreateManyProdutoInputEnvelope
    set?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    disconnect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    delete?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    connect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    update?: ProducaoUpdateWithWhereUniqueWithoutProdutoInput | ProducaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ProducaoUpdateManyWithWhereWithoutProdutoInput | ProducaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ProducaoScalarWhereInput | ProducaoScalarWhereInput[]
  }

  export type ReceitaUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ReceitaCreateWithoutProdutoInput, ReceitaUncheckedCreateWithoutProdutoInput> | ReceitaCreateWithoutProdutoInput[] | ReceitaUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ReceitaCreateOrConnectWithoutProdutoInput | ReceitaCreateOrConnectWithoutProdutoInput[]
    upsert?: ReceitaUpsertWithWhereUniqueWithoutProdutoInput | ReceitaUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ReceitaCreateManyProdutoInputEnvelope
    set?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    disconnect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    delete?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    connect?: ReceitaWhereUniqueInput | ReceitaWhereUniqueInput[]
    update?: ReceitaUpdateWithWhereUniqueWithoutProdutoInput | ReceitaUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ReceitaUpdateManyWithWhereWithoutProdutoInput | ReceitaUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
  }

  export type ProducaoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<ProducaoCreateWithoutProdutoInput, ProducaoUncheckedCreateWithoutProdutoInput> | ProducaoCreateWithoutProdutoInput[] | ProducaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: ProducaoCreateOrConnectWithoutProdutoInput | ProducaoCreateOrConnectWithoutProdutoInput[]
    upsert?: ProducaoUpsertWithWhereUniqueWithoutProdutoInput | ProducaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: ProducaoCreateManyProdutoInputEnvelope
    set?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    disconnect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    delete?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    connect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    update?: ProducaoUpdateWithWhereUniqueWithoutProdutoInput | ProducaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: ProducaoUpdateManyWithWhereWithoutProdutoInput | ProducaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: ProducaoScalarWhereInput | ProducaoScalarWhereInput[]
  }

  export type ProdutoCreateNestedOneWithoutReceitasInput = {
    create?: XOR<ProdutoCreateWithoutReceitasInput, ProdutoUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutReceitasInput
    connect?: ProdutoWhereUniqueInput
  }

  export type ReceitaItemCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaItemCreateWithoutReceitaInput, ReceitaItemUncheckedCreateWithoutReceitaInput> | ReceitaItemCreateWithoutReceitaInput[] | ReceitaItemUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaItemCreateOrConnectWithoutReceitaInput | ReceitaItemCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaItemCreateManyReceitaInputEnvelope
    connect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
  }

  export type ProducaoCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ProducaoCreateWithoutReceitaInput, ProducaoUncheckedCreateWithoutReceitaInput> | ProducaoCreateWithoutReceitaInput[] | ProducaoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ProducaoCreateOrConnectWithoutReceitaInput | ProducaoCreateOrConnectWithoutReceitaInput[]
    createMany?: ProducaoCreateManyReceitaInputEnvelope
    connect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
  }

  export type ReceitaItemUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ReceitaItemCreateWithoutReceitaInput, ReceitaItemUncheckedCreateWithoutReceitaInput> | ReceitaItemCreateWithoutReceitaInput[] | ReceitaItemUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaItemCreateOrConnectWithoutReceitaInput | ReceitaItemCreateOrConnectWithoutReceitaInput[]
    createMany?: ReceitaItemCreateManyReceitaInputEnvelope
    connect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
  }

  export type ProducaoUncheckedCreateNestedManyWithoutReceitaInput = {
    create?: XOR<ProducaoCreateWithoutReceitaInput, ProducaoUncheckedCreateWithoutReceitaInput> | ProducaoCreateWithoutReceitaInput[] | ProducaoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ProducaoCreateOrConnectWithoutReceitaInput | ProducaoCreateOrConnectWithoutReceitaInput[]
    createMany?: ProducaoCreateManyReceitaInputEnvelope
    connect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
  }

  export type ProdutoUpdateOneRequiredWithoutReceitasNestedInput = {
    create?: XOR<ProdutoCreateWithoutReceitasInput, ProdutoUncheckedCreateWithoutReceitasInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutReceitasInput
    upsert?: ProdutoUpsertWithoutReceitasInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutReceitasInput, ProdutoUpdateWithoutReceitasInput>, ProdutoUncheckedUpdateWithoutReceitasInput>
  }

  export type ReceitaItemUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaItemCreateWithoutReceitaInput, ReceitaItemUncheckedCreateWithoutReceitaInput> | ReceitaItemCreateWithoutReceitaInput[] | ReceitaItemUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaItemCreateOrConnectWithoutReceitaInput | ReceitaItemCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaItemUpsertWithWhereUniqueWithoutReceitaInput | ReceitaItemUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaItemCreateManyReceitaInputEnvelope
    set?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    disconnect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    delete?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    connect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    update?: ReceitaItemUpdateWithWhereUniqueWithoutReceitaInput | ReceitaItemUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaItemUpdateManyWithWhereWithoutReceitaInput | ReceitaItemUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaItemScalarWhereInput | ReceitaItemScalarWhereInput[]
  }

  export type ProducaoUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ProducaoCreateWithoutReceitaInput, ProducaoUncheckedCreateWithoutReceitaInput> | ProducaoCreateWithoutReceitaInput[] | ProducaoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ProducaoCreateOrConnectWithoutReceitaInput | ProducaoCreateOrConnectWithoutReceitaInput[]
    upsert?: ProducaoUpsertWithWhereUniqueWithoutReceitaInput | ProducaoUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ProducaoCreateManyReceitaInputEnvelope
    set?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    disconnect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    delete?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    connect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    update?: ProducaoUpdateWithWhereUniqueWithoutReceitaInput | ProducaoUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ProducaoUpdateManyWithWhereWithoutReceitaInput | ProducaoUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ProducaoScalarWhereInput | ProducaoScalarWhereInput[]
  }

  export type ReceitaItemUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ReceitaItemCreateWithoutReceitaInput, ReceitaItemUncheckedCreateWithoutReceitaInput> | ReceitaItemCreateWithoutReceitaInput[] | ReceitaItemUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ReceitaItemCreateOrConnectWithoutReceitaInput | ReceitaItemCreateOrConnectWithoutReceitaInput[]
    upsert?: ReceitaItemUpsertWithWhereUniqueWithoutReceitaInput | ReceitaItemUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ReceitaItemCreateManyReceitaInputEnvelope
    set?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    disconnect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    delete?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    connect?: ReceitaItemWhereUniqueInput | ReceitaItemWhereUniqueInput[]
    update?: ReceitaItemUpdateWithWhereUniqueWithoutReceitaInput | ReceitaItemUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ReceitaItemUpdateManyWithWhereWithoutReceitaInput | ReceitaItemUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ReceitaItemScalarWhereInput | ReceitaItemScalarWhereInput[]
  }

  export type ProducaoUncheckedUpdateManyWithoutReceitaNestedInput = {
    create?: XOR<ProducaoCreateWithoutReceitaInput, ProducaoUncheckedCreateWithoutReceitaInput> | ProducaoCreateWithoutReceitaInput[] | ProducaoUncheckedCreateWithoutReceitaInput[]
    connectOrCreate?: ProducaoCreateOrConnectWithoutReceitaInput | ProducaoCreateOrConnectWithoutReceitaInput[]
    upsert?: ProducaoUpsertWithWhereUniqueWithoutReceitaInput | ProducaoUpsertWithWhereUniqueWithoutReceitaInput[]
    createMany?: ProducaoCreateManyReceitaInputEnvelope
    set?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    disconnect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    delete?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    connect?: ProducaoWhereUniqueInput | ProducaoWhereUniqueInput[]
    update?: ProducaoUpdateWithWhereUniqueWithoutReceitaInput | ProducaoUpdateWithWhereUniqueWithoutReceitaInput[]
    updateMany?: ProducaoUpdateManyWithWhereWithoutReceitaInput | ProducaoUpdateManyWithWhereWithoutReceitaInput[]
    deleteMany?: ProducaoScalarWhereInput | ProducaoScalarWhereInput[]
  }

  export type ReceitaCreateNestedOneWithoutItensInput = {
    create?: XOR<ReceitaCreateWithoutItensInput, ReceitaUncheckedCreateWithoutItensInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutItensInput
    connect?: ReceitaWhereUniqueInput
  }

  export type InsumoCreateNestedOneWithoutReceitaItensInput = {
    create?: XOR<InsumoCreateWithoutReceitaItensInput, InsumoUncheckedCreateWithoutReceitaItensInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutReceitaItensInput
    connect?: InsumoWhereUniqueInput
  }

  export type ReceitaUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<ReceitaCreateWithoutItensInput, ReceitaUncheckedCreateWithoutItensInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutItensInput
    upsert?: ReceitaUpsertWithoutItensInput
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutItensInput, ReceitaUpdateWithoutItensInput>, ReceitaUncheckedUpdateWithoutItensInput>
  }

  export type InsumoUpdateOneRequiredWithoutReceitaItensNestedInput = {
    create?: XOR<InsumoCreateWithoutReceitaItensInput, InsumoUncheckedCreateWithoutReceitaItensInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutReceitaItensInput
    upsert?: InsumoUpsertWithoutReceitaItensInput
    connect?: InsumoWhereUniqueInput
    update?: XOR<XOR<InsumoUpdateToOneWithWhereWithoutReceitaItensInput, InsumoUpdateWithoutReceitaItensInput>, InsumoUncheckedUpdateWithoutReceitaItensInput>
  }

  export type ReceitaCreateNestedOneWithoutProducoesInput = {
    create?: XOR<ReceitaCreateWithoutProducoesInput, ReceitaUncheckedCreateWithoutProducoesInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutProducoesInput
    connect?: ReceitaWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutProducoesInput = {
    create?: XOR<ProdutoCreateWithoutProducoesInput, ProdutoUncheckedCreateWithoutProducoesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutProducoesInput
    connect?: ProdutoWhereUniqueInput
  }

  export type MovimentacaoCreateNestedManyWithoutProducaoInput = {
    create?: XOR<MovimentacaoCreateWithoutProducaoInput, MovimentacaoUncheckedCreateWithoutProducaoInput> | MovimentacaoCreateWithoutProducaoInput[] | MovimentacaoUncheckedCreateWithoutProducaoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutProducaoInput | MovimentacaoCreateOrConnectWithoutProducaoInput[]
    createMany?: MovimentacaoCreateManyProducaoInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type MovimentacaoUncheckedCreateNestedManyWithoutProducaoInput = {
    create?: XOR<MovimentacaoCreateWithoutProducaoInput, MovimentacaoUncheckedCreateWithoutProducaoInput> | MovimentacaoCreateWithoutProducaoInput[] | MovimentacaoUncheckedCreateWithoutProducaoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutProducaoInput | MovimentacaoCreateOrConnectWithoutProducaoInput[]
    createMany?: MovimentacaoCreateManyProducaoInputEnvelope
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
  }

  export type ReceitaUpdateOneRequiredWithoutProducoesNestedInput = {
    create?: XOR<ReceitaCreateWithoutProducoesInput, ReceitaUncheckedCreateWithoutProducoesInput>
    connectOrCreate?: ReceitaCreateOrConnectWithoutProducoesInput
    upsert?: ReceitaUpsertWithoutProducoesInput
    connect?: ReceitaWhereUniqueInput
    update?: XOR<XOR<ReceitaUpdateToOneWithWhereWithoutProducoesInput, ReceitaUpdateWithoutProducoesInput>, ReceitaUncheckedUpdateWithoutProducoesInput>
  }

  export type ProdutoUpdateOneRequiredWithoutProducoesNestedInput = {
    create?: XOR<ProdutoCreateWithoutProducoesInput, ProdutoUncheckedCreateWithoutProducoesInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutProducoesInput
    upsert?: ProdutoUpsertWithoutProducoesInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutProducoesInput, ProdutoUpdateWithoutProducoesInput>, ProdutoUncheckedUpdateWithoutProducoesInput>
  }

  export type MovimentacaoUpdateManyWithoutProducaoNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutProducaoInput, MovimentacaoUncheckedCreateWithoutProducaoInput> | MovimentacaoCreateWithoutProducaoInput[] | MovimentacaoUncheckedCreateWithoutProducaoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutProducaoInput | MovimentacaoCreateOrConnectWithoutProducaoInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutProducaoInput | MovimentacaoUpsertWithWhereUniqueWithoutProducaoInput[]
    createMany?: MovimentacaoCreateManyProducaoInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutProducaoInput | MovimentacaoUpdateWithWhereUniqueWithoutProducaoInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutProducaoInput | MovimentacaoUpdateManyWithWhereWithoutProducaoInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type MovimentacaoUncheckedUpdateManyWithoutProducaoNestedInput = {
    create?: XOR<MovimentacaoCreateWithoutProducaoInput, MovimentacaoUncheckedCreateWithoutProducaoInput> | MovimentacaoCreateWithoutProducaoInput[] | MovimentacaoUncheckedCreateWithoutProducaoInput[]
    connectOrCreate?: MovimentacaoCreateOrConnectWithoutProducaoInput | MovimentacaoCreateOrConnectWithoutProducaoInput[]
    upsert?: MovimentacaoUpsertWithWhereUniqueWithoutProducaoInput | MovimentacaoUpsertWithWhereUniqueWithoutProducaoInput[]
    createMany?: MovimentacaoCreateManyProducaoInputEnvelope
    set?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    disconnect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    delete?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    connect?: MovimentacaoWhereUniqueInput | MovimentacaoWhereUniqueInput[]
    update?: MovimentacaoUpdateWithWhereUniqueWithoutProducaoInput | MovimentacaoUpdateWithWhereUniqueWithoutProducaoInput[]
    updateMany?: MovimentacaoUpdateManyWithWhereWithoutProducaoInput | MovimentacaoUpdateManyWithWhereWithoutProducaoInput[]
    deleteMany?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
  }

  export type InsumoCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<InsumoCreateWithoutMovimentacoesInput, InsumoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutMovimentacoesInput
    connect?: InsumoWhereUniqueInput
  }

  export type ProducaoCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<ProducaoCreateWithoutMovimentacoesInput, ProducaoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: ProducaoCreateOrConnectWithoutMovimentacoesInput
    connect?: ProducaoWhereUniqueInput
  }

  export type EnumTipoMovimentacaoFieldUpdateOperationsInput = {
    set?: $Enums.TipoMovimentacao
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InsumoUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<InsumoCreateWithoutMovimentacoesInput, InsumoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: InsumoCreateOrConnectWithoutMovimentacoesInput
    upsert?: InsumoUpsertWithoutMovimentacoesInput
    connect?: InsumoWhereUniqueInput
    update?: XOR<XOR<InsumoUpdateToOneWithWhereWithoutMovimentacoesInput, InsumoUpdateWithoutMovimentacoesInput>, InsumoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type ProducaoUpdateOneWithoutMovimentacoesNestedInput = {
    create?: XOR<ProducaoCreateWithoutMovimentacoesInput, ProducaoUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: ProducaoCreateOrConnectWithoutMovimentacoesInput
    upsert?: ProducaoUpsertWithoutMovimentacoesInput
    disconnect?: ProducaoWhereInput | boolean
    delete?: ProducaoWhereInput | boolean
    connect?: ProducaoWhereUniqueInput
    update?: XOR<XOR<ProducaoUpdateToOneWithWhereWithoutMovimentacoesInput, ProducaoUpdateWithoutMovimentacoesInput>, ProducaoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumUnidadeMedidaFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedida | EnumUnidadeMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadeMedidaFilter<$PrismaModel> | $Enums.UnidadeMedida
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

  export type NestedEnumUnidadeMedidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadeMedida | EnumUnidadeMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadeMedida[] | ListEnumUnidadeMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadeMedidaWithAggregatesFilter<$PrismaModel> | $Enums.UnidadeMedida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnidadeMedidaFilter<$PrismaModel>
    _max?: NestedEnumUnidadeMedidaFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTipoMovimentacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoFilter<$PrismaModel> | $Enums.TipoMovimentacao
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

  export type NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMovimentacao | EnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoMovimentacao[] | ListEnumTipoMovimentacaoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoMovimentacaoWithAggregatesFilter<$PrismaModel> | $Enums.TipoMovimentacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
    _max?: NestedEnumTipoMovimentacaoFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type ReceitaItemCreateWithoutInsumoInput = {
    quantidade: number
    receita: ReceitaCreateNestedOneWithoutItensInput
  }

  export type ReceitaItemUncheckedCreateWithoutInsumoInput = {
    id?: number
    quantidade: number
    receitaId: number
  }

  export type ReceitaItemCreateOrConnectWithoutInsumoInput = {
    where: ReceitaItemWhereUniqueInput
    create: XOR<ReceitaItemCreateWithoutInsumoInput, ReceitaItemUncheckedCreateWithoutInsumoInput>
  }

  export type ReceitaItemCreateManyInsumoInputEnvelope = {
    data: ReceitaItemCreateManyInsumoInput | ReceitaItemCreateManyInsumoInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoCreateWithoutInsumoInput = {
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    custoUnitario?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    producao?: ProducaoCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoUncheckedCreateWithoutInsumoInput = {
    id?: number
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    custoUnitario?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    producaoId?: number | null
  }

  export type MovimentacaoCreateOrConnectWithoutInsumoInput = {
    where: MovimentacaoWhereUniqueInput
    create: XOR<MovimentacaoCreateWithoutInsumoInput, MovimentacaoUncheckedCreateWithoutInsumoInput>
  }

  export type MovimentacaoCreateManyInsumoInputEnvelope = {
    data: MovimentacaoCreateManyInsumoInput | MovimentacaoCreateManyInsumoInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaItemUpsertWithWhereUniqueWithoutInsumoInput = {
    where: ReceitaItemWhereUniqueInput
    update: XOR<ReceitaItemUpdateWithoutInsumoInput, ReceitaItemUncheckedUpdateWithoutInsumoInput>
    create: XOR<ReceitaItemCreateWithoutInsumoInput, ReceitaItemUncheckedCreateWithoutInsumoInput>
  }

  export type ReceitaItemUpdateWithWhereUniqueWithoutInsumoInput = {
    where: ReceitaItemWhereUniqueInput
    data: XOR<ReceitaItemUpdateWithoutInsumoInput, ReceitaItemUncheckedUpdateWithoutInsumoInput>
  }

  export type ReceitaItemUpdateManyWithWhereWithoutInsumoInput = {
    where: ReceitaItemScalarWhereInput
    data: XOR<ReceitaItemUpdateManyMutationInput, ReceitaItemUncheckedUpdateManyWithoutInsumoInput>
  }

  export type ReceitaItemScalarWhereInput = {
    AND?: ReceitaItemScalarWhereInput | ReceitaItemScalarWhereInput[]
    OR?: ReceitaItemScalarWhereInput[]
    NOT?: ReceitaItemScalarWhereInput | ReceitaItemScalarWhereInput[]
    id?: IntFilter<"ReceitaItem"> | number
    quantidade?: FloatFilter<"ReceitaItem"> | number
    receitaId?: IntFilter<"ReceitaItem"> | number
    insumoId?: IntFilter<"ReceitaItem"> | number
  }

  export type MovimentacaoUpsertWithWhereUniqueWithoutInsumoInput = {
    where: MovimentacaoWhereUniqueInput
    update: XOR<MovimentacaoUpdateWithoutInsumoInput, MovimentacaoUncheckedUpdateWithoutInsumoInput>
    create: XOR<MovimentacaoCreateWithoutInsumoInput, MovimentacaoUncheckedCreateWithoutInsumoInput>
  }

  export type MovimentacaoUpdateWithWhereUniqueWithoutInsumoInput = {
    where: MovimentacaoWhereUniqueInput
    data: XOR<MovimentacaoUpdateWithoutInsumoInput, MovimentacaoUncheckedUpdateWithoutInsumoInput>
  }

  export type MovimentacaoUpdateManyWithWhereWithoutInsumoInput = {
    where: MovimentacaoScalarWhereInput
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyWithoutInsumoInput>
  }

  export type MovimentacaoScalarWhereInput = {
    AND?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    OR?: MovimentacaoScalarWhereInput[]
    NOT?: MovimentacaoScalarWhereInput | MovimentacaoScalarWhereInput[]
    id?: IntFilter<"Movimentacao"> | number
    tipo?: EnumTipoMovimentacaoFilter<"Movimentacao"> | $Enums.TipoMovimentacao
    quantidade?: FloatFilter<"Movimentacao"> | number
    custoUnitario?: FloatNullableFilter<"Movimentacao"> | number | null
    observacao?: StringNullableFilter<"Movimentacao"> | string | null
    criadoEm?: DateTimeFilter<"Movimentacao"> | Date | string
    insumoId?: IntFilter<"Movimentacao"> | number
    producaoId?: IntNullableFilter<"Movimentacao"> | number | null
  }

  export type ReceitaCreateWithoutProdutoInput = {
    nome: string
    descricao?: string | null
    rendimento?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    itens?: ReceitaItemCreateNestedManyWithoutReceitaInput
    producoes?: ProducaoCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutProdutoInput = {
    id?: number
    nome: string
    descricao?: string | null
    rendimento?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    itens?: ReceitaItemUncheckedCreateNestedManyWithoutReceitaInput
    producoes?: ProducaoUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutProdutoInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutProdutoInput, ReceitaUncheckedCreateWithoutProdutoInput>
  }

  export type ReceitaCreateManyProdutoInputEnvelope = {
    data: ReceitaCreateManyProdutoInput | ReceitaCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type ProducaoCreateWithoutProdutoInput = {
    quantidadeProduzida: number
    custoTotal?: number
    observacao?: string | null
    produzidoEm?: Date | string
    criadoEm?: Date | string
    receita: ReceitaCreateNestedOneWithoutProducoesInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutProducaoInput
  }

  export type ProducaoUncheckedCreateWithoutProdutoInput = {
    id?: number
    quantidadeProduzida: number
    custoTotal?: number
    observacao?: string | null
    produzidoEm?: Date | string
    criadoEm?: Date | string
    receitaId: number
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutProducaoInput
  }

  export type ProducaoCreateOrConnectWithoutProdutoInput = {
    where: ProducaoWhereUniqueInput
    create: XOR<ProducaoCreateWithoutProdutoInput, ProducaoUncheckedCreateWithoutProdutoInput>
  }

  export type ProducaoCreateManyProdutoInputEnvelope = {
    data: ProducaoCreateManyProdutoInput | ProducaoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ReceitaWhereUniqueInput
    update: XOR<ReceitaUpdateWithoutProdutoInput, ReceitaUncheckedUpdateWithoutProdutoInput>
    create: XOR<ReceitaCreateWithoutProdutoInput, ReceitaUncheckedCreateWithoutProdutoInput>
  }

  export type ReceitaUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ReceitaWhereUniqueInput
    data: XOR<ReceitaUpdateWithoutProdutoInput, ReceitaUncheckedUpdateWithoutProdutoInput>
  }

  export type ReceitaUpdateManyWithWhereWithoutProdutoInput = {
    where: ReceitaScalarWhereInput
    data: XOR<ReceitaUpdateManyMutationInput, ReceitaUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ReceitaScalarWhereInput = {
    AND?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
    OR?: ReceitaScalarWhereInput[]
    NOT?: ReceitaScalarWhereInput | ReceitaScalarWhereInput[]
    id?: IntFilter<"Receita"> | number
    nome?: StringFilter<"Receita"> | string
    descricao?: StringNullableFilter<"Receita"> | string | null
    rendimento?: FloatFilter<"Receita"> | number
    ativo?: BoolFilter<"Receita"> | boolean
    criadoEm?: DateTimeFilter<"Receita"> | Date | string
    atualizadoEm?: DateTimeFilter<"Receita"> | Date | string
    produtoId?: IntFilter<"Receita"> | number
  }

  export type ProducaoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: ProducaoWhereUniqueInput
    update: XOR<ProducaoUpdateWithoutProdutoInput, ProducaoUncheckedUpdateWithoutProdutoInput>
    create: XOR<ProducaoCreateWithoutProdutoInput, ProducaoUncheckedCreateWithoutProdutoInput>
  }

  export type ProducaoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: ProducaoWhereUniqueInput
    data: XOR<ProducaoUpdateWithoutProdutoInput, ProducaoUncheckedUpdateWithoutProdutoInput>
  }

  export type ProducaoUpdateManyWithWhereWithoutProdutoInput = {
    where: ProducaoScalarWhereInput
    data: XOR<ProducaoUpdateManyMutationInput, ProducaoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type ProducaoScalarWhereInput = {
    AND?: ProducaoScalarWhereInput | ProducaoScalarWhereInput[]
    OR?: ProducaoScalarWhereInput[]
    NOT?: ProducaoScalarWhereInput | ProducaoScalarWhereInput[]
    id?: IntFilter<"Producao"> | number
    quantidadeProduzida?: FloatFilter<"Producao"> | number
    custoTotal?: FloatFilter<"Producao"> | number
    observacao?: StringNullableFilter<"Producao"> | string | null
    produzidoEm?: DateTimeFilter<"Producao"> | Date | string
    criadoEm?: DateTimeFilter<"Producao"> | Date | string
    receitaId?: IntFilter<"Producao"> | number
    produtoId?: IntFilter<"Producao"> | number
  }

  export type ProdutoCreateWithoutReceitasInput = {
    nome: string
    descricao?: string | null
    precoVenda?: number
    estoqueAtual?: number
    estoqueMin?: number
    unidade?: $Enums.UnidadeMedida
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    producoes?: ProducaoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutReceitasInput = {
    id?: number
    nome: string
    descricao?: string | null
    precoVenda?: number
    estoqueAtual?: number
    estoqueMin?: number
    unidade?: $Enums.UnidadeMedida
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    producoes?: ProducaoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutReceitasInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutReceitasInput, ProdutoUncheckedCreateWithoutReceitasInput>
  }

  export type ReceitaItemCreateWithoutReceitaInput = {
    quantidade: number
    insumo: InsumoCreateNestedOneWithoutReceitaItensInput
  }

  export type ReceitaItemUncheckedCreateWithoutReceitaInput = {
    id?: number
    quantidade: number
    insumoId: number
  }

  export type ReceitaItemCreateOrConnectWithoutReceitaInput = {
    where: ReceitaItemWhereUniqueInput
    create: XOR<ReceitaItemCreateWithoutReceitaInput, ReceitaItemUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaItemCreateManyReceitaInputEnvelope = {
    data: ReceitaItemCreateManyReceitaInput | ReceitaItemCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type ProducaoCreateWithoutReceitaInput = {
    quantidadeProduzida: number
    custoTotal?: number
    observacao?: string | null
    produzidoEm?: Date | string
    criadoEm?: Date | string
    produto: ProdutoCreateNestedOneWithoutProducoesInput
    movimentacoes?: MovimentacaoCreateNestedManyWithoutProducaoInput
  }

  export type ProducaoUncheckedCreateWithoutReceitaInput = {
    id?: number
    quantidadeProduzida: number
    custoTotal?: number
    observacao?: string | null
    produzidoEm?: Date | string
    criadoEm?: Date | string
    produtoId: number
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutProducaoInput
  }

  export type ProducaoCreateOrConnectWithoutReceitaInput = {
    where: ProducaoWhereUniqueInput
    create: XOR<ProducaoCreateWithoutReceitaInput, ProducaoUncheckedCreateWithoutReceitaInput>
  }

  export type ProducaoCreateManyReceitaInputEnvelope = {
    data: ProducaoCreateManyReceitaInput | ProducaoCreateManyReceitaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoUpsertWithoutReceitasInput = {
    update: XOR<ProdutoUpdateWithoutReceitasInput, ProdutoUncheckedUpdateWithoutReceitasInput>
    create: XOR<ProdutoCreateWithoutReceitasInput, ProdutoUncheckedCreateWithoutReceitasInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutReceitasInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutReceitasInput, ProdutoUncheckedUpdateWithoutReceitasInput>
  }

  export type ProdutoUpdateWithoutReceitasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    precoVenda?: FloatFieldUpdateOperationsInput | number
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    producoes?: ProducaoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutReceitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    precoVenda?: FloatFieldUpdateOperationsInput | number
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    producoes?: ProducaoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ReceitaItemUpsertWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaItemWhereUniqueInput
    update: XOR<ReceitaItemUpdateWithoutReceitaInput, ReceitaItemUncheckedUpdateWithoutReceitaInput>
    create: XOR<ReceitaItemCreateWithoutReceitaInput, ReceitaItemUncheckedCreateWithoutReceitaInput>
  }

  export type ReceitaItemUpdateWithWhereUniqueWithoutReceitaInput = {
    where: ReceitaItemWhereUniqueInput
    data: XOR<ReceitaItemUpdateWithoutReceitaInput, ReceitaItemUncheckedUpdateWithoutReceitaInput>
  }

  export type ReceitaItemUpdateManyWithWhereWithoutReceitaInput = {
    where: ReceitaItemScalarWhereInput
    data: XOR<ReceitaItemUpdateManyMutationInput, ReceitaItemUncheckedUpdateManyWithoutReceitaInput>
  }

  export type ProducaoUpsertWithWhereUniqueWithoutReceitaInput = {
    where: ProducaoWhereUniqueInput
    update: XOR<ProducaoUpdateWithoutReceitaInput, ProducaoUncheckedUpdateWithoutReceitaInput>
    create: XOR<ProducaoCreateWithoutReceitaInput, ProducaoUncheckedCreateWithoutReceitaInput>
  }

  export type ProducaoUpdateWithWhereUniqueWithoutReceitaInput = {
    where: ProducaoWhereUniqueInput
    data: XOR<ProducaoUpdateWithoutReceitaInput, ProducaoUncheckedUpdateWithoutReceitaInput>
  }

  export type ProducaoUpdateManyWithWhereWithoutReceitaInput = {
    where: ProducaoScalarWhereInput
    data: XOR<ProducaoUpdateManyMutationInput, ProducaoUncheckedUpdateManyWithoutReceitaInput>
  }

  export type ReceitaCreateWithoutItensInput = {
    nome: string
    descricao?: string | null
    rendimento?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    produto: ProdutoCreateNestedOneWithoutReceitasInput
    producoes?: ProducaoCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutItensInput = {
    id?: number
    nome: string
    descricao?: string | null
    rendimento?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    produtoId: number
    producoes?: ProducaoUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutItensInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutItensInput, ReceitaUncheckedCreateWithoutItensInput>
  }

  export type InsumoCreateWithoutReceitaItensInput = {
    nome: string
    descricao?: string | null
    unidade: $Enums.UnidadeMedida
    estoqueAtual?: number
    estoqueMin?: number
    custoUnitario?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    movimentacoes?: MovimentacaoCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUncheckedCreateWithoutReceitaItensInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidade: $Enums.UnidadeMedida
    estoqueAtual?: number
    estoqueMin?: number
    custoUnitario?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    movimentacoes?: MovimentacaoUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type InsumoCreateOrConnectWithoutReceitaItensInput = {
    where: InsumoWhereUniqueInput
    create: XOR<InsumoCreateWithoutReceitaItensInput, InsumoUncheckedCreateWithoutReceitaItensInput>
  }

  export type ReceitaUpsertWithoutItensInput = {
    update: XOR<ReceitaUpdateWithoutItensInput, ReceitaUncheckedUpdateWithoutItensInput>
    create: XOR<ReceitaCreateWithoutItensInput, ReceitaUncheckedCreateWithoutItensInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutItensInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutItensInput, ReceitaUncheckedUpdateWithoutItensInput>
  }

  export type ReceitaUpdateWithoutItensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    rendimento?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutReceitasNestedInput
    producoes?: ProducaoUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    rendimento?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtoId?: IntFieldUpdateOperationsInput | number
    producoes?: ProducaoUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type InsumoUpsertWithoutReceitaItensInput = {
    update: XOR<InsumoUpdateWithoutReceitaItensInput, InsumoUncheckedUpdateWithoutReceitaItensInput>
    create: XOR<InsumoCreateWithoutReceitaItensInput, InsumoUncheckedCreateWithoutReceitaItensInput>
    where?: InsumoWhereInput
  }

  export type InsumoUpdateToOneWithWhereWithoutReceitaItensInput = {
    where?: InsumoWhereInput
    data: XOR<InsumoUpdateWithoutReceitaItensInput, InsumoUncheckedUpdateWithoutReceitaItensInput>
  }

  export type InsumoUpdateWithoutReceitaItensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacoes?: MovimentacaoUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoUncheckedUpdateWithoutReceitaItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type ReceitaCreateWithoutProducoesInput = {
    nome: string
    descricao?: string | null
    rendimento?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    produto: ProdutoCreateNestedOneWithoutReceitasInput
    itens?: ReceitaItemCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaUncheckedCreateWithoutProducoesInput = {
    id?: number
    nome: string
    descricao?: string | null
    rendimento?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    produtoId: number
    itens?: ReceitaItemUncheckedCreateNestedManyWithoutReceitaInput
  }

  export type ReceitaCreateOrConnectWithoutProducoesInput = {
    where: ReceitaWhereUniqueInput
    create: XOR<ReceitaCreateWithoutProducoesInput, ReceitaUncheckedCreateWithoutProducoesInput>
  }

  export type ProdutoCreateWithoutProducoesInput = {
    nome: string
    descricao?: string | null
    precoVenda?: number
    estoqueAtual?: number
    estoqueMin?: number
    unidade?: $Enums.UnidadeMedida
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    receitas?: ReceitaCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutProducoesInput = {
    id?: number
    nome: string
    descricao?: string | null
    precoVenda?: number
    estoqueAtual?: number
    estoqueMin?: number
    unidade?: $Enums.UnidadeMedida
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    receitas?: ReceitaUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutProducoesInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutProducoesInput, ProdutoUncheckedCreateWithoutProducoesInput>
  }

  export type MovimentacaoCreateWithoutProducaoInput = {
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    custoUnitario?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    insumo: InsumoCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoUncheckedCreateWithoutProducaoInput = {
    id?: number
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    custoUnitario?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    insumoId: number
  }

  export type MovimentacaoCreateOrConnectWithoutProducaoInput = {
    where: MovimentacaoWhereUniqueInput
    create: XOR<MovimentacaoCreateWithoutProducaoInput, MovimentacaoUncheckedCreateWithoutProducaoInput>
  }

  export type MovimentacaoCreateManyProducaoInputEnvelope = {
    data: MovimentacaoCreateManyProducaoInput | MovimentacaoCreateManyProducaoInput[]
    skipDuplicates?: boolean
  }

  export type ReceitaUpsertWithoutProducoesInput = {
    update: XOR<ReceitaUpdateWithoutProducoesInput, ReceitaUncheckedUpdateWithoutProducoesInput>
    create: XOR<ReceitaCreateWithoutProducoesInput, ReceitaUncheckedCreateWithoutProducoesInput>
    where?: ReceitaWhereInput
  }

  export type ReceitaUpdateToOneWithWhereWithoutProducoesInput = {
    where?: ReceitaWhereInput
    data: XOR<ReceitaUpdateWithoutProducoesInput, ReceitaUncheckedUpdateWithoutProducoesInput>
  }

  export type ReceitaUpdateWithoutProducoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    rendimento?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutReceitasNestedInput
    itens?: ReceitaItemUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutProducoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    rendimento?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtoId?: IntFieldUpdateOperationsInput | number
    itens?: ReceitaItemUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type ProdutoUpsertWithoutProducoesInput = {
    update: XOR<ProdutoUpdateWithoutProducoesInput, ProdutoUncheckedUpdateWithoutProducoesInput>
    create: XOR<ProdutoCreateWithoutProducoesInput, ProdutoUncheckedCreateWithoutProducoesInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutProducoesInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutProducoesInput, ProdutoUncheckedUpdateWithoutProducoesInput>
  }

  export type ProdutoUpdateWithoutProducoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    precoVenda?: FloatFieldUpdateOperationsInput | number
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutProducoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    precoVenda?: FloatFieldUpdateOperationsInput | number
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitas?: ReceitaUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type MovimentacaoUpsertWithWhereUniqueWithoutProducaoInput = {
    where: MovimentacaoWhereUniqueInput
    update: XOR<MovimentacaoUpdateWithoutProducaoInput, MovimentacaoUncheckedUpdateWithoutProducaoInput>
    create: XOR<MovimentacaoCreateWithoutProducaoInput, MovimentacaoUncheckedCreateWithoutProducaoInput>
  }

  export type MovimentacaoUpdateWithWhereUniqueWithoutProducaoInput = {
    where: MovimentacaoWhereUniqueInput
    data: XOR<MovimentacaoUpdateWithoutProducaoInput, MovimentacaoUncheckedUpdateWithoutProducaoInput>
  }

  export type MovimentacaoUpdateManyWithWhereWithoutProducaoInput = {
    where: MovimentacaoScalarWhereInput
    data: XOR<MovimentacaoUpdateManyMutationInput, MovimentacaoUncheckedUpdateManyWithoutProducaoInput>
  }

  export type InsumoCreateWithoutMovimentacoesInput = {
    nome: string
    descricao?: string | null
    unidade: $Enums.UnidadeMedida
    estoqueAtual?: number
    estoqueMin?: number
    custoUnitario?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    receitaItens?: ReceitaItemCreateNestedManyWithoutInsumoInput
  }

  export type InsumoUncheckedCreateWithoutMovimentacoesInput = {
    id?: number
    nome: string
    descricao?: string | null
    unidade: $Enums.UnidadeMedida
    estoqueAtual?: number
    estoqueMin?: number
    custoUnitario?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    receitaItens?: ReceitaItemUncheckedCreateNestedManyWithoutInsumoInput
  }

  export type InsumoCreateOrConnectWithoutMovimentacoesInput = {
    where: InsumoWhereUniqueInput
    create: XOR<InsumoCreateWithoutMovimentacoesInput, InsumoUncheckedCreateWithoutMovimentacoesInput>
  }

  export type ProducaoCreateWithoutMovimentacoesInput = {
    quantidadeProduzida: number
    custoTotal?: number
    observacao?: string | null
    produzidoEm?: Date | string
    criadoEm?: Date | string
    receita: ReceitaCreateNestedOneWithoutProducoesInput
    produto: ProdutoCreateNestedOneWithoutProducoesInput
  }

  export type ProducaoUncheckedCreateWithoutMovimentacoesInput = {
    id?: number
    quantidadeProduzida: number
    custoTotal?: number
    observacao?: string | null
    produzidoEm?: Date | string
    criadoEm?: Date | string
    receitaId: number
    produtoId: number
  }

  export type ProducaoCreateOrConnectWithoutMovimentacoesInput = {
    where: ProducaoWhereUniqueInput
    create: XOR<ProducaoCreateWithoutMovimentacoesInput, ProducaoUncheckedCreateWithoutMovimentacoesInput>
  }

  export type InsumoUpsertWithoutMovimentacoesInput = {
    update: XOR<InsumoUpdateWithoutMovimentacoesInput, InsumoUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<InsumoCreateWithoutMovimentacoesInput, InsumoUncheckedCreateWithoutMovimentacoesInput>
    where?: InsumoWhereInput
  }

  export type InsumoUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: InsumoWhereInput
    data: XOR<InsumoUpdateWithoutMovimentacoesInput, InsumoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type InsumoUpdateWithoutMovimentacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitaItens?: ReceitaItemUpdateManyWithoutInsumoNestedInput
  }

  export type InsumoUncheckedUpdateWithoutMovimentacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    unidade?: EnumUnidadeMedidaFieldUpdateOperationsInput | $Enums.UnidadeMedida
    estoqueAtual?: FloatFieldUpdateOperationsInput | number
    estoqueMin?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitaItens?: ReceitaItemUncheckedUpdateManyWithoutInsumoNestedInput
  }

  export type ProducaoUpsertWithoutMovimentacoesInput = {
    update: XOR<ProducaoUpdateWithoutMovimentacoesInput, ProducaoUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<ProducaoCreateWithoutMovimentacoesInput, ProducaoUncheckedCreateWithoutMovimentacoesInput>
    where?: ProducaoWhereInput
  }

  export type ProducaoUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: ProducaoWhereInput
    data: XOR<ProducaoUpdateWithoutMovimentacoesInput, ProducaoUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type ProducaoUpdateWithoutMovimentacoesInput = {
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutProducoesNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutProducoesNestedInput
  }

  export type ProducaoUncheckedUpdateWithoutMovimentacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitaId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaItemCreateManyInsumoInput = {
    id?: number
    quantidade: number
    receitaId: number
  }

  export type MovimentacaoCreateManyInsumoInput = {
    id?: number
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    custoUnitario?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    producaoId?: number | null
  }

  export type ReceitaItemUpdateWithoutInsumoInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    receita?: ReceitaUpdateOneRequiredWithoutItensNestedInput
  }

  export type ReceitaItemUncheckedUpdateWithoutInsumoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaItemUncheckedUpdateManyWithoutInsumoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    receitaId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoUpdateWithoutInsumoInput = {
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    producao?: ProducaoUpdateOneWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoUncheckedUpdateWithoutInsumoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    producaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MovimentacaoUncheckedUpdateManyWithoutInsumoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    producaoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReceitaCreateManyProdutoInput = {
    id?: number
    nome: string
    descricao?: string | null
    rendimento?: number
    ativo?: boolean
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ProducaoCreateManyProdutoInput = {
    id?: number
    quantidadeProduzida: number
    custoTotal?: number
    observacao?: string | null
    produzidoEm?: Date | string
    criadoEm?: Date | string
    receitaId: number
  }

  export type ReceitaUpdateWithoutProdutoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    rendimento?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ReceitaItemUpdateManyWithoutReceitaNestedInput
    producoes?: ProducaoUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    rendimento?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: ReceitaItemUncheckedUpdateManyWithoutReceitaNestedInput
    producoes?: ProducaoUncheckedUpdateManyWithoutReceitaNestedInput
  }

  export type ReceitaUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    rendimento?: FloatFieldUpdateOperationsInput | number
    ativo?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProducaoUpdateWithoutProdutoInput = {
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receita?: ReceitaUpdateOneRequiredWithoutProducoesNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutProducaoNestedInput
  }

  export type ProducaoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitaId?: IntFieldUpdateOperationsInput | number
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutProducaoNestedInput
  }

  export type ProducaoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    receitaId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaItemCreateManyReceitaInput = {
    id?: number
    quantidade: number
    insumoId: number
  }

  export type ProducaoCreateManyReceitaInput = {
    id?: number
    quantidadeProduzida: number
    custoTotal?: number
    observacao?: string | null
    produzidoEm?: Date | string
    criadoEm?: Date | string
    produtoId: number
  }

  export type ReceitaItemUpdateWithoutReceitaInput = {
    quantidade?: FloatFieldUpdateOperationsInput | number
    insumo?: InsumoUpdateOneRequiredWithoutReceitaItensNestedInput
  }

  export type ReceitaItemUncheckedUpdateWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    insumoId?: IntFieldUpdateOperationsInput | number
  }

  export type ReceitaItemUncheckedUpdateManyWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: FloatFieldUpdateOperationsInput | number
    insumoId?: IntFieldUpdateOperationsInput | number
  }

  export type ProducaoUpdateWithoutReceitaInput = {
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produto?: ProdutoUpdateOneRequiredWithoutProducoesNestedInput
    movimentacoes?: MovimentacaoUpdateManyWithoutProducaoNestedInput
  }

  export type ProducaoUncheckedUpdateWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtoId?: IntFieldUpdateOperationsInput | number
    movimentacoes?: MovimentacaoUncheckedUpdateManyWithoutProducaoNestedInput
  }

  export type ProducaoUncheckedUpdateManyWithoutReceitaInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidadeProduzida?: FloatFieldUpdateOperationsInput | number
    custoTotal?: FloatFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    produzidoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoCreateManyProducaoInput = {
    id?: number
    tipo: $Enums.TipoMovimentacao
    quantidade: number
    custoUnitario?: number | null
    observacao?: string | null
    criadoEm?: Date | string
    insumoId: number
  }

  export type MovimentacaoUpdateWithoutProducaoInput = {
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    insumo?: InsumoUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoUncheckedUpdateWithoutProducaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    insumoId?: IntFieldUpdateOperationsInput | number
  }

  export type MovimentacaoUncheckedUpdateManyWithoutProducaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: EnumTipoMovimentacaoFieldUpdateOperationsInput | $Enums.TipoMovimentacao
    quantidade?: FloatFieldUpdateOperationsInput | number
    custoUnitario?: NullableFloatFieldUpdateOperationsInput | number | null
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    insumoId?: IntFieldUpdateOperationsInput | number
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