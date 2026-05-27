export default async (req) => {
  if (req.method === "OPTIONS") return new Response(null, {status:204,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type"}});
  const body = await req.json();
  const res = await fetch("https://api.anthropic.com/v1/messages", {method:"POST",headers:{"Content-Type":"application/json","x-api-key":Netlify.env.get("ANTHROPIC_API_KEY"),"anthropic-version":"2023-06-01"},body:JSON.stringify(body)});
  const data = await res.json();
  return new Response(JSON.stringify(data),{status:res.status,headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});
};
export const config = { path: "/api/claude" };
