import os
from requests import get
from bs4 import BeautifulSoup

from cairosvg import svg2png
import pytesseract
import shutil
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM
from reportlab.graphics import renderSVG
from wand.api import library
import wand.color
import wand.image
import pyvips
import re

def write_to_file(file_name, contents):
    f = open(file_name, "w")
    f.write(contents)
    f.close()

def get_html(url):
    """Creates a response object with the raw HTML from the URL.
    :param str url: the website being requested
    :return: a nicely formatted string of the HTML retrieved
    """
    # Gets the raw HTML with the tags
    headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"}
    response = get(url, headers=headers)
    beau_soup = BeautifulSoup(response.content, 'html.parser')
    for br in beau_soup.find_all("br"):
        br.replace_with("\n")

    # Get relevant body text
    problem_body = beau_soup.find_all("div", class_="challenge-body-html")[0]

    # replacements
    for challenge in problem_body.find_all("div", class_=re.compile("^challenge")):
        challenge.append("\n")

    for title_div in problem_body.find_all("div", class_=re.compile("title$")):
        title = f"### {title_div.text}"
        title_div.replace_with(title)

    for strong in problem_body.find_all("strong"):
        title = f"\n\n### {strong.text}"
        strong.replace_with(title)

    for span in problem_body.find_all("span", class_="MathJax_SVG"):
        span.replace_with("``")

    for li in problem_body.find_all("li"):
        updated_list = f"- {li.text}"
        li.replace_with(updated_list)

    for pre in problem_body.find_all("pre"):
        code = f"```\n{pre.text.strip()}\n```"
        pre.replace_with(code)

    for p in problem_body.find_all("p"):
        p.text.strip()

    problem_body = re.sub(r'\n\n\n', '\n\n', problem_body.get_text())
    problem_body = re.sub(r' +', ' ', problem_body)

    write_to_file("README.md", problem_body)


if __name__ == "__main__":
    # raw_html = get_html("https://www.hackerrank.com/challenges/simple-array-sum/problem")
    raw_html = get_html("https://www.hackerrank.com/challenges/diagonal-difference/problem")