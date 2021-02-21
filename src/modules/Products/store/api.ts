export const fetchData = async (params: any, values: any) => {
  // todo any
  const response = await fetch(`http://localhost/backend-ss-adm/${params}`, {
    method: "POST",
    headers: {
      Accept: "application/x-www-form-urlencoded",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(values),
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json()
}
