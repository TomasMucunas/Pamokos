### 1. Basic Service

Создайте базовую службу, которая отвечает на запрос POST к конечной точке с именем /carrier, со следующей структурой запроса:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT"
}
```

И отвечает расстоянием в км:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "distance_km":             316
}
```

### 2. Calculate price

Создайте базовую службу, которая отвечает на запрос POST к конечной точке с именем /carrier, со следующей структурой запроса:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT"
}
```

И отвечает следующей ценой, 0,2 евро/км:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "distance_km":             316,
  "price":                  63.2
}
```

Цена, которую мы взимаем, зависит от расстояния между двумя почтовыми индексами.

### 3. Simple variable prices by vehicle

Наши цены меняются в зависимости от автомобиля. Реализуйте в запросе атрибут «транспортное средство», который принимает одно из следующих значений, применив соответствующую разметку:

- bicycle: +10%
- motorbike: +15%
- parcel_car: +20%
- small_van: +30%
- large_van: +40%

Например, если цена была 100, цена small_van с наценкой будет 130.
В ответе также необходимо вернуть автомобиль, а цену округлить до ближайшего целого числа.

Запрос:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "vehicle":           "bicycle"
}
```

Ответ:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT"
  "vehicle":           "bicycle"
  "price":             348
}
```

### 4. Price by carrier

Используйте папку файла JSON `carier-data.json`, чтобы получить данные оператора связи и получить базовую цену.

Запрос:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "carrier_name":      "RoyalPackages"
}
```

Ответ:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "carrier_name":      "RoyalPackages"
  "price":              30
}
```

### 4. Variable prices by vehicle

Теперь нам нужен список цен для каждого перевозчика для заданных `pickup_postcode`, `delivery_postcode` и `vehicle`.

Используйте папку файла JSON `carier-data.json`, чтобы получить данные оператора связи и рассчитать цену.
Имейте в виду, что служба доставки должна поддерживать тип транспортного средства. При расчете цены добавьте надбавку за обслуживание, а также надбавку за транспортное средство, которую вы ввели в предыдущем упражнении, к базовой цене оператора связи.
Массив Price_list должен содержать объекты JSON, отсортированные по цене. И храниться в базе данных по вашему выбору (Postgres, MySQL, redis, SQLite и т. д.).

Пример запроса:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT",
  "vehicle":           "small_van"
}
```

Example response:

```js
{
  "pickup_postcode":   "SW1A1AA",
  "delivery_postcode": "EC2A3LT"
  "vehicle":           "small_van"
  "price_list": [
    {"service": "RoyalPackages", "price": 300, "delivery_time": 5}
    {"service": "Hercules",      "price": 500, "delivery_time": 2},
  ]
}
```
