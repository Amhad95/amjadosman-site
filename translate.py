import os
import json
import urllib.request
import urllib.error

API_KEY = os.environ.get("GOOGLE_API_KEY")
if not API_KEY:
    print("No API key")
    exit(1)

def translate_content(text, target_lang):
    print(f"Translating to {target_lang}...")
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={API_KEY}"
    
    prompt = f"""You are an expert translator. I will provide a TypeScript object containing website copy.
Translate all the string values into {target_lang}.
Keep the EXACT same TypeScript object structure, keys, formatting, indentation, and comments.
Only translate the values. Do not translate URLs, hrefs, or brand names like 'Amjad Osman', 'Fheem', 'ADSI'.
Output ONLY the raw TypeScript code, starting with `const siteContent"""

    if target_lang == "German":
        prompt += f"""De: typeof siteContentEn = {{`."""
    elif target_lang == "French":
        prompt += f"""Fr: typeof siteContentEn = {{`."""
    elif target_lang == "Bulgarian":
        prompt += f"""Bg: typeof siteContentEn = {{`."""

    prompt += f"""\n\nHere is the English object:\n\n{text}"""

    data = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"temperature": 0.1}
    }
    
    req = urllib.request.Request(url, json.dumps(data).encode("utf-8"), headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req) as response:
            res = json.loads(response.read().decode())
            output = res["candidates"][0]["content"]["parts"][0]["text"]
            # Clean up markdown
            if output.startswith("```typescript"):
                output = output[13:]
            elif output.startswith("```ts"):
                output = output[5:]
            if output.endswith("```"):
                output = output[:-3]
            return output.strip()
    except Exception as e:
        print(f"Error: {e}")
        return None

# Read content.ts
with open("src/lib/content.ts", "r") as f:
    content_ts = f.read()

# Extract siteContentEn
start_idx = content_ts.find("const siteContentEn = {")
end_idx = content_ts.find("const siteContentAr: typeof siteContentEn = {")
if start_idx == -1 or end_idx == -1:
    print("Could not find siteContentEn block")
    exit(1)

en_object = content_ts[start_idx:end_idx].strip()

# We need to split the translation into parts if it's too big, but Gemini 1.5 flash has huge context.
# Let's try sending the whole thing.

de_obj = translate_content(en_object, "German")
fr_obj = translate_content(en_object, "French")
bg_obj = translate_content(en_object, "Bulgarian")

with open("de.ts", "w") as f:
    f.write(de_obj)
with open("fr.ts", "w") as f:
    f.write(fr_obj)
with open("bg.ts", "w") as f:
    f.write(bg_obj)

print("Done")
