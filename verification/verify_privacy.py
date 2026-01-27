from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        # Navigate to homepage
        print("Navigating to homepage...")
        page.goto("http://localhost:3000")

        # Wait for footer to be visible
        print("Waiting for footer...")
        page.wait_for_selector("footer")

        # Take screenshot of the footer on homepage
        print("Taking screenshot of homepage footer...")
        footer = page.locator("footer")
        footer.screenshot(path="verification/homepage_footer.png")

        # Click on Privacy Policy link
        print("Clicking Privacy Policy link...")
        page.get_by_role("link", name="Privacybeleid").click()

        # Wait for privacy page to load
        print("Waiting for privacy page...")
        page.wait_for_url("**/privacy")
        page.wait_for_selector("h1")

        # Take screenshot of the privacy page
        print("Taking screenshot of privacy page...")
        page.screenshot(path="verification/privacy_page.png", full_page=True)

        browser.close()
        print("Verification complete!")

if __name__ == "__main__":
    run()
